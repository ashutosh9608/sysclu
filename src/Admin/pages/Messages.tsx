import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Mail, 
  Star, 
  Trash2, 
  Archive, 
  MoreHorizontal,
  ChevronDown,
  Code,
  Palette,
  BarChart3,
  Share2,
  Plus,
  X,
  Reply,
  Send
} from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  service: string;
  date: string;
  status: 'unread' | 'read' | 'archived' | 'starred';
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Web Development Project Inquiry',
      message: 'Hello, I need help with building a custom web application. Could you provide more information about your services and pricing?',
      service: 'Web Development',
      date: '2024-03-10T10:30:00',
      status: 'unread'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Graphic Design Services',
      message: "I am looking for help with brand identity design. Our company needs a complete brand refresh including logo, color palette, and brand guidelines.",
      service: 'Graphic Design',
      date: '2024-03-09T15:45:00',
      status: 'starred'
    }
  ]);

  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'Web Development':
        return <Code className="w-4 h-4" />;
      case 'Graphic Design':
        return <Palette className="w-4 h-4" />;
      case 'Data Analysis':
        return <BarChart3 className="w-4 h-4" />;
      case 'Social Media':
        return <Share2 className="w-4 h-4" />;
      default:
        return <Plus className="w-4 h-4" />;
    }
  };

  const handleStatusChange = (messageId: number, newStatus: Message['status']) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, status: newStatus } : msg
    ));
  };

  const handleBulkAction = (action: string) => {
    if (selectedMessages.length === 0) return;

    setMessages(messages.map(msg => 
      selectedMessages.includes(msg.id) 
        ? { ...msg, status: action as Message['status'] } 
        : msg
    ));
    setSelectedMessages([]);
  };

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setIsDetailModalOpen(true);
    if (message.status === 'unread') {
      handleStatusChange(message.id, 'read');
    }
  };

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyMessage.trim() || !selectedMessage) return;

    console.log('Replying to:', selectedMessage.email);
    console.log('Reply message:', replyMessage);

    setReplyMessage('');
    setIsReplyModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#dde2ff]">Messages</h1>
          <p className="text-[#94979e] mt-1">Manage incoming messages from contact form</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => handleBulkAction('archived')}
            className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors"
          >
            <Archive className="w-5 h-5 mr-2" />
            Archive
          </button>
          <button 
            onClick={() => handleBulkAction('trash')}
            className="flex items-center px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
          >
            <Trash2 className="w-5 h-5 mr-2" />
            Delete
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94979e]" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff08] text-[#dde2ff] placeholder-[#94979e] focus:border-[#9dff13] transition-colors"
          />
        </div>
        <div className="relative">
          <button 
            className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filter
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#ffffff08]">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-[#ffffff15] bg-[#ffffff08] text-[#9dff13] focus:ring-[#9dff13] focus:ring-offset-0"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedMessages(messages.map(m => m.id));
                      } else {
                        setSelectedMessages([]);
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  From
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ffffff08]">
              {messages.map((message) => (
                <tr 
                  key={message.id}
                  onClick={() => handleMessageClick(message)}
                  className={`${
                    message.status === 'unread' 
                      ? 'bg-[#ffffff05]' 
                      : ''
                  } hover:bg-[#ffffff08] transition-colors cursor-pointer`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-[#ffffff15] bg-[#ffffff08] text-[#9dff13] focus:ring-[#9dff13] focus:ring-offset-0"
                      checked={selectedMessages.includes(message.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedMessages([...selectedMessages, message.id]);
                        } else {
                          setSelectedMessages(selectedMessages.filter(id => id !== message.id));
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-[#dde2ff] font-medium">{message.name}</span>
                      <span className="text-[#94979e] text-sm">{message.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[#dde2ff] line-clamp-1">{message.subject}</p>
                    <p className="text-[#94979e] text-sm line-clamp-1">{message.message}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#9dff13]">
                        {getServiceIcon(message.service)}
                      </span>
                      <span className="text-[#dde2ff]">{message.service}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#94979e]">
                    {new Date(message.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => handleStatusChange(message.id, 'starred')}
                        className={`p-1 rounded-lg hover:bg-[#ffffff12] transition-colors ${
                          message.status === 'starred' ? 'text-[#9dff13]' : 'text-[#94979e]'
                        }`}
                      >
                        <Star className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleStatusChange(message.id, 'archived')}
                        className="p-1 rounded-lg text-[#94979e] hover:bg-[#ffffff12] transition-colors"
                      >
                        <Archive className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1 rounded-lg text-[#94979e] hover:bg-[#ffffff12] transition-colors"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Detail Modal */}
      <AnimatePresence>
        {isDetailModalOpen && selectedMessage && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#03070a] border border-[#ffffff08] rounded-lg w-full max-w-2xl mx-4 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#dde2ff]">{selectedMessage.subject}</h2>
                    <p className="text-[#94979e] mt-1">From: {selectedMessage.name} ({selectedMessage.email})</p>
                  </div>
                  <button 
                    onClick={() => setIsDetailModalOpen(false)}
                    className="text-[#94979e] hover:text-[#dde2ff] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-[#9dff13]">
                    {getServiceIcon(selectedMessage.service)}
                  </span>
                  <span className="text-[#dde2ff]">{selectedMessage.service}</span>
                </div>

                <div className="bg-[#ffffff08] rounded-lg p-4 mb-6">
                  <p className="text-[#dde2ff] whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#94979e]">
                    {new Date(selectedMessage.date).toLocaleString()}
                  </span>
                  <button 
                    onClick={() => setIsReplyModalOpen(true)}
                    className="flex items-center px-4 py-2 rounded-lg bg-[#9dff13] text-[#03030a] hover:bg-[#8ae610] transition-colors"
                  >
                    <Reply className="w-5 h-5 mr-2" />
                    Reply
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reply Modal */}
      <AnimatePresence>
        {isReplyModalOpen && selectedMessage && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#03070a] border border-[#ffffff08] rounded-lg w-full max-w-2xl mx-4 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#dde2ff]">Reply to {selectedMessage.name}</h2>
                    <p className="text-[#94979e] mt-1">Re: {selectedMessage.subject}</p>
                  </div>
                  <button 
                    onClick={() => setIsReplyModalOpen(false)}
                    className="text-[#94979e] hover:text-[#dde2ff] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleReply} className="space-y-4">
                  <div>
                    <textarea
                      rows={6}
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      className="w-full rounded-lg bg-[#ffffff08] border border-[#ffffff08] text-[#dde2ff] placeholder-[#94979e] p-4 focus:border-[#9dff13] transition-colors resize-none"
                      placeholder="Type your reply here..."
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsReplyModalOpen(false)}
                      className="px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!replyMessage.trim()}
                      className="flex items-center px-4 py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Reply
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Messages; 