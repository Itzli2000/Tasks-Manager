import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FilterPanel from './FilterPanel';
import TaskList from './TaskList';
import { useTaskContext } from '../../hooks/useTaskContext';

const Dashboard: React.FC = () => {
  const { tasks } = useTaskContext();
  console.log(tasks);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard de Tareas
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FilterPanel />
        </Grid>
        <Grid item xs={12}>
          <TaskList tasks={tasks} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
