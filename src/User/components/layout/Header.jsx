import React from 'react';
import { useLocation } from 'react-router-dom';
import UserProfileButton from '../../../components/UserProfileButton';
import { motion } from 'framer-motion';

const getPageTitle = (pathname) => {
  const path = pathname.split('/').pop();
  return path.charAt(0).toUpperCase() + path.slice(1);
};

function Header() {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-16 border-b border-[#ffffff08] flex items-center justify-between px-4 md:px-6 bg-[#03030a]/95 backdrop-blur-md sticky top-0 z-40"
    >
      <h1 className="text-xl font-semibold text-[#dde2ff]">{title}</h1>
      <div className="flex items-center space-x-4">
        <UserProfileButton />
      </div>
    </motion.header>
  );
}

export default Header;