import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import { 
  Code2, 
  Palette, 
  BarChart3, 
  Share2, 
  Plus,
  Search 
} from 'lucide-react';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications and responsive websites',
      icon: Code2,
      status: 'active',
      users: 234
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions',
      icon: Palette,
      status: 'active',
      users: 156
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization',
      icon: BarChart3,
      status: 'maintenance',
      users: 89
    },
    {
      title: 'Digital Marketing',
      description: 'Social media and content strategy',
      icon: Share2,
      status: 'active',
      users: 178
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#dde2ff]">Services</h1>
          <p className="text-[#94979e] mt-1">Manage and monitor your services</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94979e]" />
            <input
              type="text"
              placeholder="Search services..."
              className="pl-10 pr-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff08] text-[#dde2ff] placeholder-[#94979e] focus:border-[#9dff13] transition-colors"
            />
          </div>
          <button className="flex items-center px-4 py-2 rounded-lg bg-[#9dff13] text-[#03030a] hover:bg-[#8ae610] transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Add Service
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </motion.div>
  );
}

export default Services;