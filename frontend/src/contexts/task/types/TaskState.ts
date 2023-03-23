import { Task } from "../../../models/Task";

export type TaskState = {
    tasks: Task[];
    loading: boolean;
    error: string | null;
};