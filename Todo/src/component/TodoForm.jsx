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
          className="flex-1 border p-2 outline-none dark:text-white"
          value={todo}
          onChange={(e) => {
            setTodo(e.currentTarget.value);
          }}
        />
        <button
          type="submit"
          class="group cursor-pointer outline-none hover:rotate-90 duration-300"
          title="Add New"
        >
          <svg
            class="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path stroke-width="1.5" d="M8 12H16"></path>
            <path stroke-width="1.5" d="M12 16V8"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
