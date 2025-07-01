import { Suspense, lazy } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import ServicesSection from '../components/ServicesSection';
import TreatmentSpectrum from '../components/TreatmentSpectrum';
import Timeline from '../components/Timeline';
import ContactSection from '../components/ContactSection';
import PracticeGallery from '../components/PracticeGallery';
import MethodsSection from '../components/MethodsSection';
import MapSection from '../components/MapSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import TreatmentConceptSection from "../components/TreatmentConceptSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add top padding for fixed navigation */}
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <TreatmentConceptSection />
        <TreatmentSpectrum />
        <MethodsSection />
        <Timeline />
        <div id="galerie">
          <PracticeGallery />
        </div>
        <MapSection />
        <div id="faq">
          <FAQSection />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
