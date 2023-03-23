import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskForm } from "./TaskForm";
import { BrowserRouter as Router } from "react-router-dom";

const mockTask = {
  id: 1,
  title: "Task 1",
  description: "Description of task 1",
  priority_id: 1,
  status_id: 1,
  due_date: new Date(),
};

describe("TaskForm", () => {
  test("renders task form without errors", () => {
    render(
      <Router>
        <TaskForm onSubmit={() => {}} />
      </Router>
    );
  });

  test("renders pre-filled form when task prop is passed", () => {
    render(
      <Router>
        <TaskForm task={mockTask} onSubmit={() => {}} />
      </Router>
    );
    expect(screen.getByDisplayValue(mockTask.title)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockTask.description)).toBeInTheDocument();
  });
});
