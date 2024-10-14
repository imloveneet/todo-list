import { useState } from 'react'
import Todo from './components/Todo'
import { FaCheck } from 'react-icons/fa'

function App() {
  const [todos, setTodos] = useState([])

  const getNewTodo = (text) => {
    return {
      id: Math.floor(Math.random() * 10000),
      text: text,
      completed: false,
      date: new Date().getTime(),
    }
  }

  const createTodo = (value) => {
    if (value) {
      setTodos((prev) => [...prev, getNewTodo(value)])
    }
  }

  const updateTodo = (type, id, e) => {
    setTodos((prev) =>
      prev.map((todo) => {
        const obj = { ...todo }
        if (todo.id === id && type === 'button') {
          obj.completed = !todo.completed
        }
        if (todo.id === id && type === 'input') {
          obj.text = e.target.value
        }
        return obj
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className='bg-gray-800 h-screen w-screen p-10 overflow-scroll'>
      <div className='flex justify-center items-center gap-5 text-orange-300 font-extrabold text-6xl mb-10'>
        <FaCheck />
        <h1>TODOS</h1>
      </div>
      <Todo submitHandler={createTodo} />
      {todos
        .sort((a, b) => b.date - a.date)
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
    </div>
  )
}

export default App
