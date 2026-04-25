import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ShowcaseCardProps {
  title: string;
  description?: string;
  variant?: 'purple' | 'light';
  image?: string;
  type?: 'feature' | 'image' | 'ui';
  children?: ReactNode;
  className?: ClassValue;
}

const ShowcaseCard = ({
  title,
  description,
  variant = 'light',
  image,
  type = 'feature',
  children,
  className,
}: ShowcaseCardProps) => {
  const baseStyles = clsx(
    'p-6 rounded-2xl shadow-sm flex-1 hover:shadow-md transition-all duration-300',
    {
      'bg-gradient-to-br from-[#6C4CF1] to-[#8E6CFF] text-white': variant === 'purple',
      'bg-white text-gray-900 border border-gray-100': variant === 'light',
    },
    className
  );

  const content = (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg leading-tight">{title}</h3>
      {description && (
        <p className="text-sm opacity-90 leading-relaxed">{description}</p>
      )}
      {children}
    </div>
  );

  return (
    <div className={baseStyles}>
      {image && type === 'image' ? (
        <div className="h-32 rounded-xl overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default ShowcaseCard;

