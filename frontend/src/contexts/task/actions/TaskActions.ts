import { Task } from '../../../models/Task';
import { createTask, getAllTasks, removeTask, updateTask } from '../../../services';

export const handleGetAllTasks = async (dispatch: any) => {
    try {
        const response = await getAllTasks()

        const tasks = response.data.map((task: Task) => ({
            ...task,
            completed: task.status_id !== 3 ? false : true
        }));

        dispatch({ type: 'GET_ALL_TASK', payload: tasks });
    } catch (error) {
        console.error(error);
    }
};

export const handleAddTask = async (dispatch: any, task: Task) => {
    try {
        const response = await createTask(task);
        const newTask = response.data;
        dispatch({ type: 'ADD_TASK', payload: newTask });
    } catch (error) {
        console.error(error);
    }
};

export const handleUpdateTask = async (dispatch: any, task: Task) => {
    try {
        const response = await updateTask(task);
        const updatedTask = response.data;
        dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    } catch (error) {
        console.error(error);
    }
};

export const handleRemoveTask = async (dispatch: any, id: number) => {
    try {
        await removeTask(id)
        dispatch({ type: 'REMOVE_TASK', payload: id });
    } catch (error) {
        console.error(error);
    }
};

export const toggleTask = async (dispatch: any, task: Task) => {
    try {
        const statusIdUpdated = task.completed ? 1 : 3
        await updateTask({ ...task, status_id: statusIdUpdated });
        dispatch({ type: 'UPDATE_TASK', payload: { ...task, status_id: statusIdUpdated } });
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    } catch (error) {
        console.error(error);
    }
}