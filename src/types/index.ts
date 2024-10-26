export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    status: 'pending' | 'in_progress' | 'completed';
    assignedTo: string;
    projectId: string;
  }
  
  export interface User {
    id: string;
    name: string;
    role: string;
    email: string;
  }
  
  export interface Project {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
  }
  