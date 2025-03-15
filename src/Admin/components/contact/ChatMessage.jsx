import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, User } from 'lucide-react';

function ChatMessage({ message, type, timestamp, user, status }) {
  const getStatusIcon = () => {
    switch (status) {
      case 'resolved':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${type === 'sent' ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-md rounded-lg px-4 py-3 ${
          type === 'sent'
            ? 'bg-[#9dff13]/10 border border-[#9dff13]/20'
            : 'bg-[#ffffff08] border border-[#ffffff08]'
        }`}
      >
        <div className="flex items-center space-x-2 mb-1">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-[#ffffff08] flex items-center justify-center">
              <User className="w-4 h-4 text-[#94979e]" />
            </div>
            <span className="text-sm font-medium text-[#dde2ff]">{user}</span>
          </div>
          {getStatusIcon()}
        </div>
        <p className="text-[#dde2ff]">{message}</p>
        <span className="text-xs text-[#94979e] mt-1 block">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
      </div>
    </motion.div>
  );
}

export default ChatMessage;