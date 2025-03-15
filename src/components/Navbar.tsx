import { Dialog, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Ensure this path is correct and the file exists
import { useAuth } from "../context/AuthContext";
import UserProfileButton from "./UserProfileButton";

// GetStartedButton component
const GetStartedButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
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

// LoginSignUpModal component
const LoginSignUpModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const emailElement = useRef<HTMLInputElement | null>(null);
  const passwordElement = useRef<HTMLInputElement | null>(null);
  const {login} = useAuth();
  const navigate = useNavigate();

  const dologin = async (email: string, password: string) => {
    await login(email, password);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailElement.current ? emailElement.current.value : "";
    const password = passwordElement.current
      ? passwordElement.current.value
      : "";
    try {
      console.log("Email", email, "password", password);
      await dologin(email, password);
    } catch (error) {
      closeModal();
      console.log("Error during login:", error); // Debugging log
    }
  };
  const handleForgotPassword = () => {
    closeModal();
    navigate("/forgot-password");
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xs md:max-w-sm p-4 overflow-hidden text-left align-middle transition-all transform bg-[#03030a] shadow-xl rounded-2xl border border-[#9dff13]">
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 text-[#94979e] hover:text-white transition-colors duration-200"
                  title="Close"
                >
                  <X size={20} />
                </button>
                <div className="p-4 pb-0">
                  <h2 className="text-xl font-bold text-white mb-2">
                    Welcome back
                  </h2>
                  <p className="text-[#94979e]">
                    Enter your credentials to access your account
                  </p>
                </div>
                <form className="p-4 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#94979e] mb-2"
                    >
                      Enter Email or Username
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94979e]" />
                      <input
                        type="text"
                        id="email"
                        ref={emailElement}
                        className="w-full bg-[#ffffff08] border border-[#9dff13] rounded-lg pl-10 pr-4 py-2 text-white 
                          focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                          transition-all duration-200 placeholder-[#94979e]/50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#94979e] mb-2"
                    >
                      Password
                    </label>
                    <span className="text-red-700">
                      {message ? message : ""}
                    </span>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94979e]" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        ref={passwordElement}
                        className="w-full bg-[#ffffff08] border border-[#9dff13] rounded-lg pl-10 pr-12 py-2 text-white 
                          focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                          transition-all duration-200 placeholder-[#94979e]/50"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94979e] hover:text-white transition-colors duration-200"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 rounded border-[#ffffff15] bg-[#ffffff08] text-[#9dff13] 
                            focus:ring-[#9dff13] focus:ring-offset-0"
                      />
                      <label htmlFor="remember" className="ml-2 text-[#94979e]">
                        Remember me
                      </label>
                    </div>
                    <span
                      onClick={handleForgotPassword}
                      className="text-[#9dff13] hover:text-[#8ae610] transition-colors duration-200"
                    >
                      Forgot password?
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#9dff13] text-[#03030a] py-2 rounded-lg font-semibold mt-4
                      hover:bg-[#8ae610] transition-all duration-200 focus:outline-none focus:ring-2 
                      focus:ring-[#9dff13] focus:ring-offset-2 focus:ring-offset-[#03030a]"
                  >
                    Sign in
                  </button>
                  <div className="text-center text-[#94979e] text-sm mt-4">
                    Don't have an account?
                    <button
                      type="button"
                      onClick={() => {
                        closeModal();
                        navigate("/register");
                      }}
                      className="text-[#9dff13] hover:text-[#8ae610] transition-colors duration-200 font-medium"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Close mobile menu and work menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle clicks outside of work menu
  useEffect(() => {
    const handleClickOutside = () => {};

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#03030a]/95 backdrop-blur-md border-b border-[#ffffff08] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-8 w-auto" />{" "}
              {/* Use the logo image */}
            </NavLink>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link text-base hover:text-[#9dff13] transition-colors py-2 ${
                      isActive ? "text-[#9dff13]" : "text-[#dde2ff]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Get Started Button or User Profile - Desktop */}
            <div className="hidden md:flex items-center">
              {isAuthenticated ? (
                <UserProfileButton />
              ) : (
                <GetStartedButton onClick={handleGetStartedClick} />
              )}
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
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#03030a]/95 backdrop-blur-md border-b border-[#ffffff08]"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 px-2 text-base ${
                        isActive ? "text-[#9dff13]" : "text-[#dde2ff]"
                      } hover:text-[#9dff13] transition-colors`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="py-3 px-2">
                  {isAuthenticated ? (
                    <UserProfileButton />
                  ) : (
                    <GetStartedButton onClick={handleGetStartedClick} />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login/Sign Up Modal */}
      <LoginSignUpModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />

      {/* Add a spacer to push content below the navbar */}
      <div className={`pt-16 ${isModalOpen ? "backdrop-blur-lg" : ""}`}></div>
    </>
  );
};

export default Navbar;
