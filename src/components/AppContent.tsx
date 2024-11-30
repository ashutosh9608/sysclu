import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import Services from '../pages/Services';
import WebDevelopment from '../pages/services/WebDevelopment';
import GraphicDesign from '../pages/services/GraphicDesign';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import Learning from '../pages/Learning';
import HireFreelancer from '../pages/HireFreelancer';
import GetHired from '../pages/GetHired';
import PageLoader from './PageLoader';

function AppContent() {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {pageLoading ? (
            <PageLoader key="page-loader" />
          ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/graphic-design" element={<GraphicDesign />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/hire-freelancer" element={<HireFreelancer />} />
              <Route path="/get-hired" element={<GetHired />} />
            </Routes>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default AppContent;