import React, { useContext } from "react";
import {
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TaskContext } from "../../contexts/task";
import { handleRemoveTask, toggleTask } from "../../contexts/task/actions";
import { Task } from "../../models/Task";
import { useNavigate } from "react-router-dom";

type TaskProps = {
  task: Task;
};

export const TaskItem = ({ task }: TaskProps) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(TaskContext);

  const { title, id, completed } = task;

  const handleCheckboxChange = () => {
    if (id) toggleTask(dispatch, task);
  };

  return (
    <ListItem
      sx={{
        width: "100%",
        borderRadius: "5px",
        bgcolor: "background.paper",
      }}
      secondaryAction={
        <>
          <Checkbox
            edge="end"
            onClick={() => handleCheckboxChange()}
            checked={completed}
          />
        </>
      }
      disablePadding
    >
      <ListItemButton
        sx={{ p: 2, borderRadius: "5px" }}
        onClick={() => navigate(`/tasks/${id}`)}
        dense
      >
        <ListItemIcon></ListItemIcon>
        <ListItemText key={id} primary={title} />
      </ListItemButton>
    </ListItem>
  );
};
