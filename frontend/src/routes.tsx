import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { TaskLayout } from "./layouts";
import { TaskListPage, TaskDetailPage, TaskCreationPage } from "./pages";

const routes: RouteObject[] = [
  {
    path: "/tasks",
    element: <TaskLayout />,
    children: [
      {
        element: <TaskListPage />,
        index: true,
      },
      {
        path: "create",
        element: <TaskCreationPage />,
      },
      {
        path: ":id",
        element: <TaskDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/tasks" />,
  },
];

export default routes;
