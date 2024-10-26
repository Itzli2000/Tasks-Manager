import React from 'react';
import { Task } from '../../types';
import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface ReportViewProps {
  reportData: Task[];
}

const ReportView: React.FC<ReportViewProps> = ({ reportData }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Reporte de Tareas
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Fecha Límite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reportData.map(task => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{new Date(task.deadline).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReportView;
