export interface Task {
    id?: number;
    title: string;
    description?: string;
    status_id: number | string;
    priority_id: number | string;
    due_date?: Date | null;
    completed?: boolean;
}