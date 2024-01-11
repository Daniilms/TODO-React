import { Task } from "../Task/Task";
import { TaskInt } from "../../const/const";
import "./TasksList.css";
import { useEffect } from "react";

interface TasksListProps {
  todos: TaskInt[];
  todosSetter: (todos: TaskInt[]) => TaskInt[];
  pathSetter: (path: string) => void;
}

export function TasksList({ pathSetter, todos, todosSetter }: TasksListProps) {
  const path = window.location.pathname;
  const currentPath = path.slice(7, path.length).toLocaleLowerCase();
  useEffect(() => {
    pathSetter(currentPath);
  });

  function generateNum() {
    const min = 0;
    const max = 100000;
    return Math.random() * (max - min + 1);
  }

  if (todos === undefined || todos.length === 0) {
    return (
      <div className="tasks-list-empty">
        <h2 className="tasks-list-empty-header">
          There will be a list of your cases...
        </h2>
      </div>
    );
  }

  return (
    <ul className="tasks-list">
      {todos !== undefined && todos.length !== 0
        ? todos.map((task: TaskInt) => {
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
