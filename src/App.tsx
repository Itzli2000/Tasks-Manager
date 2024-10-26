import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import TaskDetails from './components/TaskDetails/TaskDetails';
import ReportGenerator from './components/ReportGenerator/ReportGenerator';

const App: React.FC = () => (
  <TaskProvider>
    <Router>
      <Navigation />
      <div className="App">
        <h1>Sistema de Gestión de Tareas</h1>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/task/:taskId" element={<TaskDetails />} />
          <Route path="/generate-report" element={<ReportGenerator />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  </TaskProvider>
);

export default App;
