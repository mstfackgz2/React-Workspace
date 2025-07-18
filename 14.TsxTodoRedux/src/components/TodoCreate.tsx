import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoslice";
import { useState } from "react";
import type { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();
  const [content, setContent] = useState<string>("");

  const handleCreateTodo = () => {
    if (content.trim().length == 0) {
      alert("Enter a To Do");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999),
      content: content,
    };
    dispatch(createTodo(payload));
    setContent("");
  };

  return (
    <div className="todo-create">
      <input
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
        placeholder="Enter a To-Do"
        className="todo-input"
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-button">
        Create
      </button>
    </div>
  );
}

export default TodoCreate;
