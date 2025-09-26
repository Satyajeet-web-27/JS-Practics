import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";
import { TodoProvider } from "./context/TodoContext";
import ThemeBtn from "./component/ThemeBtn";

function App() {
  const [todos, setTodos] = useState([]);
  const [themeMode, setThemeMode] = useState("dark");

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

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        themeMode,
        lightTheme,
        darkTheme,
      }}
    >
      <div className="bg-gray-100 dark:bg-gray-900 h-screen flex flex-col items-center justify-center gap-2">
        <div className="bg-gray-300 relative dark:bg-gray-600 flex flex-col justify-center items-center p-4 rounded w-1/3">
          <span className="absolute top-3 right-3">
            <ThemeBtn />
          </span>
          <h1 className="text-3xl mb-4 font-bold dark:text-green-500">
            Todo App
          </h1>
          <h2 className="dark:text-white">Task : {todos.length}</h2>
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
