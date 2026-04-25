"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: ClassValue;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = clsx(
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
      fullWidth && 'w-full',
      {
        // Sizes
        'h-10 px-4 py-2 text-sm': size === 'sm',
        'h-12 px-6 text-base': size === 'md',
        'h-14 px-8 text-lg': size === 'lg',
      },
      {
        // Variants
        'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 gradient-purple rounded-medium shadow-medium transition-hover': variant === 'primary',
        'bg-white text-purple-600 border border-purple-200 shadow-sm hover:bg-purple-50 rounded-medium transition-hover': variant === 'secondary',
        'text-foreground hover:bg-accent hover:text-foreground rounded-medium transition-colors': variant === 'ghost',
        'border border-border bg-background shadow-sm hover:bg-accent hover:shadow-medium rounded-medium transition-all': variant === 'outline',
      },
      className
    );

    return (
      <button
        ref={ref}
        className={twMerge(baseStyles)}
        disabled={disabled}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

