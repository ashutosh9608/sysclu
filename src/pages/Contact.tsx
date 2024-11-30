import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const ContactForm = () => {
  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'social-media', label: 'Social Media Management' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#94979e] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                transition-all duration-200 placeholder-[#94979e]/50"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#94979e] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                transition-all duration-200 placeholder-[#94979e]/50"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[#94979e] mb-2">
            Service
          </label>
          <div className="relative select-container">
            <select
              id="service"
              className="w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
                focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
                transition-all duration-200 appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((option) => (
                <option 
                  key={option.value} 
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#94979e] mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
              focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
              transition-all duration-200 placeholder-[#94979e]/50"
            placeholder="Brief subject of your message"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#94979e] mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-3 text-white 
              focus:outline-none focus:border-[#9dff13] focus:ring-1 focus:ring-[#9dff13] 
              transition-all duration-200 placeholder-[#94979e]/50 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#9dff13] text-[#03030a] py-3 rounded-lg font-semibold 
            hover:bg-[#8ae610] transition-all duration-200 flex items-center justify-center gap-2
            focus:outline-none focus:ring-2 focus:ring-[#9dff13] focus:ring-offset-2 
            focus:ring-offset-[#03030a]"
        >
          <Send size={20} />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@sysclu.com',
      link: 'mailto:contact@sysclu.com',
      color: 'from-[#9dff13]/20 to-[#8ae610]/5',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8252173458',
      link: 'tel:+918252173458',
      color: 'from-[#9dff13]/20 to-[#8ae610]/5',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Buxar, Bihar, 802101',
      link: 'https://maps.google.com/?q=Buxar,Bihar',
      color: 'from-[#9dff13]/20 to-[#8ae610]/5',
    },
    {
      icon: MessageSquare,
      title: 'Social Media',
      details: 'Follow us @sysclu',
      link: 'https://www.instagram.com/sysclu',
      color: 'from-[#9dff13]/20 to-[#8ae610]/5',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
      <div className="grid gap-6">
        {contactDetails.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target={item.icon === MapPin || item.icon === MessageSquare ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex items-center gap-6 p-6 rounded-xl bg-gradient-to-br from-[#ffffff08] to-transparent border border-[#ffffff08] hover:border-[#9dff13]/20 transition-all duration-300"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Icon Container */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="p-4 bg-[#9dff13]/10 rounded-xl group-hover:bg-[#9dff13]/20 transition-colors duration-300"
              >
                <item.icon className="w-6 h-6 text-[#9dff13]" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-grow">
              <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-[#9dff13] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#94979e] group-hover:text-white transition-colors duration-300">
                {item.details}
              </p>
            </div>

            {/* Arrow Icon */}
            <motion.div
              className="relative z-10 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 text-[#9dff13]" />
            </motion.div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;