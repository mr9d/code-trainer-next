import { Component, MouseEvent, MouseEventHandler } from "react";
import { Timer } from "./Timer";

export type ChallengeProps = Record<string, never>;

export type ChallengeState = {
  timerStarted: boolean;
};

export class Challenge extends Component<ChallengeProps, ChallengeState> {
  constructor(props: ChallengeProps) {
    super(props);
    this.state = {
      timerStarted: false,
    };
  }

  private startButtonClick: MouseEventHandler<HTMLInputElement> = (_evt: MouseEvent<HTMLInputElement>) => {
    this.setState({ timerStarted: true });
  };

  private stopButtonClick: MouseEventHandler<HTMLInputElement> = (_evt: MouseEvent<HTMLInputElement>) => {
    this.setState({ timerStarted: false });
  };

  public render = () => {
    return (
      <>
        <Timer initialValue={20} started={this.state.timerStarted} />
        <input type="button" value="Start" onClick={this.startButtonClick} />
        <input type="button" value="Stop" onClick={this.stopButtonClick} />
      </>
    );
  };
}
