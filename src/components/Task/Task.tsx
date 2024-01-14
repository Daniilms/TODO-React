import "./Task.css";
import { TaskInt } from "../../const/const";

interface taskProps {
  task: TaskInt;
  todos: TaskInt[];
  todosSetter: (todos: TaskInt[]) => void;
}
export function Task({ task, todos, todosSetter }: taskProps) {
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
  }
  if (task === null) {
    return <div>Loading</div>;
  }

  return (
    <li className={task.status ? "task task-done" : "task"}>
      <p
        className={
          task.text.length > 20 ? "task-text task-text-small" : "task-text"
        }
      >{`${todos.indexOf(task) + 1}.${task.text}`}</p>
      <div className={"task-buttons"}>
        {!task.status ? (
          <button
            className="button task-button task-button-done"
            onClick={() => {
              changeTaskStatus(task);
            }}
          >
            <img src="../../../img/done-btn.svg" alt="close button" />
          </button>
        ) : null}
        <button
          className="button task-button task-button-delete"
          onClick={() => deleteTask(task)}
        >
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <circle
                className="c"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path className="d" fill="#FFFFFF" />
            </defs>

            <g id="a" />

            <g id="b">
              <circle className="d" cx="12" cy="12" r="10.5" />

              <line className="c" x1="6.75" x2="17.25" y1="6.75" y2="17.25" />

              <line className="c" x1="17.25" x2="6.75" y1="6.75" y2="17.25" />
            </g>
          </svg>
        </button>
      </div>
    </li>
  );
}
