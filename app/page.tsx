import Navbar from '@/components/molecules/Navbar';
import Hero from '@/components/organisms/Hero';
import FeaturesGrid from '@/components/organisms/FeatureGrid';
import AppShowcase from '@/components/organisms/AppShowcase';
import SmartHomePreview from '@/components/organisms/SmartHomePreview';
import FAQSection from '@/components/organisms/FAQSection';
import CTASection from '@/components/organisms/CTASection';
import Footer from '@/components/organisms/Footer';
import ProductCategorySection from '@/components/organisms/ProductCategorySection';
import SmartSceneSection from '@/components/organisms/SmartSceneSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <AppShowcase />
      <SmartHomePreview />
      <ProductCategorySection/>
      <SmartSceneSection/>
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}

