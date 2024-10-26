import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';

interface CriteriaFormProps {
  onSubmit: (criteria: { startDate: Date; endDate: Date; status: string }) => void;
}

const CriteriaForm: React.FC<CriteriaFormProps> = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      onSubmit({
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Fecha de Inicio"
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Fecha de Fin"
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Estado</InputLabel>
        <Select displayEmpty value={status} onChange={e => setStatus(e.target.value)}>
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="pending">Pendiente</MenuItem>
          <MenuItem value="in_progress">En Progreso</MenuItem>
          <MenuItem value="completed">Completado</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Generar Reporte
      </Button>
    </form>
  );
};

export default CriteriaForm;
