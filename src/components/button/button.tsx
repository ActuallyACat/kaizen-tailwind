import * as React from 'react';
import classnames from "classnames"
import "./button.scss"

export interface ButtonProps { 
  disabled: boolean,
  focus: boolean,
  children?: React.ReactNode
}
export const Button = ({
  disabled = false,
  focus = false, // This is a shit thing to do. Just for demo purposes
  children = null
}: ButtonProps) => {
  const classNames = classnames(
    'border-4',
    'rounded',
    'px-md',
    'py-sm',
    'transition-background-color',
    {
      'hover:bg-ash': !focus,
      'text-wisteria-800': !disabled,
      'text-wisteria-800-disabled': disabled,
      'bg-white': !disabled,
      'bg-ash': disabled,
      'border-wisteria-500': !disabled,
      'border-wisteria-500-disabled': disabled
    }
  )

  const focusClassNames = classnames(
    {
      'rounded': focus,
      'inline-block': focus,
      'p-half': focus,
      'border-focus': focus,
    }
  );

  return (
    <span className={focusClassNames}>
      <button className={classNames}>
        {children}
      </button>
    </span>
  )
}