import { useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import TodoCard from "../component/TodoCard";
import TodoForm from "../component/TodoForm";

const Todos = () => {
  const [display, setDisplay] = useState("hidden");
  const [blur, setBlur] = useState("");

  const [todolist, setTodolist] = useState(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  const handleAddTodo = (value) => {
    setTodolist([...todolist, { id: uuidv1(), todo: value, completed: false }]);
    setDisplay("hidden");
    setBlur("");
  };


  const handleCompleteTodo = (id) => {
    setTodolist(
      todolist.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (id) => {
    setTodolist(todolist.filter((todo) => todo.id !== id));
  };
  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div className={`bg-white rounded-md w-[80%] h-[80%] shadow-xl p-2 text-center ${blur}`}>
        <h1 className="text-3xl font-bold">To-do App</h1>
        <TodoCard
          todos={todolist}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
      <div className={`absolute bottom-10 right-10 ${blur}`}>
        <button
          type="button"
          className="material-symbols-outlined rounded-full bg-blue-900 text-white px-3 py-2 border text-3xl"
          onClick={() => {
            setDisplay("");
            setBlur("blur-sm");
          }}
        >
          add
        </button>
      </div>
      <TodoForm
        handleAddTodo={handleAddTodo}
        display={display}
        setDisplay={setDisplay}
        setBlur={setBlur}
      />
    </div>
  );
};

export default Todos;
