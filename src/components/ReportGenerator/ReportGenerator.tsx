import React, { useState } from 'react';
import CriteriaForm from './CriteriaForm';
import ReportView from './ReportView';
import { Task } from '../../types';
import api from '../../services/api';

const ReportGenerator: React.FC = () => {
  const [reportData, setReportData] = useState<Task[]>([]);

  const handleGenerateReport = (criteria: { startDate: Date; endDate: Date; status: string }) => {
    const filteredTasks = api.fetchFilteredTasks(criteria.startDate, criteria.endDate, criteria.status);
    setReportData(filteredTasks);
  };

  return (
    <div className="report-generator">
      <h2>Generador de Reporte de Tareas</h2>
      <CriteriaForm onSubmit={handleGenerateReport} />
      <ReportView reportData={reportData} />
    </div>
  );
};

export default ReportGenerator;
