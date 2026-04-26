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
  const [open, setOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-900 p-1 rounded-md transition-colors text-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '▲' : '▼'}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white px-6 py-6 rounded-b-2xl shadow-xl border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      'text-base font-medium py-3 px-4 rounded-lg transition-all duration-200 text-left',
                      isActive ? 'text-[#5B3DF5] bg-purple-50 font-semibold' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;

