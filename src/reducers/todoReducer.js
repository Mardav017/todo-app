const initState = {
  todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      let newTodo = state.todos.filter((todo) => {
        return todo.id !== action.id;
      });
      return {
        ...state,
        todos: newTodo,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.data],
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
