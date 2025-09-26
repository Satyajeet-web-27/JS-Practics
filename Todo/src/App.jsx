import { useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";
import { TodoProvider } from "./context/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-gray-900 h-screen flex flex-col items-center justify-center gap-2">
        <div className="bg-gray-600 flex flex-col justify-center items-center p-4 rounded w-1/3">
          <h1 className="text-3xl mb-4 text-green-500">Todo App</h1>
          <h2>Task : {todos.length}</h2>
          <div className="">
            <div className="todo-container" id="todo-form">
              <TodoForm />
            </div>
            <div className="p-4" id="todo-list">
              {todos.map((todo) => (
                <div key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
