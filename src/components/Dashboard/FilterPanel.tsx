import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';
import { Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

const FilterPanel: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const { tasks, setFilteredTasks } = useTaskContext();

  const handleFilterChange = (e: SelectChangeEvent) => {
    const selectedStatus = e.target.value as string;
    setStatus(selectedStatus);

    if (selectedStatus) {
      const filteredTasks = tasks.filter(task => task.status === selectedStatus);
      console.log(filteredTasks);
      setFilteredTasks(filteredTasks);
    } else {
      setFilteredTasks(tasks);
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Filtrar Tareas
      </Typography>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Estado</InputLabel>
        <Select
          value={status}
          onChange={handleFilterChange}
          label="Estado"
        >
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="pending">Pendiente</MenuItem>
          <MenuItem value="in_progress">En Progreso</MenuItem>
          <MenuItem value="completed">Completado</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterPanel;
