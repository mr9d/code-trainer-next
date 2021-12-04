import React from "react";
import renderer, { ReactTestRenderer, ReactTestInstance } from "react-test-renderer";
import { Challenge } from "./Challenge";

test("Challenge contain two buttons", () => {
  const component: ReactTestRenderer = renderer.create(<Challenge />);

  const startButton: ReactTestInstance | null = component.root.find(
    (instance: ReactTestInstance) =>
      instance.type === "input" && instance.props["type"] === "button" && instance.props["value"] === "Start"
  );
  const stopButton: ReactTestInstance | null = component.root.find(
    (instance: ReactTestInstance) =>
      instance.type === "input" && instance.props["type"] === "button" && instance.props["value"] === "Stop"
  );

  expect(startButton).not.toBeNull();
  expect(stopButton).not.toBeNull();
});
