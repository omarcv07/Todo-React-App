import { render, screen } from "@testing-library/react";
import { TaskListItem } from "./TaskListItem";
import { Task } from "../../../models/Task";
import { BrowserRouter as Router } from "react-router-dom";

describe("TaskListItem", () => {
  const task: Task = {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    status_id: 1,
    priority_id: 1,
    due_date: new Date(),
    completed: false,
  };

  it("renders the TaskItem component", () => {
    render(
      <Router>
        <TaskListItem task={task} />
      </Router>
    );
    const taskItemElement = screen.getByText("Task 1");
    expect(taskItemElement).toBeInTheDocument();
  });
});
