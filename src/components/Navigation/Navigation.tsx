import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sistema de Gestión de Tareas
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/generate-report">
          Generar Reporte
        </Button>
        <Button color="inherit" component={Link} to="/new-task">
          Nueva Tarea
        </Button>
        <Button color="inherit" component={Link} to="/logout">
          Cerrar Sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
