import React from 'react';
import { useTaskContext } from '../../context/TaskContext';
import TaskList from './TaskList';
import FilterPanel from './FilterPanel';

const Dashboard: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="dashboard">
      <h2>Dashboard de Tareas</h2>
      <div className="dashboard-content">
        <FilterPanel />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;
