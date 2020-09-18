import React, { FC, ReactElement } from 'react'

// Button component is not being used right now, but will we in the future.

interface ButtonProps {
  action?: () => void
}

const Button: FC<ButtonProps> = ({ children, action }): ReactElement => {
  const transition = 'transition duration-150 ease-in-out'
  const hover = 'transform lg:hover:scale-105 lg:hover:bg-orange-900'
  const focus = 'focus:outline-none'
  const active = 'active:opacity-50'
  return (
    <button
      className={`bg-red-900 text-white rounded-lg shadow-lg py-2 px-4 m-4 ${hover} ${transition} ${focus} ${active}`}
      onClick={action}
    >
      {children}
    </button>
  )
}

export default Button
