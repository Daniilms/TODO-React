import { useState } from "react";
import "./Task.css";

interface taskProps {
  task: task;
}
export function Task({ task, todos, todosSetter }: taskProps) {
  const [currentStatus, setCurrentStatus] = useState(false);
  function deleteTask(id) {
    const newArr = todos.filter((todo) => todo !== id);
    todosSetter(newArr);
  }
  function changeTaskStatus(id) {
    const updatedArr = [];
    console.log(id);

    todos.map((todo) => {
      if (todo === id) {
        todo.status = !todo.status;
        todo.time = new Date().getSeconds();
        updatedArr.push(todo);
        todos.splice(todos.indexOf(todo), 1);
      }
    });

    todosSetter([...todos, updatedArr[0]]);
    setTimeout(() => {}, 2000);
  }

  function checkForStatus() {
    todos.map((todo) => {
      if (todo.status) {
        setCurrentStatus(true);
      } else {
        setCurrentStatus(false);
      }
    });
  }
  return (
    <li className={task.status ? `task task-done` : `task`}>
      <p>{task.text}</p>
      <div className="task-buttons">
        <button
          className="button task-button task-button-done"
          onClick={() => {
            changeTaskStatus(task);
            checkForStatus();
          }}
        >
          Done
        </button>
        <button
          className="button task-button task-button-delete"
          onClick={() => deleteTask(task)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
