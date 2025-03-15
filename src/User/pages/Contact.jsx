import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission
    console.log('Message submitted:', message);
    setMessage('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-lg bg-[#9dff13]/10 flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 text-[#9dff13]" />
          </div>
          <h3 className="text-[#dde2ff] font-medium mb-2">Phone</h3>
          <p className="text-[#94979e]">+91 9608816726</p>
          <p className="text-[#94979e]">+91 9142109260</p>
          <p className="text-[#94979e]">+91 8252173458</p>
        </div>

        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-lg bg-[#9dff13]/10 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-[#9dff13]" />
          </div>
          <h3 className="text-[#dde2ff] font-medium mb-2">Email</h3>
          <p className="text-[#94979e]">contact@sysclu.com</p>
          {/* <p className="text-[#94979e]">info@sysclu.com</p> */}
        </div>

        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-lg bg-[#9dff13]/10 flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-[#9dff13]" />
          </div>
          <h3 className="text-[#dde2ff] font-medium mb-2">Address</h3>
          {/* <p className="text-[#94979e]">123 Business Street</p> */}
          <p className="text-[#94979e]">Patna, Boring Road ,  800001</p>
        </div>
      </div>

      {/* Contact Form */}
      {/* <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[#dde2ff] mb-6 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-[#9dff13]" />
          Send us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#dde2ff] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[#ffffff05] border border-[#ffffff08] rounded-lg text-[#dde2ff] placeholder-[#94979e] focus:outline-none focus:border-[#9dff13]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#dde2ff] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[#ffffff05] border border-[#ffffff08] rounded-lg text-[#dde2ff] placeholder-[#94979e] focus:outline-none focus:border-[#9dff13]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#dde2ff] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 bg-[#ffffff05] border border-[#ffffff08] rounded-lg text-[#dde2ff] placeholder-[#94979e] focus:outline-none focus:border-[#9dff13]"
              placeholder="Message subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#dde2ff] mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 bg-[#ffffff05] border border-[#ffffff08] rounded-lg text-[#dde2ff] placeholder-[#94979e] focus:outline-none focus:border-[#9dff13]"
              placeholder="Type your message here..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#03030a] bg-[#9dff13] hover:bg-[#8ae610] focus:outline-none transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div> */}
    </motion.div>
  );
}

export default Contact;