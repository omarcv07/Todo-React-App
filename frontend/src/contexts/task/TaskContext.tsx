import React, { createContext, useReducer } from "react";
import { taskReducer } from "./reducers";
import { TaskActionTypes } from "./reducers/TaskActionTypes";
import { TaskState } from "./types/TaskState";

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const TaskContext = createContext<{
  state: TaskState;
  dispatch: React.Dispatch<TaskActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const TaskContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
