import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jspb from "google-protobuf";
import io_pb = require("../genproto/farm_ng_proto/tractor/v1/io_pb.js");
import Event = io_pb.Event;
console.info("event", io_pb, event);
export const MyEvent = Event;

export type State = {
  readonly data: Object;
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    console.info(jspb);

    this.state = { data: new Object() };
  }

  public componentDidMount() {
    const ws = new WebSocket("ws://localhost:8989");
    ws.binaryType = "arraybuffer";

    ws.onmessage = (ev: MessageEvent) => {
      const pbEvent = MyEvent.deserializeBinary(new Uint8Array(ev.data));
      this.setState({ data: pbEvent.toObject() });
    };
  }
  public render() {
    return <div>{JSON.stringify(this.state.data)} </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
