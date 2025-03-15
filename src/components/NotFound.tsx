import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[60vh] flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-4xl font-bold text-[#dde2ff] mb-4">404</h1>
      <p className="text-[#94979e] text-lg mb-8">Page not found</p>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Go Back
      </button>
    </motion.div>
  );
};

export default NotFound; 