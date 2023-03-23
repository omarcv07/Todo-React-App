import { TaskState } from "../types";
import { ADD_TASK, GET_ALL_TASK, REMOVE_TASK, TaskActionTypes, TOGGLE_TASK, UPDATE_TASK } from "./TaskActionTypes";

export const taskReducer = (state: TaskState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
        case GET_ALL_TASK:
            return {
                tasks: action.payload,
                error: null,
                loading: false
            };
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload],
                error: null,
                loading: false
            };
        case UPDATE_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
                error: null,
                loading: false
            };
        case REMOVE_TASK:
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload),
                error: null,
                loading: false
            };
        case TOGGLE_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
                error: null,
                loading: false
            };
        default:
            return state;
    }
};