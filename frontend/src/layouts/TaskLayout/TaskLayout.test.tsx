import React from "react";
import { render } from "@testing-library/react";
import { TaskLayout } from "./TaskLayout";
import { BrowserRouter as Router } from "react-router-dom";

describe("TaskLayout", () => {
  test("renders header", () => {
    const { getByText } = render(
      <Router>
        <TaskLayout />
      </Router>
    );
    expect(getByText("Tasks")).toBeInTheDocument();
  });

  test("renders container", () => {
    const { getByRole } = render(
      <Router>
        <TaskLayout />
      </Router>
    );
    expect(getByRole("main")).toBeInTheDocument();
  });
});
