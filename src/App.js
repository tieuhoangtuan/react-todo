import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1 className="header">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
