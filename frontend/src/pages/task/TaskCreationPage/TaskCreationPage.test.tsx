import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskCreationPage } from "./TaskCreationPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("TaskCreationPage", () => {
  test("renders the task form", () => {
    render(
      <Router>
        <TaskCreationPage />
      </Router>
    );
    const taskFormElement = screen.getByLabelText("Description");
    expect(taskFormElement).toBeInTheDocument();
  });
});
