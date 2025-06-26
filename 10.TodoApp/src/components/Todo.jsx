import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "./Todo.css";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.content);

  const removeTodo = () => {
    onRemoveTodo(todo.id);
  };

  const updateTodo = () => {
    const request = {
      id: todo.id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className="todo">
      <div className="todo-item">
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input1"
            type="text"
          />
        ) : (
          todo.content
        )}
      </div>
      <div>
        <IoIosRemoveCircle onClick={removeTodo} className="todo-icons" />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
