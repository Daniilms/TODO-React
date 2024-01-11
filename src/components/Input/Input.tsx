import { TaskInt } from "../../const/const";
import "./input.css";
import { useState } from "react";

interface InputProps {
  todos: TaskInt[];
  todosSetter: (todos: TaskInt[]) => void;
  path: string;
}
export function Input({ todosSetter, todos, path }: InputProps) {
  const [text, setText] = useState("");
  const [showForm, setShowForm] = useState(false);

  function changeInputValue(evt: React.ChangeEvent<HTMLInputElement>) {
    setText(evt.target.value);
  }
  function clearInput() {
    setText("");
  }
  function validate() {
    if (text === "") {
      return false;
    }
    return true;
  }
  return (
    <div className="input-wrp">
      <div
        className={
          showForm ? "input-closed " : "input-closed input-closed-shown"
        }
      >
        <h3 className="input-closed-header">Add Events</h3>
        <button
          className="button input-closed-button"
          onClick={() => setShowForm(true)}
        >
          +
        </button>
      </div>
      <form
        className={showForm ? "form form-opened" : "form"}
        action="#"
        onSubmit={(evt) => {
          evt.preventDefault();
          if (validate()) {
            clearInput();
          }
        }}
      >
        <input
          className="input"
          placeholder="Title"
          value={text}
          onChange={(evt) => {
            changeInputValue(evt);
          }}
        />
        <button
          className="input-button button"
          onClick={() => {
            validate()
              ? todosSetter([
                  { text, status: false, category: path.slice(7, path.length) },
                  ...todos,
                ])
              : 0;
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
