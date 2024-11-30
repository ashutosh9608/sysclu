import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const DevelopmentNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
          className="fixed bottom-4 right-4 z-50 w-96 bg-[#03030a] border border-[#ffffff08] rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#9dff13]/10 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-[#9dff13]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Development Notice</h3>
                  <p className="mt-1 text-sm text-[#94979e]">
                    This website is currently under development. Some features might not work as expected.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-[#94979e] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVisible(false)}
                className="flex-1 px-4 py-2 bg-[#9dff13] text-[#03030a] rounded-lg font-medium hover:bg-[#8ae610] transition-colors"
              >
                Got it
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 10, ease: "linear" }}
            onAnimationComplete={() => setIsVisible(false)}
            className="h-1 bg-[#9dff13]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DevelopmentNotice; 