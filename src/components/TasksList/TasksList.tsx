import { Task } from "../Task/Task";
import { State, TaskInt } from "../../const/const";
import "./TasksList.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export function TasksList() {
  const todosList = useSelector((state: State) => state.todoList);

  const path = useLocation();
  const currentPath = path.pathname;

  function generateNum() {
    const min = 0;
    const max = 100000;
    return Math.random() * (max - min + 1);
  }

  if (todosList === undefined || todosList.length === 0) {
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
      {todosList.map((task: TaskInt) => {
        if (task.category === currentPath.slice(7, currentPath.length)) {
          return <Task key={generateNum()} task={task} todosList={todosList} />;
        }
      })}
    </ul>
  );
}
