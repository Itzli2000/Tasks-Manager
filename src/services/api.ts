import { Task } from '../types';

const LOCAL_STORAGE_KEY = 'tasks';

const getTasksFromStorage = (): Task[] => {
  const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToStorage = (tasks: Task[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

export const fetchTasks = (): Task[] => {
  return getTasksFromStorage();
};

export const fetchFilteredTasks = (startDate: Date, endDate: Date, status: string): Task[] => {
  const tasks = getTasksFromStorage();
  return tasks.filter(task => {
    const taskDate = new Date(task.deadline);
    const matchesStatus = status ? task.status === status : true;
    const matchesDateRange = taskDate >= startDate && taskDate <= endDate;
    return matchesStatus && matchesDateRange;
  });
};

export const addTask = (task: Task): void => {
  const tasks = getTasksFromStorage();
  tasks.push(task);
  saveTasksToStorage(tasks);
};

export const updateTaskStatus = (taskId: string, status: string): void => {
  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.map(task =>
    task.id === taskId ? { ...task, status } : task
  ) as Task[];
  saveTasksToStorage(updatedTasks);
};

export const deleteTask = (taskId: string): void => {
  const tasks = getTasksFromStorage();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  saveTasksToStorage(updatedTasks);
};

export default {
  fetchTasks,
  fetchFilteredTasks,
  addTask,
  updateTaskStatus,
  deleteTask,
};
