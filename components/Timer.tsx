import { Component } from "react";

export type TimerProps = {
  initialValue: number;
  started: boolean;
  onFinish: () => void;
};

export type TimerState = {
  value: number;
  started: boolean;
  startTime: number;
  intervalId: NodeJS.Timer | undefined;
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
    const value: number = this.state.value - 1;
    this.setState({ value, started: value === 0 }, () => {
      if (value === 0) {
        this.props.onFinish();
      }
    });
  };

  public componentDidUpdate(prevProps: Readonly<TimerProps>, prevState: Readonly<TimerState>) {
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

  public componentWillUnmount() {
    if (this.state.intervalId !== undefined) {
      clearInterval(this.state.intervalId);
    }
  }

  public render = () => {
    return <span>{this.state.value}</span>;
  };
}
