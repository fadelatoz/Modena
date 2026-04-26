import { ReactNode } from 'react';
import Image from 'next/image';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CategoryCardProps {
  title: string;
  description?: string;
  image?: string;
  variant: 'image' | 'gradient' | 'light';
  size?: 'normal' | 'large';
  className?: ClassValue;
}

const CategoryCard = ({
  title,
  description,
  image,
  variant,
  size = 'normal',
  className,
}: CategoryCardProps) => {
  const baseClasses = 'rounded-2xl overflow-hidden relative p-6 transition-all duration-300 hover:scale-[1.02]';

  const variantClasses = {
    image: 'bg-gradient-to-t from-black/60 to-transparent text-white',
    gradient: 'bg-gradient-to-br from-[#6C4CF1] to-[#8E6CFF] text-white',
    light: 'bg-white/10 backdrop-blur-md text-white border border-white/20',
  };

  const sizeClasses = {
    normal: 'h-64',
    large: 'row-span-2 h-[400px]',
  };

  return (
    <div className={twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      )}
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2 leading-tight">{title}</h3>
          {description && (
            <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
          )}
        </div>
        <button className="mt-auto text-sm font-medium opacity-90 hover:opacity-100 transition-opacity">
          Discover More →
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;

