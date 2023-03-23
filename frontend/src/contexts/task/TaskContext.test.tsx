import { render, screen, fireEvent } from "@testing-library/react";
import { TaskContextProvider, TaskContext } from "./TaskContext";

describe("TaskContextProvider", () => {
  it("should render children without error", () => {
    render(
      <TaskContextProvider>
        <div>Test Children</div>
      </TaskContextProvider>
    );

    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("should provide state and dispatch to children", () => {
    render(
      <TaskContextProvider>
        <TaskContext.Consumer>
          {({ state, dispatch }) => (
            <>
              <div data-testid="tasks-length">{state.tasks.length}</div>
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TASK",
                    payload: {
                      id: 1,
                      title: "Test task",
                      description: "This is a description",
                      priority_id: 1,
                      status_id: 2,
                    },
                  })
                }
              >
                Add Task
              </button>
            </>
          )}
        </TaskContext.Consumer>
      </TaskContextProvider>
    );

    expect(screen.getByTestId("tasks-length")).toHaveTextContent("0");

    fireEvent.click(screen.getByText("Add Task"));

    expect(screen.getByTestId("tasks-length")).toHaveTextContent("1");
  });
});
