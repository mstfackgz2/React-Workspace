import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div style={{ width: "100%", marginTop: "100px" }}>
      {todos &&
        todos.map((todo, key) => (
          <Todo
            key={key}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
}

export default TodoList;
