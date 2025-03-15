import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, Eye, Globe, Palette } from 'lucide-react';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[#dde2ff] mb-6">Settings</h2>
        
        <div className="space-y-6">
          {/* Account Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#dde2ff] flex items-center">
              <Lock className="w-5 h-5 mr-2 text-[#9dff13]" />
              Account Security
            </h3>
            <div className="ml-7 space-y-4">
              <button className="text-[#9dff13] hover:text-[#8ae610] transition-colors">
                Change Password
              </button>
              <button className="text-[#9dff13] hover:text-[#8ae610] transition-colors ml-4">
                Enable Two-Factor Auth
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#dde2ff] flex items-center">
              <Bell className="w-5 h-5 mr-2 text-[#9dff13]" />
              Notifications
            </h3>
            <div className="ml-7 space-y-4">
              {/* Add notification toggles here */}
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#dde2ff] flex items-center">
              <Eye className="w-5 h-5 mr-2 text-[#9dff13]" />
              Privacy
            </h3>
            <div className="ml-7 space-y-4">
              {/* Add privacy settings here */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings; 