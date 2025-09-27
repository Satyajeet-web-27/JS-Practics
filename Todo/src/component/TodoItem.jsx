import { useState } from "react";
import { useTodo } from "../context/index";
import "../CSS/ToogleComplete.css";

function TodoItem({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEdit(!isEdit);
  };

  const toggleChange = () => {
    toggleComplete(todo.id);
  };

  console.log(todo);

  return (
    <div
      className={`flex mb-3 w-full gap-2 items-center border border-gray-300 p-2 ${
        todo.complete ? "" : ""
      }`}
    >
      <label class="checkbox-wrapper">
        <input type="checkbox" checked={todo.checked} onChange={toggleChange} />
        <div class="checkmark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M20 6L9 17L4 12"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </label>
      <input
        className={`flex-1 dark:text-white outline-none border-b-2 border-gray-300 focus:border-blue-500 ${
          todo.complete ? "line-through" : ""
        }`}
        type="text"
        name="todo"
        id="todo-msg"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEdit}
      />

      <button
        class="inline-flex items-center justify-center p-2 bg-blue-600 ease-in-out delay-75 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 active:scale-95 transition-all duration-200"
        onClick={() => {
          if (todo.complete) return;

          if (isEdit) {
            editTodo();
          } else {
            setIsEdit((prev) => !prev);
          }
        }}
        disabled={todo.complete}
      >
        {isEdit ? (
          <svg
            class="h-5 w-5 self-center items-center"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
              stroke-linejoin="round"
              stroke-linecap="round"
              data-path="box"
            ></path>
            <path
              d="M7 3L7 8L15 8"
              stroke-linejoin="round"
              stroke-linecap="round"
              data-path="line-top"
            ></path>
            <path
              d="M17 20L17 13L7 13L7 20"
              stroke-linejoin="round"
              stroke-linecap="round"
              data-path="line-bottom"
            ></path>
          </svg>
        )}
      </button>

      <button
        class="inline-flex items-center p-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
