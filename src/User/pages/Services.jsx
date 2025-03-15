import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/services/ServiceCard';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield,
  Server,
  Cpu,
  Network,
  Lock
} from 'lucide-react';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications and solutions',
      icon: Code,
      status: 'active',
      users: 234
    },
    {
      title: 'Database Management',
      description: 'Secure and efficient data storage',
      icon: Database,
      status: 'active',
      users: 156
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure',
      icon: Cloud,
      status: 'maintenance',
      users: 89
    },
    {
      title: 'Security Solutions',
      description: 'Advanced security protocols',
      icon: Shield,
      status: 'active',
      users: 312
    },
    {
      title: 'Server Management',
      description: 'Dedicated server solutions',
      icon: Server,
      status: 'active',
      users: 178
    },
    {
      title: 'Hardware Solutions',
      description: 'Custom hardware configurations',
      icon: Cpu,
      status: 'inactive',
      users: 45
    },
    {
      title: 'Network Services',
      description: 'Enterprise networking solutions',
      icon: Network,
      status: 'active',
      users: 267
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat protection',
      icon: Lock,
      status: 'active',
      users: 423
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            status={service.status}
            users={service.users}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Services;