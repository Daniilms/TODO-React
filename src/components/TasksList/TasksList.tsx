import { Task } from "../Task/Task";
import { TaskInt } from "../../const/const";
import "./TasksList.css";

interface TasksListProps {
  todos: TaskInt[];
  todosSetter: (todos: TaskInt[]) => void;
}
export function TasksList({ todos, todosSetter }: TasksListProps) {
  if (todos === null || todos.length === 0) {
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
    <ul className="tasks-list">
      {todos !== null && todos.length !== 0
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
