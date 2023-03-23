import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TaskDetailPage } from "./TaskDetailPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("TaskCreationPage", () => {
  test("renders the task form", () => {
    render(
      <Router>
        <TaskDetailPage />
      </Router>
    );
    const taskFormElement = screen.getByLabelText("Description");
    expect(taskFormElement).toBeInTheDocument();
  });
});
