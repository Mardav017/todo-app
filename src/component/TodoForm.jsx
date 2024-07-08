import { useState } from 'react'

const TodoForm = ({ handleAddTodo, display, setDisplay, setBlur }) => {
  const [todoText, setTodoText] = useState('')

  const handleAdd = () => {
    if (todoText) {
      handleAddTodo(todoText)
      setTodoText('')
    }
  }
  return (
    <div
      className={`todo-form text-center absolute top-[30%] left-[37%] border-2 bg-white p-4 h-48 w-80 ${display}`}
    >
      <h1>Add Todo</h1>
      <input
        type='text'
        placeholder='Add Todo'
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        className='todo-text bg-gray-200 p-2 rounded-md border w-full my-5'
        onKeyPress={e => e.key === 'Enter' && handleAdd()}
      />
      <button className='bg-blue-400 p-2 rounded-md' onClick={handleAdd}>
        Submit
      </button>
      <button
        className='absolute right-2 top-1'
        onClick={() => {
          setDisplay('hidden')
          setBlur('')
          setTodoText('')
        }}
      >
        X
      </button>
    </div>
  )
}

export default TodoForm
