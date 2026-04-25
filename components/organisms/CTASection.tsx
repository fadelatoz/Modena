import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff20 0%, transparent 50%), 
                            radial-gradient(circle at 75% 75%, #ffffff20 0%, transparent 50%)`
        }} />
      </div>
      
      <Container>
        <div className="opacity-0 animate-[fade-in-up_1s_ease-out] text-center space-y-8 max-w-3xl mx-auto">
          <Text as="h1" variant="h2" className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to make your home smarter?
          </Text>
          
          <Text variant="body-lg" className="text-2xl opacity-90">
            Join 50,000+ homeowners who trust SmartHome for their smart living
          </Text>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button size="lg" variant="primary" className="text-xl shadow-2xl">
              Start Free Trial
            </Button>
            <Button size="lg" variant="ghost" className="text-xl border-white/50 hover:bg-white/10">
              View Pricing
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 opacity-80">
            <div className="text-center">
              <Text variant="h3" className="font-bold text-white mb-1">50K+</Text>
              <Text variant="caption">Happy Users</Text>
            </div>
            <div className="text-center">
              <Text variant="h3" className="font-bold text-white mb-1">99.9%</Text>
              <Text variant="caption">Uptime</Text>
            </div>
            <div className="text-center">
              <Text variant="h3" className="font-bold text-white mb-1">4.9/5</Text>
              <Text variant="caption">Rating</Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;

