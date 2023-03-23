import { Task } from "../../../models/Task";

export const GET_ALL_TASK = "GET_ALL_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const TOGGLE_TASK = "TOGGLE_TASK"

export interface GetAllTasksAction {
    type: typeof GET_ALL_TASK;
    payload: Task[];
}

export interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: Task;
}

export interface UpdateTaskAction {
    type: typeof UPDATE_TASK;
    payload: Task
}

export interface RemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: number;
}

export interface ToggleTaskAction {
    type: typeof TOGGLE_TASK;
    payload: number;
}

export type TaskActionTypes = UpdateTaskAction | GetAllTasksAction | AddTaskAction | RemoveTaskAction | ToggleTaskAction;