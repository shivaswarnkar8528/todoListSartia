import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TaskTable from "./components/TaskTable";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoInput formData={[]} setFormdata={""} />
        <div className="tasktable">
          <TaskTable/>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
