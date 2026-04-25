import Link from 'next/link';

import Text from '@/components/atoms/Text';
import Icon from '@/components/atoms/Icon';
import { Home } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transition-all group-hover:scale-110">
        <Icon name={Home} size={20} className="text-white" />
      </div>
      <Text as="span" variant="h4" weight="bold" className="hidden md:inline">
        SmartHome
      </Text>
    </Link>
  );
};

export default Logo;

