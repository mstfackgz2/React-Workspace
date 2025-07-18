import "../css/Todo.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoslice";
import { useState } from "react";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<boolean>(true);
  const [newTodo, setNewTodo] = useState<string>(content);
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEdit(true);
  };

  return (
    <div className="todo-todo">
      <div className="todo-text">
        {edit ? (
          content
        ) : (
          <input
            type="text"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        )}
      </div>
      <div className="todo-icons">
        <IoIosRemoveCircleOutline onClick={handleRemoveTodo} />
        {edit ? (
          <FaEdit onClick={() => setEdit(false)} />
        ) : (
          <FaRegCheckCircle onClick={handleUpdateTodo} />
        )}
      </div>
    </div>
  );
}

export default Todo;
