import React from 'react';
import { Task } from '../../types';
import TaskCard from './TaskCard';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map(task => <TaskCard key={task.id} task={task} />)
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default TaskList;
