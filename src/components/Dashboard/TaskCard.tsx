import React from 'react';
import { Task } from '../../types';
import { Link } from 'react-router-dom';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Estado: {task.status}</p>
      <p>Fecha Límite: {task.deadline.toLocaleDateString()}</p>
      <Link to={`/task/${task.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default TaskCard;
