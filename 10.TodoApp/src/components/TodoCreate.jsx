import React, { useState } from "react";
import "../App.css";
function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) {
      alert("Todo Kismi Bos Olamaz");
      return;
    }
    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    onCreateTodo(request);
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        className="todo-input"
        type="text"
        placeholder="Enter a To Do"
        name=""
        id=""
      />
      <button onClick={createTodo} className="todo-create-button">
        Create TO-DO
      </button>
    </div>
  );
}

export default TodoCreate;
