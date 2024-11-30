import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';

const GetStartedButton = () => {
  const navigate = useNavigate();
  
  return (
    <motion.button
      onClick={() => navigate('/contact')}
      className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-transparent rounded-lg group w-full md:w-auto"
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#9dff13] group-hover:translate-x-0 ease">
        <ArrowRight className="text-[#03030a] w-5 h-5" />
      </span>
      
      <span className="absolute flex items-center justify-center w-full h-full text-[#9dff13] transition-all duration-300 transform group-hover:translate-x-full ease">
        Get Started
      </span>
      
      <span className="relative invisible">Get Started</span>
    </motion.button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWorkMenu, setShowWorkMenu] = useState(false);
  const workMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu and work menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setShowWorkMenu(false);
  }, [location.pathname]);

  // Handle clicks outside of work menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workMenuRef.current && !workMenuRef.current.contains(event.target as Node)) {
        setShowWorkMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/learning', label: 'Learning' },
    {
      label: 'Work',
      submenu: [
        { path: '/hire-freelancer', label: 'Hire Freelancer' },
        { path: '/get-hired', label: 'Get Hired' },
      ],
    },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#03030a]/95 backdrop-blur-md border-b border-[#ffffff08] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex-shrink-0">
            <Logo />
          </NavLink>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => (
              item.submenu ? (
                <div key={index} className="relative" ref={workMenuRef}>
                  <button
                    onClick={() => setShowWorkMenu(!showWorkMenu)}
                    className="flex items-center gap-1 text-base text-[#dde2ff] hover:text-[#9dff13] transition-colors py-2"
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: showWorkMenu ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {showWorkMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-[#03030a]/95 backdrop-blur-md border border-[#ffffff08] shadow-xl py-2"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setShowWorkMenu(false)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-[#dde2ff] hover:bg-[#ffffff08] hover:text-[#9dff13] transition-colors ${
                                isActive ? 'text-[#9dff13] bg-[#ffffff08]' : ''
                              }`
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link text-base hover:text-[#9dff13] transition-colors py-2 ${
                      isActive ? 'text-[#9dff13]' : 'text-[#dde2ff]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </div>

          {/* Get Started Button - Desktop */}
          <div className="hidden md:flex items-center">
            <GetStartedButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#dde2ff] hover:text-[#9dff13] transition-colors mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#03030a]/95 backdrop-blur-md border-b border-[#ffffff08]"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                item.submenu ? (
                  <div key={index} className="py-2">
                    <button
                      onClick={() => setShowWorkMenu(!showWorkMenu)}
                      className="w-full flex items-center justify-between text-[#dde2ff] hover:text-[#9dff13] transition-colors py-3 px-2"
                    >
                      <span>{item.label}</span>
                      <motion.div
                        animate={{ rotate: showWorkMenu ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {showWorkMenu && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <NavLink
                              key={subIndex}
                              to={subItem.path}
                              className={({ isActive }) =>
                                `block py-2 px-2 text-base ${
                                  isActive ? 'text-[#9dff13]' : 'text-[#dde2ff]'
                                } hover:text-[#9dff13] transition-colors`
                              }
                              onClick={() => {
                                setShowWorkMenu(false);
                                setIsOpen(false);
                              }}
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 px-2 text-base ${
                        isActive ? 'text-[#9dff13]' : 'text-[#dde2ff]'
                      } hover:text-[#9dff13] transition-colors`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              <div className="py-3 px-2">
                <GetStartedButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;