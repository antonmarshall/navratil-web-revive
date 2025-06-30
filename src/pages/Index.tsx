
import { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import TreatmentSpectrum from '../components/TreatmentSpectrum';
import Timeline from '../components/Timeline';
import ContactSection from '../components/ContactSection';
import PracticeGallery from '../components/PracticeGallery';
import MethodsSection from '../components/MethodsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <TreatmentSpectrum />
      <MethodsSection />
      <Timeline />
      <PracticeGallery />
      <ContactSection />
    </div>
  );
};

export default Index;
