import { LucideIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface IconProps extends ComponentProps<LucideIcon> {
  name: LucideIcon;
  className?: ClassValue;
  size?: number | string;
}

const Icon = ({ name: NameIcon, size = 24, className, ...props }: IconProps) => {
  return (
    <NameIcon
      size={size}
      className={twMerge('text-foreground/80 group-hover:text-foreground transition-colors', className)}
      {...props}
    />
  );
};

export default Icon;

