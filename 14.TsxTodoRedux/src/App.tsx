import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="todo-create">
        <TodoCreate />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
