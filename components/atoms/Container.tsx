import React, { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
  as?: React.ElementType;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const Container = ({
  children,
  className,
  as,
  maxWidth = '2xl',
}: ContainerProps) => {
  const Component = as || 'div';
  const widths = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  } as Record<string, string>;

  return (
    <Component className={twMerge(`w-full mx-auto px-4 sm:px-6 lg:px-8 ${widths[maxWidth!]}`, className)}>
      {children}
    </Component>
  );
};

export default Container;


