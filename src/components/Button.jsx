import React from 'react'

const Button = ({icon, type="button", className, ...props}) => {
  return (
    <button
          type={type}
          className={`bg-white text-black border-b border-b-slate-300 px-5 cursor-pointer ${className}`}
          {...props}
        >
          {icon}
        </button>
  )
}

export default Button