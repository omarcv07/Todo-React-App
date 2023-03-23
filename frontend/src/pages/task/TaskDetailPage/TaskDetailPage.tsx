import { useCallback, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { TaskForm } from "../../../components/TaskForm";
import { Task } from "../../../models/Task";
import { getTask, updateTask } from "../../../services";

export const TaskDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    priority_id: "",
    status_id: "",
    due_date: null,
  });

  const handleGetTask = useCallback(async () => {
    try {
      const response = await getTask(Number(params.id));
      const taskFetched = response.data;
      setTask(taskFetched);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    handleGetTask();
  }, [handleGetTask]);

  const handleUpdateTask = async (values: Task) => {
    try {
      await updateTask(values);
      navigate("/tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box mt={5}>
      <TaskForm task={task} onSubmit={handleUpdateTask} />
    </Box>
  );
};
