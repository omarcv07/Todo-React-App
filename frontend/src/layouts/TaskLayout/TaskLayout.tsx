import React from "react";
import { Outlet } from "react-router-dom";
import { TaskContainer } from "../../containers";
import { TaskHeader } from "./TaskHeader";

export const TaskLayout = () => {
  return (
    <TaskContainer>
      <TaskHeader />
      <Outlet />
    </TaskContainer>
  );
};
