import { Task } from "../Task/Task";
import "./TasksList.css";
export function TasksList({ todos, todosSetter }) {
  if (todos.length === 0) {
    return (
      <div className="tasks-list-empty">
        <h2 className="tasks-list-empty-header">
          There will be a list of your cases...
        </h2>
      </div>
    );
  }
  function generateNum() {
    const min = 0;
    const max = 100000;
    return Math.random() * (max - min + 1);
  }
  return (
    <ul className="tasks-list" style={todos.length > 0 ? { height: todos } : 0}>
      {todos.length !== 0
        ? todos.map((task: string) => {
            return (
              <Task
                key={generateNum()}
                task={task}
                todos={todos}
                todosSetter={todosSetter}
              />
            );
          })
        : null}
    </ul>
  );
}
