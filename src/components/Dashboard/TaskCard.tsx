import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../../types';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {task.title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {task.description}
        </Typography>
        <Typography variant="body2">
          Estado: {task.status}
        </Typography>
        <Typography variant="body2">
          Fecha Límite: {new Date(task.deadline).toLocaleDateString()}
        </Typography>
        <Button component={Link} to={`/task/${task.id}`} variant="contained" color="primary" size="small" style={{ marginTop: '10px' }}>
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
