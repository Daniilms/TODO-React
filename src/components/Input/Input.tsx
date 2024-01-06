import { TaskInt } from "../../const/const";
import "./input.css";
import { useState } from "react";

interface InputProps {
  todos: TaskInt[];
  todosSetter: (todos: TaskInt[]) => void;
}
export function Input({ todosSetter, todos }: InputProps) {
  const [text, setIsText] = useState("");

  function changeInputValue(evt: React.ChangeEvent<HTMLInputElement>) {
    setIsText(evt.target.value);
  }
  function clearInput() {
    setIsText("");
  }

  return (
    <div className="input-wrp">
      <form
        className="form"
        action="#"
        onSubmit={(evt) => {
          evt.preventDefault();
          clearInput();
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
            todosSetter([{ text, status: false }, ...todos]);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
