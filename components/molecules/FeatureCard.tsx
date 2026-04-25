import { ReactNode } from 'react';
import { Link } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface FeatureCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  className?: ClassValue;
}

const FeatureCard = ({ image, alt, title, description, className }: FeatureCardProps) => {
  return (
    <div key={Math.random().toString()} className={twMerge(
      'group relative overflow-hidden rounded-large shadow-medium hover:shadow-large hover:-translate-y-2 bg-background border border-border/50 transition-all duration-500 transition-hover',
      className
    )}>
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-8">
        <Text as="h3" variant="h3" weight="semibold" className="mb-4 group-hover:text-purple-500 transition-colors">
          {title}
        </Text>
        <Text variant="body" className="text-foreground/80 mb-6 leading-relaxed">
          {description}
        </Text>
        <Button variant="ghost" className="font-medium">
          Learn More
          <Icon name={Link} size={16} />
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;

