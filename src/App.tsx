import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Learning from './pages/Learning';
import WebDevelopment from './pages/services/WebDevelopment';
import GraphicDesign from './pages/services/GraphicDesign';
import DataAnalysis from './pages/services/DataAnalysis';
import SocialMedia from './pages/services/SocialMedia';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HireFreelancer from './pages/HireFreelancer';
import GetHired from './pages/GetHired';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import PageLoader from './components/PageLoader';
import { AnimatePresence } from 'framer-motion';
import DevelopmentNotice from './components/DevelopmentNotice';
import WireframeBackground from './components/WireframeBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-[#03030a] text-white flex flex-col relative">
      <WireframeBackground />
      <DevelopmentNotice />
      <Navbar />
      <main className="flex-grow pt-24 relative z-10">
        <AnimatePresence mode="wait">
          {isPageLoading ? (
            <PageLoader key="pageLoader" />
          ) : (
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />
              
              {/* Main pages */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/learning" element={<Learning />} />
              
              {/* Services pages */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/graphic-design" element={<GraphicDesign />} />
              <Route path="/services/data-analysis" element={<DataAnalysis />} />
              <Route path="/services/social-media" element={<SocialMedia />} />

              {/* Work pages */}
              <Route path="/hire-freelancer" element={<HireFreelancer />} />
              <Route path="/get-hired" element={<GetHired />} />

              {/* Legal pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;