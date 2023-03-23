import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskContainer } from "./TaskContainer";

describe("TaskContainer", () => {
  it("renders children inside a MUI Container", () => {
    render(<TaskContainer>TaskContainer render test</TaskContainer>);
    const container = screen.getByRole("main");
    expect(container).toBeInTheDocument();
    expect(container).toContainElement(
      screen.getByText("TaskContainer render test")
    );
  });
});
