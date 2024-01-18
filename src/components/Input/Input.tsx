import { useLocation } from "react-router-dom";

import { fillTodoList } from "../../store/action";
import { store } from "../../store/store";
import "./input.css";
import { useState } from "react";

export function Input() {
  const [text, setText] = useState("");
  const [showForm, setShowForm] = useState(false);

  const path = useLocation();

  const currentPath = path.pathname;

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
  function generateNum() {
    const min = 0;
    const max = 100000;
    return Math.random() * (max - min + 1);
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
              ? store.dispatch(
                  fillTodoList({
                    text: text,
                    status: "",
                    category: currentPath.slice(7, currentPath.length),
                    id: generateNum(),
                  })
                )
              : 0;
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
