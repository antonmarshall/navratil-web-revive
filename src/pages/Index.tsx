
import { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import TreatmentSpectrum from '../components/TreatmentSpectrum';
import Timeline from '../components/Timeline';
import ContactSection from '../components/ContactSection';
import PracticeGallery from '../components/PracticeGallery';
import MethodsSection from '../components/MethodsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <TreatmentSpectrum />
      <MethodsSection />
      <Timeline />
      <PracticeGallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
