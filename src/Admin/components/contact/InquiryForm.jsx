import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Smile } from 'lucide-react';

function InquiryForm({ onSubmit }) {
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inquiry.trim()) {
      onSubmit(inquiry);
      setInquiry('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold text-[#dde2ff] mb-4">
        New Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="relative">
            <textarea
              rows={4}
              className="w-full rounded-lg bg-[#ffffff08] border border-[#ffffff08] text-[#dde2ff] placeholder-[#94979e] p-4 focus:border-[#9dff13] transition-colors resize-none"
              placeholder="Type your message here..."
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              type="button"
              className="p-2 rounded-lg bg-[#ffffff08] text-[#94979e] hover:text-[#dde2ff] transition-colors"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 rounded-lg bg-[#ffffff08] text-[#94979e] hover:text-[#dde2ff] transition-colors"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!inquiry.trim()}
            className="flex items-center px-4 py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default InquiryForm;