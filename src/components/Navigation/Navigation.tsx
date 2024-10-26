import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/generate-report">Generar Reporte</Link></li>
        <li><Link to="/logout">Cerrar Sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
