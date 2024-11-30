import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      {/* Animated Hexagon */}
      <motion.path
        d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z"
        fill="#03030a"
        stroke="#9dff13"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Inner Circuit Lines */}
      <motion.path
        d="M20 10L28.6603 15V25L20 30L11.3397 25V15L20 10Z"
        stroke="#9dff13"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      {/* Connection Points */}
      <motion.circle cx="20" cy="10" r="2" fill="#9dff13" 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />
      <motion.circle cx="28.6603" cy="15" r="2" fill="#9dff13"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />
      <motion.circle cx="28.6603" cy="25" r="2" fill="#9dff13"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
      <motion.circle cx="20" cy="30" r="2" fill="#9dff13"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.3, duration: 0.3 }}
      />
      <motion.circle cx="11.3397" cy="25" r="2" fill="#9dff13"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, duration: 0.3 }}
      />
      <motion.circle cx="11.3397" cy="15" r="2" fill="#9dff13"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      />

      {/* Text */}
      <motion.text
        x="45"
        y="25"
        fill="#ffffff"
        fontSize="24"
        fontWeight="bold"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        SysClu
      </motion.text>
    </motion.svg>
  );
};

export default Logo; 