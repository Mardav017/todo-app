const TodoCard = ({ todos, handleDeleteTodo, handleCompleteTodo }) => {
  return (
    <div className='m-4 border-2 rounded-md h-[85%] overflow-y-scroll '>
      {todos && todos.map(todo => (
        <div
          key={todo.id}
          className={`text-left flex justify-between border px-2 ${
            todo.completed ? 'bg-red-200' : ''
          }`}
        >
          <section className='flex'>
            <input
              type='checkbox'
              name={todo.todo}
              key={todo.id}
              className='group m-2'
              onChange={() => handleCompleteTodo(todo.id)}
              checked={todo.completed}
            />
            <p
              id={todo.id}
              className={`${todo.completed ? 'line-through' : ''}`}
            >
              {todo.todo}
            </p>
          </section>

          <button
            id={todo.id}
            onClick={() => handleDeleteTodo(todo.id)}
            className='material-symbols-outlined'
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoCard
