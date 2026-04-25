import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TabProps {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
}

const Tab = ({ children, active, onClick, className }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'relative px-6 py-3 text-sm font-medium transition-all duration-200 flex-1',
        active
          ? 'bg-white text-gray-900 shadow-lg rounded-full'
          : 'text-white/70 hover:text-white',
        className
      )}
    >
      {children}
    </button>
  );
};

export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

const Tabs = ({ value, onChange, children, className }: TabsProps) => {
  return (
    <div className={clsx(
      'bg-[#2D1F5B] rounded-full p-1 flex shadow-xl',
      className
    )}>
      {children}
    </div>
  );
};

export default Tabs;

