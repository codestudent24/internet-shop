import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import cn from 'clsx';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'orange' | 'white',
  size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  size = 'md',
  ...rest
}) => {
  return <button {...rest} className={cn(
    'btn',
    {
      'btn-orange': variant === 'orange',
      'btn-white': variant === 'white',
      'btn-large': size === 'lg',
      'px-5 py-2 text-sm': size === 'sm',
    },
    className)}
  >
    {children}
  </button>
}

export default Button