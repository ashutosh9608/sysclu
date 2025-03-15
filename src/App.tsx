import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Admin from './Admin/Admin';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import PageLoader from './components/PageLoader';
import ProtectedRoute from './components/ProtectedRoute';
// import WireframeBackground from './components/WireframeBackground';
import ForgotPassword from './components/alterUsers/ForgetPassword';
import Registration from './components/alterUsers/Registration';
import ResetPassword from './components/alterUsers/ResetPassword';
import ErrorPage from './components/ErrorPage';
import { AuthProvider } from './context/AuthContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import User from './User/User';

const App: React.FC = () => {
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
    <AuthProvider>
      <div className="min-h-screen bg-[#03030a] text-white flex flex-col relative">
        {/* <WireframeBackground /> */}
        {!location.pathname.includes('/admin') && 
         !location.pathname.includes('/user') && <Navbar />}
        <main className="flex-grow relative z-10">
          <AnimatePresence mode="wait">
            {isPageLoading ? (
              <PageLoader key="pageLoader" />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />   
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/register" element={<Registration />} />
                
                <Route path="/user/*" element={
                  <ProtectedRoute allowedRole="user">
                    <User />
                  </ProtectedRoute>
                } />
                
                <Route path="/admin/*" element={
                  <ProtectedRoute allowedRole="admin">
                    <Admin />
                  </ProtectedRoute>
                } />
                
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            )}
          </AnimatePresence>
        </main>
        {!location.pathname.includes('/admin') && 
         !location.pathname.includes('/user') && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default App;