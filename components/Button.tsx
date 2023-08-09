import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean,
}

const Button = forwardRef<HTMLButtonElement, Props> (({
  className, children , disabled, secondary ,type='button', ...props
}, ref) => {
  return (
    <button type={type} className={twMerge(` rounded-md bg-slate-700 border border-transparent px-4 py-1 disabled:cursor-not-allowed
        disabled:opacity-50 text-white font-bold hover:opacity-75 transition ${secondary? ' ' : ''}`, className)} disabled={disabled} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button