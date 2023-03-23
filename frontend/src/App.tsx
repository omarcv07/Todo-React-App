import React from "react";
import { TaskContextProvider } from "./contexts/task/TaskContext";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TaskContextProvider>
        <AppRouter />
      </TaskContextProvider>
    </BrowserRouter>
  );
};

export default App;
