import React from "react";
import { render, screen } from "@testing-library/react";
import { TaskContext } from "../../contexts/task/TaskContext";
import { TaskList } from "./TaskList";
import { BrowserRouter as Router } from "react-router-dom";

const testTasks = [
  {
    id: 1,
    title: "Test task 1",
    description: "This is a description",
    priority_id: 1,
    status_id: 2,
    due_date: null,
    completed: false,
  },
  {
    id: 2,
    title: "Test task 2",
    description: "This is a description",
    priority_id: 1,
    status_id: 2,
    due_date: null,
    completed: false,
  },
  {
    id: 3,
    title: "Test task 3",
    description: "This is a description",
    priority_id: 1,
    status_id: 2,
    due_date: null,
    completed: false,
  },
];

describe("TaskList", () => {
  test("displays the tasks from context", () => {
    const stateMock = { tasks: testTasks, loading: false, error: null };
    render(
      <Router>
        <TaskContext.Provider value={{ state: stateMock, dispatch: jest.fn() }}>
          <TaskList />
        </TaskContext.Provider>
      </Router>
    );
    expect(screen.getByText("Test task 1")).toBeInTheDocument();
    expect(screen.getByText("Test task 2")).toBeInTheDocument();
    expect(screen.getByText("Test task 3")).toBeInTheDocument();
  });
});
