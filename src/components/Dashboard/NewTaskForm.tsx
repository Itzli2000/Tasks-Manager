import React, { useState } from 'react';
import { Task } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useTaskContext } from '../../hooks/useTaskContext';

const NewTaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      deadline: new Date(deadline),
      status: 'pending',
      assignedTo: '',
      projectId: '',
    };

    addTask(newTask);
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Nueva Tarea</Typography>
      <TextField
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Fecha Límite"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar Tarea
      </Button>
    </Box>
  );
};

export default NewTaskForm;
