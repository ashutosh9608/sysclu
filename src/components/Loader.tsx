import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const quotes = [
  "Transforming ideas into digital reality",
  "Innovation meets excellence",
  "Building the future of technology",
  "Creating seamless digital experiences",
  "Empowering businesses through technology",
  "Where creativity meets functionality",
];

const Loader = () => {
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
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 border-4 border-[#9dff13] rounded-full mb-8"
        animate={{
          rotate: 360,
          borderRadius: ["50%", "30%", "50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-[#dde2ff] text-xl font-medium text-center max-w-md px-4"
      >
        {quote}
      </motion.p>
    </motion.div>
  );
};

export default Loader;