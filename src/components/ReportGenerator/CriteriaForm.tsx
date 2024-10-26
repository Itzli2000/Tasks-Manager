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
      <label>Fecha de Inicio</label>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />

      <label>Fecha de Fin</label>
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />

      <label>Estado</label>
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">Todos</option>
        <option value="pending">Pendiente</option>
        <option value="in_progress">En Progreso</option>
        <option value="completed">Completado</option>
      </select>

      <button type="submit">Generar Reporte</button>
    </form>
  );
};

export default CriteriaForm;
