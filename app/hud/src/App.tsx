import React from "react";
import logo from "./logo.svg";
import "./App.css";

import * as protobuf from "google-protobuf";
import { Event } from "./genproto/farm_ng_proto/tractor/v1/io_pb";
import { SteeringCommand } from "./genproto/farm_ng_proto/tractor/v1/steering_pb";

export type State = {
  readonly data: Object;
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { data: new Object() };
  }

  public componentDidMount() {
    const ws = new WebSocket("ws://localhost:8989");
    ws.binaryType = "arraybuffer";

    ws.onmessage = (ev: MessageEvent) => {
      const pbEvent = Event.deserializeBinary(new Uint8Array(ev.data));
      const pbData = pbEvent.getData();
      if (pbData) {
        const command = pbData.unpack(
          SteeringCommand.deserializeBinary,
          "farm_ng_proto.tractor.v1.SteeringCommand"
        );
        if (command) {
          this.setState({ data: command.toObject() });
        } else {
          this.setState({ data: pbEvent.toObject() });
        }
      } else {
        this.setState({ data: pbEvent.toObject() });
      }
    };
  }
  public render() {
    return <div>{JSON.stringify(this.state.data)} </div>;
  }
}

export default App;
