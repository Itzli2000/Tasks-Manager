import React, { useState, useEffect } from 'react';
import { Task } from '../../types';
import { fetchTasks, updateTaskStatus } from '../../services/api';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

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
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>{task.title}</Typography>
        <Typography variant="body1" gutterBottom>{task.description}</Typography>
        <Typography variant="body2" color="textSecondary">Estado: {task.status}</Typography>
        <Typography variant="body2" color="textSecondary">
          Fecha Límite: {new Date(task.deadline).toLocaleDateString()}
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={() => updateTaskStatus(task.id, 'completed')}>
            Marcar como Completada
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;
