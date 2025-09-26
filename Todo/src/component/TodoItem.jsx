import { useState } from "react";
import { useTodo } from "../context/index";

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
      className={`flex w-full gap-2 items-center border border-gray-300 p-2 ${
        todo.complete ? "bg-green-200" : ""
      }`}
    >
      <input
        className="cursor-pointer"
        checked={todo.complete}
        onChange={toggleChange}
        type="checkbox"
        id="toggle"
      />
      <input
        className={`flex-1 outline-none border-b-2 border-gray-300 focus:border-blue-500 ${
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
        className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
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
        {isEdit ? "Save" : "Edit"}
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
