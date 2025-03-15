import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Users } from 'lucide-react';

function ServiceCard({ title, description, icon: Icon, status, users }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-400/10 text-green-400';
      case 'maintenance':
        return 'bg-yellow-400/10 text-yellow-400';
      case 'inactive':
        return 'bg-red-400/10 text-red-400';
      default:
        return 'bg-[#9dff13]/10 text-[#9dff13]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg overflow-hidden hover:border-[#9dff13] transition-colors"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className={`rounded-lg p-3 ${getStatusStyles(status)}`}>
            {Icon && <Icon className="h-6 w-6" />}
          </div>
          <button className="text-[#94979e] hover:text-[#dde2ff] transition-colors">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#dde2ff]">{title}</h3>
          <p className="mt-1 text-sm text-[#94979e]">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-[#94979e]">
            <Users className="h-4 w-4 mr-1" />
            {users} users
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusStyles(status)}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="border-t border-[#ffffff08] p-4">
        <button className="w-full text-center text-sm text-[#9dff13] hover:text-[#8ae610] transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;