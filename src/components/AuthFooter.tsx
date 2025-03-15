import React from 'react';
import { motion } from 'framer-motion';

const AuthFooter = () => {
  return (
    <footer className="bg-[#03070a]/95 backdrop-blur-md border-t border-[#ffffff08] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-[#94979e] text-sm">
            © {new Date().getFullYear()} Sysclu. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#94979e] hover:text-[#9dff13] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#94979e] hover:text-[#9dff13] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AuthFooter; 