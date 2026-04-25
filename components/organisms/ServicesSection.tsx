import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Card from '@/components/molecules/Card';
import Icon from '@/components/atoms/Icon';
import Button from '@/components/atoms/Button';
import { Wrench, ShieldCheck, Heart } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Professional Installation',
    description: 'Expert setup by certified technicians. We handle everything from wiring to configuration.',
  },
  {
    icon: ShieldCheck,
    title: '3-Year Warranty',
    description: 'Comprehensive coverage with 24/7 support. Peace of mind guaranteed.',
  },
  {
    icon: Heart,
    title: 'Lifetime Care',
    description: 'Free software updates and priority support for the life of your system.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32">
      <Container>

          <Text variant="h2" className="mb-6">
            Worry-Free Ownership
          </Text>
          <Text variant="body-lg" className="max-w-2xl mx-auto text-foreground/80">
            From installation to ongoing maintenance, we've got you covered
          </Text>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
  
              <Card key={index}>
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <Text variant="h3" weight="semibold" className="mb-4">
                      {service.title}
                    </Text>
                    <Text variant="body" className="text-foreground/80">
                      {service.description}
                    </Text>
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;

