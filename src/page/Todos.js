import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import TodoCard from "../component/TodoCard";
import TodoForm from "../component/TodoForm";
import { connect } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "../actions/todoActions";

const Todos = (props) => {
  const [display, setDisplay] = useState("hidden");
  const [blur, setBlur] = useState("");

  // const [todolist, setTodolist] = useState(() => {
  //   const data = localStorage.getItem("todos");
  //   return data ? JSON.parse(data) : [];
  // });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(props.todolist));
  }, [props.todolist]);

  const handleAddTodo = (value) => {
    const data = { id: uuidv1(), todo: value, completed: false };
    props.addTodo(data);

    setDisplay("hidden");
    setBlur("");
  };

  const handleCompleteTodo = (id) => {
    props.completeTodo(id);
  };
  const handleDeleteTodo = (id) => {
    props.deleteTodo(id);
  };
  return (
    <div className="bg-blue-400 h-screen flex items-center justify-center">
      <div
        className={`bg-white rounded-md w-[80%] h-[80%] shadow-xl p-2 text-center ${blur}`}
      >
        <h1 className="text-3xl font-bold">To-do App</h1>
        <TodoCard
          todos={props.todolist}
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

const mapStateToProps = (state) => {
  return {
    todolist: state.todolist.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    addTodo: (data) => {
      dispatch(addTodo(data));
    },
    completeTodo: (id) => {
      dispatch(completeTodo(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
