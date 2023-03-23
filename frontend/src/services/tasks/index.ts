import axios from "axios"
import { API_URL } from "../../config"
import { Task } from "../../models/Task"

export const getAllTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`)
    return response.data
}

export const getTask = async (id: number) => {
    const response = await axios.get(`${API_URL}/tasks/${id}`)
    return response.data
}

export const createTask = async (task: Task) => {
    const response = await axios.post(`${API_URL}/tasks`, task)
    return response.data
}

export const updateTask = async (task: Task) => {
    const response = await axios.put(`${API_URL}/tasks/${task.id}`, task)
    return response.data
}

export const removeTask = async (id: number) => {
    const response = await axios.delete(`${API_URL}/tasks/${id}`)
    return response.data
}