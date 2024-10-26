import React, { createContext, useContext, useState, useEffect } from 'react';
import { Task } from '../types';
import api from '../services/api';

interface TaskContextType {
  tasks: Task[];
  filteredTasks: Task[];
  fetchTasks: () => void;
  addTask: (task: Task) => void;
  updateTaskStatus: (taskId: string, status: string) => void;
  deleteTask: (taskId: string) => void;
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const fetchTasks = () => {
    const allTasks = api.fetchTasks();
    setTasks(allTasks);
    setFilteredTasks(allTasks); // Inicializa filteredTasks con todas las tareas
  };

  const addTask = (task: Task) => {
    api.addTask(task);
    fetchTasks(); // Refresca la lista de tareas
  };

  const updateTaskStatus = (taskId: string, status: string) => {
    api.updateTaskStatus(taskId, status);
    fetchTasks(); // Refresca la lista de tareas
  };

  const deleteTask = (taskId: string) => {
    api.deleteTask(taskId);
    fetchTasks(); // Refresca la lista de tareas
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, filteredTasks, fetchTasks, addTask, updateTaskStatus, deleteTask, setFilteredTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTaskContext must be used within a TaskProvider');
  return context;
};
