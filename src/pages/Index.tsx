
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteSection from '@/components/QuoteSection';
import HiringSection from '@/components/HiringSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <QuoteSection />
      <HiringSection />
      <Footer />
    </div>
  );
};

export default Index;
