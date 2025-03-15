import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatMessage from '../components/contact/ChatMessage';
import InquiryForm from '../components/contact/InquiryForm';
import { Search, Filter, ArrowDown } from 'lucide-react';

function Contact() {
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: 'sent',
      message: 'Hello, I need help with my project.',
      timestamp: '2024-02-10T10:30:00',
      user: 'John Doe',
      status: 'resolved'
    },
    {
      id: 2,
      type: 'received',
      message: 'Hi! I\'d be happy to help. Could you provide more details?',
      timestamp: '2024-02-10T10:32:00',
      user: 'Support Team',
      status: 'active'
    },
  ]);

  const handleSubmit = (message) => {
    const newMessage = {
      id: chatHistory.length + 1,
      type: 'sent',
      message,
      timestamp: new Date().toISOString(),
      user: 'Support Team',
      status: 'active'
    };
    setChatHistory([...chatHistory, newMessage]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#dde2ff]">Contact Management</h1>
          <p className="text-[#94979e] mt-1">Handle customer inquiries and messages</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
            <Filter className="w-5 h-5 mr-2" />
            Filter
            <ArrowDown className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chat History */}
        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#dde2ff]">Chat History</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94979e]" />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-9 pr-4 py-1.5 text-sm rounded-lg bg-[#ffffff08] border border-[#ffffff08] text-[#dde2ff] placeholder-[#94979e] focus:border-[#9dff13] transition-colors"
              />
            </div>
          </div>
          <div className="space-y-4">
            {chatHistory.map((message) => (
              <ChatMessage key={message.id} {...message} />
            ))}
          </div>
        </div>

        {/* New Message Form */}
        <InquiryForm onSubmit={handleSubmit} />
      </div>
    </motion.div>
  );
}

export default Contact;