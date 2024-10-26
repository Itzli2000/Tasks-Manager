import { useContext } from "react";
import { TaskContextType } from "../types";
import { TaskContext } from "../context/TaskContextType";

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
