import Link from 'next/link';
import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';
import {  Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/molecules/Logo';

const Footer = () => {
  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Support', href: '#support' },
  ];

  const companyItems = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ];

  const legalItems = [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black/90 to-gray-900/90 text-white border-t border-white/10">
      <Container className="py-20">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Logo />
            <Text variant="body" className="text-foreground/60 max-w-md">
              Making smart homes accessible to everyone with intuitive controls and rock-solid reliability.
            </Text>
            <div className="flex space-x-4">
              <Icon name={Mail} size={20} className="hover:text-purple-400 cursor-pointer transition-colors" />
              <Icon name={Mail} size={20} className="hover:text-purple-400 cursor-pointer transition-colors" />
              <Icon name={Mail} size={20} className="hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <Text variant="h4" weight="bold" className="mb-6">Product</Text>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block py-1 text-foreground/70 hover:text-white transition-colors text-sm">
                {item.name}
              </Link>
            ))}
          </div>

          <div>
            <Text variant="h4" weight="bold" className="mb-6">Company</Text>
            {companyItems.map((item) => (
              <Link key={item.name} href={item.href} className="block py-1 text-foreground/70 hover:text-white transition-colors text-sm">
                {item.name}
              </Link>
            ))}
          </div>

          <div>
            <Text variant="h4" weight="bold" className="mb-6">Legal</Text>
            {legalItems.map((item) => (
              <Link key={item.name} href={item.href} className="block py-1 text-foreground/70 hover:text-white transition-colors text-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-8">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Text variant="caption" className="text-foreground/50">
            © 2024 SmartHome IoT. All rights reserved.
          </Text>
          <div className="flex items-center gap-2 text-foreground/50 text-sm">
            <Icon name={Mail} size={16} />
            <Icon name={Phone} size={16} />
            <Icon name={MapPin} size={16} />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

