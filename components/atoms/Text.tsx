import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface TextProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-lg' | 'caption';
  className?: ClassValue;
  as?: keyof JSX.IntrinsicElements;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
}

const Text = ({
  children,
  variant = 'body',
  className,
  as = 'p',
  weight = 'normal',
}: TextProps) => {
  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const styles = {
    h1: `text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight`,
    h2: `text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`,
    h3: `text-3xl md:text-4xl font-bold leading-tight`,
    h4: `text-2xl md:text-3xl font-semibold leading-tight`,
    'body-lg': 'text-lg leading-relaxed',
    body: 'text-base leading-relaxed',
    caption: 'text-sm leading-relaxed',
  };

  const Component = as as any;

  return (
    <Component className={twMerge(`${styles[variant]} ${weights[weight]} text-foreground`, className)}>
      {children}
    </Component>
  );
};

export default Text;

