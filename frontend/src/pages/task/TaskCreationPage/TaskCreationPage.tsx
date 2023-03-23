import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskForm } from "../../../components/TaskForm";
import { Task } from "../../../models/Task";
import { createTask, getTask, updateTask } from "../../../services";

export const TaskCreationPage = () => {
  const navigate = useNavigate();

  const handleCreateTask = async (values: Task) => {
    try {
      await createTask(values);
      navigate("/tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return <TaskForm onSubmit={handleCreateTask} />;
};
