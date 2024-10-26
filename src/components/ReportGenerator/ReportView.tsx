import React from 'react';
import { Task } from '../../types';

interface ReportViewProps {
  reportData: Task[];
}

const ReportView: React.FC<ReportViewProps> = ({ reportData }) => {
  return (
    <div className="report-view">
      <h3>Reporte de Tareas</h3>
      {reportData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Fecha Límite</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{new Date(task.deadline).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay tareas que coincidan con los criterios seleccionados.</p>
      )}
    </div>
  );
};

export default ReportView;
