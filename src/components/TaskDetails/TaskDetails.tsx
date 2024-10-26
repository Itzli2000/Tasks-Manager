import React, { useState, useEffect } from 'react';
import { Task } from '../../types';
import { fetchTasks } from '../../services/api';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const TaskDetails: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetchTasks();
        setTask(response.find((task) => task.id === taskId) || null);
      } catch (error) {
        console.error("Error fetching task", error);
      } finally {
        setLoading(false);
      }
    };

    if (taskId) fetchTask();
  }, [taskId]);

  if (loading) return <Loading />;

  if (!task) return <div>No se encontró la tarea.</div>;

  return (
    <div className="task-details">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Estado: {task.status}</p>
      <p>Asignado a: {task.assignedTo}</p>
    </div>
  );
};

export default TaskDetails;
