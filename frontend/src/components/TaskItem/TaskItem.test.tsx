import { render, screen } from "@testing-library/react";
import { TaskItem } from "./TaskItem";
import { Task } from "../../models/Task";
import { TaskContext } from "../../contexts/task";
import { BrowserRouter as Router } from "react-router-dom";

describe("TaskItem", () => {
  const testTasks: Task[] = [
    {
      id: 1,
      title: "Test Task",
      description: "This is a test task",
      status_id: 1,
      priority_id: 1,
      due_date: new Date(),
      completed: false,
    },
  ];

  const testTask: Task = {
    id: 1,
    title: "Test Task",
    description: "This is a test task",
    status_id: 1,
    priority_id: 1,
    due_date: new Date(),
    completed: false,
  };

  const dispatchMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the task title", () => {
    render(
      <Router>
        <TaskContext.Provider
          value={{
            state: { tasks: testTasks, loading: false, error: null },
            dispatch: dispatchMock,
          }}
        >
          <TaskItem task={testTask} />
        </TaskContext.Provider>
      </Router>
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });
});
