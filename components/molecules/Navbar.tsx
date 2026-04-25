"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'Homepage', href: '/' },
  { name: 'App', href: '/app' },
  { name: 'Smart Scenes', href: '/scenes' },
  { name: 'Voice Control', href: '/voice' },
  { name: 'Videos', href: '/videos' },
] as const;

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDefaultState = !isScrolled;
  const textInactiveColor = isDefaultState ? 'text-gray-500 hover:text-gray-900' : 'text-white/80 hover:text-white';
  const textActiveColor = 'text-[#6C4CF1]';
  const navbarBg = isDefaultState ? 'bg-white border-b border-gray-100' : 'bg-transparent backdrop-blur-md';

  return (
    <nav className={twMerge(
      'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ease-in-out',
      navbarBg,
      className
    )}>
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/MODENA Seamless - Full Lockup Logo - Full Color 1.png"
            alt="MODENA Seamless IoT"
            width={200}
            height={40}
            className={clsx(
              'h-10 w-auto object-contain transition-colors duration-300',
              isDefaultState ? 'invert-0' : 'invert filter brightness-0'
            )}
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-sm font-medium px-1 py-1 rounded-md transition-all duration-300 whitespace-nowrap',
                  isActive ? textActiveColor : textInactiveColor,
                  isDefaultState && isActive && 'border-b-2 border-[#6C4CF1]'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;

