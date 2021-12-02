import { Component } from "react";

export type TimerProps = {
  initialValue: number;
  started: boolean;
};

export type TimerState = {
  value: number;
  started: boolean;
  startTime: number;
  intervalId: NodeJS.Timer | undefined
};

export class Timer extends Component<TimerProps, TimerState> {
  constructor(props: TimerProps) {
    super(props);
    this.state = {
      value: props.initialValue,
      started: props.started,
      startTime: Date.now(),
      intervalId: props.started ? setInterval(this.tick, 1000) : undefined,
    };
  }

  private tick = () => {
    this.setState({ value: this.state.value - 1 });
  }

  componentDidUpdate(prevProps: Readonly<TimerProps>, prevState: Readonly<TimerState>) {
    if (this.props.started === true && prevProps.started === false) {
      this.setState({
        intervalId: setInterval(this.tick, 1000),
      });
    } else if (this.props.started === false && prevProps.started === true) {
      if (prevState.intervalId !== undefined) {
        clearInterval(prevState.intervalId);
      }
      this.setState({
        intervalId: undefined,
      });
    }
  }

  public render = () => {
    return <div>{this.state.value}</div>;
  };
}
