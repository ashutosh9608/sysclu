import React from 'react';
import { motion } from 'framer-motion';

function ActivityFeed({ activities = [] }) {
  const getTypeStyles = (type) => {
    switch (type) {
      case 'success':
        return 'text-green-400 bg-green-400/10';
      case 'warning':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'error':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-[#9dff13] bg-[#9dff13]/10';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold text-[#dde2ff] mb-4">
        Recent Activity
      </h2>
      
      {activities.length > 0 ? (
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.id}
                className="flex items-center space-x-3 p-3 rounded-lg bg-[#ffffff05] border border-[#ffffff08]"
              >
                {Icon && (
                  <div className={`flex-shrink-0 rounded-full p-2 ${getTypeStyles(activity.type)}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#dde2ff]">
                    {activity.description}
                  </p>
                  <p className="text-xs text-[#94979e]">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-[#94979e]">No recent activity to display.</p>
      )}
    </motion.div>
  );
}

export default ActivityFeed;