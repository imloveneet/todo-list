import React, { useRef } from 'react'
import { FaCheck, FaPlus, FaTrash, FaWindowClose } from 'react-icons/fa'
import Input from './Input'
import Button from './Button'

const Todo = ({ todo = {}, submitHandler, updateTodo, deleteTodo }) => {
  const { id, text, completed } = todo
  const inputRef = useRef()
  const onFormSubmit = (e) => {
    e.preventDefault()
    submitHandler(inputRef.current.value)
    inputRef.current.value = ''
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div className='flex text-black'>
        {id && (
          <>
            <Button
              onClick={() => updateTodo('button', id)}
              className={!completed ? 'text-green-400' : 'text-yellow-500'}
              icon={!completed ? <FaCheck /> : <FaWindowClose />}
            />
            <Input
              className={
                completed ? 'border-b-gray-600 text-gray-400 bg-gray-800' : ''
              }
              disabled={completed}
              value={text}
              onChange={(e) => updateTodo('input', id, e)}
            />
            <Button
              onClick={() => deleteTodo(id)}
              className={'text-rose-500'}
              icon={<FaTrash />}
            />
          </>
        )}
        {!id && (
          <>
            <Input ref={inputRef} />
            <Button type='submit' icon={<FaPlus />} />
          </>
        )}
      </div>
    </form>
  )
}

export default Todo
