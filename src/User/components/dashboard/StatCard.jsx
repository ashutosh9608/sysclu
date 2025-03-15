import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

function StatCard({ name, value, icon: Icon, trend, description }) {
  const isPositive = trend?.startsWith('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg overflow-hidden hover:border-[#9dff13] transition-colors"
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            {Icon && <Icon className="h-8 w-8 text-[#9dff13]" />}
          </div>
          {trend && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              isPositive ? 'bg-green-400/10 text-green-400' : 'bg-red-400/10 text-red-400'
            }`}>
              {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
              {trend}
            </span>
          )}
        </div>
        <div className="mt-4">
          <dt className="text-sm font-medium text-[#94979e] truncate">
            {name}
          </dt>
          <dd className="mt-1 text-2xl font-semibold text-[#dde2ff]">
            {value}
          </dd>
          {description && (
            <p className="mt-1 text-sm text-[#94979e]">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;