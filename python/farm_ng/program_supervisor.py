import asyncio
import logging
import os
from collections import namedtuple

from farm_ng.ipc import EventBus
from farm_ng.ipc import EventBusQueue
from farm_ng.ipc import get_message
from farm_ng.ipc import make_event
from farm_ng_proto.tractor.v1.program_supervisor_pb2 import Program
from farm_ng_proto.tractor.v1.program_supervisor_pb2 import ProgramSupervisorStatus
from farm_ng_proto.tractor.v1.program_supervisor_pb2 import StartProgramRequest
from farm_ng_proto.tractor.v1.program_supervisor_pb2 import StopProgramRequest
from google.protobuf.text_format import MessageToString

event_bus = EventBus('program_supervisor')

logger = logging.getLogger('program_supervisor')
logger.setLevel(logging.INFO)

farm_ng_root = os.environ['FARM_NG_ROOT']

ProgramInfo = namedtuple('ProgramInfo', 'path args name description')

library = {
    1000: ProgramInfo(
        path=f'{farm_ng_root}/build/cpp/farm_ng/farm-ng-log-playback',
        args=['-send', '-log', f'{farm_ng_root}/../tractor-data/cal01/events-02498-00000.log'],
        name='Apriltag Rig Calibration Playback',
        description='Log playback',
    ),
    1100: ProgramInfo(path='sleep', args=['5'], name='Sleep 5', description='Take a nap'),
    1110: ProgramInfo(path='sleep', args=['100'], name='Sleep 100', description='Take a looong nap'),
}
libraryPb = [Program(id=_id, name=p.name, description=p.description) for _id, p in library.items()]


class ProgramSupervisor:
    def __init__(self):
        self.status = ProgramSupervisorStatus(stopped=ProgramSupervisorStatus.ProgramStopped(), library=libraryPb)
        self.shutdown = False
        self.child_process = None

    async def run(self):
        await asyncio.gather(self.send_status(), self.handle_start(), self.handle_stop())

    async def send_status(self):
        while not self.shutdown:
            event = make_event('program_supervisor/status', self.status)
            print(MessageToString(event, as_one_line=True))
            event_bus.send(event)
            await asyncio.sleep(1)

    async def handle_stop(self):
        with EventBusQueue(event_bus) as event_queue:
            while not self.shutdown:
                stop_request: StopProgramRequest = await get_message(
                    event_queue,
                    'program_supervisor/request',
                    StopProgramRequest,
                )
                if self.status.WhichOneof('status') != 'running':
                    logger.info(f"StopProgramRequest received while program status was {self.status.WhichOneof('status')}")
                    continue

                if stop_request.id != self.status.running.program.id:
                    logger.info(f'StopProgramRequest received for program {stop_request.id} while program {self.status.running.program.id} was running')
                    continue

                self.child_process.terminate()

    async def handle_start(self):
        with EventBusQueue(event_bus) as event_queue:
            while not self.shutdown:
                start_request: StartProgramRequest = await get_message(event_queue, 'program_supervisor/request', StartProgramRequest)
                if self.status.WhichOneof('status') != 'stopped':
                    logger.info(f"StartProgramRequest received while program status was {self.status.WhichOneof('status')}")
                    continue
                program_info = library.get(start_request.id)
                if not program_info:
                    logger.info(f'StartProgramRequest received for program {start_request.id} which does not exist.')
                    continue
                self.status.running.program.id = start_request.id
                asyncio.get_event_loop().create_task(self.launch_child_process(program_info))

    async def launch_child_process(self, program_info):
        self.child_process = await asyncio.create_subprocess_exec(program_info.path, *program_info.args)
        self.status.running.program.pid = self.child_process.pid
        self.status.running.program.stamp_start.GetCurrentTime()
        await self.monitor_child_process()

    async def monitor_child_process(self):
        await self.child_process.wait()
        self.status.stopped.last_program.CopyFrom(self.status.running.program)
        self.status.stopped.last_program.stamp_end.GetCurrentTime()
        self.status.stopped.last_program.exit_code = self.child_process.returncode

        self.child_process = None


if __name__ == '__main__':
    supervisor = ProgramSupervisor()
    asyncio.get_event_loop().run_until_complete(supervisor.run())