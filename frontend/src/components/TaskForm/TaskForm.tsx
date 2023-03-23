import React, { useContext, useEffect, useState } from "react";
import { Button, TextField, MenuItem, Grid, Paper } from "@mui/material";
import { Task } from "../../models/Task";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { priorities, statuses } from "../../utils";
import { Box } from "@mui/system";
import { handleRemoveTask } from "../../contexts/task/actions";
import { TaskContext } from "../../contexts/task";

interface TaskFormProps {
  task?: Task;
  onSubmit: (task: Task) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit }) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(TaskContext);

  const [formValues, setFormValues] = useState<Task>({
    title: "",
    description: "",
    priority_id: "",
    status_id: "",
    due_date: null,
  });

  const handleGoBack = () => {
    navigate("/tasks");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  const handleRemoveButtonClick = () => {
    if (task && task.id) {
      handleRemoveTask(dispatch, task.id);
      handleGoBack();
    }
  };

  useEffect(() => {
    if (task) setFormValues(task);
  }, [task]);

  return (
    <Paper elevation={0} sx={{ p: 4 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Title"
              name="title"
              value={formValues.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              select
              label="Priority"
              name="priority_id"
              value={formValues.priority_id}
              onChange={handleChange}
              InputLabelProps={{
                shrink: formValues.priority_id ? true : false,
              }}
            >
              {priorities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              select
              label="Status"
              name="status_id"
              value={formValues.status_id}
              onChange={handleChange}
              InputLabelProps={{ shrink: formValues.status_id ? true : false }}
            >
              {statuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Due Date"
              type="date"
              name="due_date"
              value={moment(formValues.due_date).format("YYYY-MM-DD")}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              justifyContent={"space-between"}
              display={"flex"}
              alignItems={"center"}
            >
              <Box>
                <Button
                  sx={{ mr: 1 }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleGoBack}
                >
                  Cancel
                </Button>
              </Box>
              {task && (
                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemoveButtonClick()}
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
