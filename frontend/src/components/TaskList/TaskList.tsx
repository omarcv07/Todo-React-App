import React, { useContext, useEffect } from "react";
import { TaskContext } from "../../contexts/task";
import { handleGetAllTasks } from "../../contexts/task/actions";
import { Task } from "../../models/Task";
import { TaskListItem } from "./TaskListItem";
import { List } from "@mui/material";

export const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  useEffect(() => {
    handleGetAllTasks(dispatch);
  }, [dispatch]);

  return (
    <List>
      {state.tasks.map((task: Task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </List>
  );
};
