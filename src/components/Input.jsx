import React, { forwardRef } from 'react'

const Input = forwardRef(({className, ...props}, ref) => {
  return (
    <input
      ref={ref}
      className={`text-black outline-none w-full p-4 border-b border-b-slate-300 ${className}`}
      type='text'
      placeholder='Enter Todo...'
      {...props}
    />
  )
})

export default Input