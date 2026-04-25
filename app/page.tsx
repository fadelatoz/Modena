import Navbar from '@/components/molecules/Navbar';
import Hero from '@/components/organisms/Hero';
import FeaturesGrid from '@/components/organisms/FeatureGrid';
import AppShowcase from '@/components/organisms/AppShowcase';
import SmartHomePreview from '@/components/organisms/SmartHomePreview';
import ServicesSection from '@/components/organisms/ServicesSection';
import FAQSection from '@/components/organisms/FAQSection';
import CTASection from '@/components/organisms/CTASection';
import Footer from '@/components/organisms/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <AppShowcase />
      <SmartHomePreview />
      <ServicesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

