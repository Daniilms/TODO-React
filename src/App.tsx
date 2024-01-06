import { Input } from "./components/Input/Input";
import "./App.css";
import { TasksList } from "./components/TasksList/TasksList";
import { useState } from "react";
import { TaskInt } from "./const/const";

function App() {
  const [todos, setTodos] = useState<TaskInt[]>([]);

  return (
    <div className="app">
      <main>
        <div className="container">
          <div className="app-wrp">
            <div className="app-content">
              <div className="app-top-decoration">
                <h1 className="app-header">TODO List</h1>
                <Input todos={todos} todosSetter={setTodos} />
              </div>
              <TasksList todos={todos} todosSetter={setTodos} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
