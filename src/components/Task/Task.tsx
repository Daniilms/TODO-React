import { useState } from "react";
import "./Task.css";
import { TaskInt } from "../../const/const";

interface taskProps {
  task: TaskInt;
  todos: TaskInt[];
  todosSetter: (todos: TaskInt[]) => void;
}
export function Task({ task, todos, todosSetter }: taskProps) {
  const [, setCurrentStatus] = useState(false);

  function deleteTask(cTask: TaskInt) {
    const newArr = todos.filter((todo) => todo !== cTask);
    todosSetter(newArr);
  }
  function changeTaskStatus(cTask: TaskInt) {
    const updatedArr: TaskInt[] = [];

    todos.map((todo) => {
      if (todo === cTask) {
        todo.status = !todo.status;
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
  if (task === null) {
    return <div>Loading</div>;
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
