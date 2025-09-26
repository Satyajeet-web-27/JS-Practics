import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  true;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, complete: false });
    setTodo("");
  };
  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write Todo..."
          className="flex-1 border p-2 outline-none"
          value={todo}
          onChange={(e) => {
            setTodo(e.currentTarget.value);
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
