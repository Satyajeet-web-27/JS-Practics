import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";

function App() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gray-600">
      <div className="flex flex-col p-5 items-center justify-center bg-gray-300">
        <h1 className="text-green-600 p-4 text-3xl font-bold text-center">
          Todo
        </h1>
        <div className="border-b border-gray-600 pb-3">
          <TodoForm />
        </div>

        <TodoItem />
      </div>
    </div>
  );
}

export default App;
