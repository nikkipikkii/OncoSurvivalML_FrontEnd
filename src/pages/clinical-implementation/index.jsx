import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from './components/HeroSection';
import GeneIntelligence from './components/GeneIntelligence';
import ImplementationWizard from './components/ImplementationWizard';
import ROICalculator from './components/ROICalculator';
import APIDocumentation from './components/APIDocumentation';
import PartnerShowcase from './components/PartnerShowcase';
import ResourceCenter from './components/ResourceCenter';
import ComplianceCertifications from './components/ComplianceCertifications';
import CTASection from './components/CTASection';

const ClinicalImplementation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/* <ImplementationWizard /> */}
        <GeneIntelligence />
        {/* <ROICalculator /> */}
        {/* <APIDocumentation />
        <PartnerShowcase />
        <ResourceCenter />
        <ComplianceCertifications />
        <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default ClinicalImplementation;