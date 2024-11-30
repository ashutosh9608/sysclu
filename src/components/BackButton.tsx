import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate('/services')}
      className="flex items-center gap-2 text-[#dde2ff] hover:text-[#9dff13] transition-colors mb-8"
    >
      <ArrowLeft size={20} />
      <span>Back to Services</span>
    </motion.button>
  );
};

export default BackButton; 