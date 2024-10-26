import React, { useState } from 'react';
import { useTaskContext } from '../../context/TaskContext';

const FilterPanel: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const { tasks, setFilteredTasks } = useTaskContext();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);

    if (selectedStatus) {
      const filteredTasks = tasks.filter(task => task.status === selectedStatus);
      setFilteredTasks(filteredTasks);
    } else {
      setFilteredTasks(tasks);
    }
  };

  return (
    <div className="filter-panel">
      <label htmlFor="statusFilter">Filtrar por Estado:</label>
      <select id="statusFilter" value={status} onChange={handleFilterChange}>
        <option value="">Todos</option>
        <option value="pending">Pendiente</option>
        <option value="in_progress">En Progreso</option>
        <option value="completed">Completado</option>
      </select>
    </div>
  );
};

export default FilterPanel;
