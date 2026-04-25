import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import Accordion, { AccordionItem } from '@/components/molecules/Accordion';

const faqItems: AccordionItem[] = [
  {
    question: 'Is installation difficult?',
    answer: 'Not at all! Our certified technicians handle everything, or choose DIY with our step-by-step guides. Most setups take under 2 hours.',
  },
  {
    question: 'Does it work with my existing devices?',
    answer: 'Yes! Compatible with 95% of smart devices from Philips Hue, Nest, Ring, Ecobee, and more. One app for all.',
  },
  {
    question: 'What about privacy and security?',
    answer: "Bank-grade encryption with end-to-end data protection. Local processing keeps your data at home, never in the cloud.",
  },
  {
    question: 'Can I try it before buying?',
    answer: 'Absolutely! 30-day free trial with full access. Cancel anytime, no questions asked.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-32 bg-accent/50">
      <Container>

          <Text variant="h2" className="mb-6">
            Frequently Asked Questions
          </Text>
          <Text variant="body-lg" className="max-w-2xl mx-auto text-foreground/80">
            Everything you need to know before getting started
          </Text>

        <Accordion items={faqItems} />
      </Container>
    </section>
  );
};

export default FAQSection;

