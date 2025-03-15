import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const Notifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[#dde2ff] mb-6 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-[#9dff13]" />
          Notifications
        </h2>
        
        {/* Add notifications list here */}
        <p className="text-[#94979e]">No notifications to display.</p>
      </div>
    </motion.div>
  );
};

export default Notifications; 