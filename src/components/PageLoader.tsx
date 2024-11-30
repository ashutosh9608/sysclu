import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const quotes = [
  "Innovating for tomorrow",
  "Creating digital excellence",
  "Transforming ideas into reality",
  "Building the future",
  "Designing success",
];

const PageLoader = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03030a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-[#9dff13] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-[#dde2ff]"
      >
        {quote}
      </motion.p>
    </motion.div>
  );
};

export default PageLoader;