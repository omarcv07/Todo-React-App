import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Task } from "../../../models/Task";
import { TaskItem } from "../../TaskItem/TaskItem";

type TaskListItemProps = {
  task: Task;
};

export const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    <Box mb={1}>
      <TaskItem task={task} />
    </Box>
  );
};
