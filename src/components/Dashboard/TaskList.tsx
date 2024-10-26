import React from 'react';
import { Task } from '../../types';
import TaskCard from './TaskCard';
import { Grid } from '@mui/material';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <Grid container spacing={2}>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskCard task={task} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <p>No hay tareas disponibles.</p>
        </Grid>
      )}
    </Grid>
  );
};

export default TaskList;
