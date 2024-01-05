import "./input.css";
import { useState } from "react";

export function Input({ todosSetter, todos }) {
  const [text, setIsText] = useState("");
  function changeInputValue(evt) {
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
          onClick={(evt) => {
            todosSetter([{ text, status: false }, ...todos]);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
