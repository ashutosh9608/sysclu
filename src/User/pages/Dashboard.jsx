import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/dashboard/StatCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  AlertTriangle,
  MessageSquare,
  Settings,
  Download,
  Upload
} from 'lucide-react';

function Dashboard() {
  const stats = [
    {
      name: 'Total Services',
      value: '12',
      icon: Settings,
      trend: '+2.5%',
      description: 'Active services this month'
    },
   
  ];

  const activities = [
    {
      id: 1,
      description: 'New service request submitted',
      time: '5 minutes ago',
      icon: Settings,
      type: 'success'
    },
    {
      id: 2,
      description: 'Document uploaded successfully',
      time: '1 hour ago',
      icon: Upload,
      type: 'success'
    },
    {
      id: 3,
      description: 'System maintenance scheduled',
      time: '2 hours ago',
      icon: AlertTriangle,
      type: 'warning'
    },
    {
      id: 4,
      description: 'Report downloaded',
      time: '3 hours ago',
      icon: Download,
      type: 'info'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed activities={activities} />
        {/* Add other dashboard components here */}
      </div>
    </motion.div>
  );
}

export default Dashboard;





// {
//   name: 'Messages',
//   value: '24',
//   icon: MessageSquare,
//   trend: '+5.0%',
//   description: 'New messages received'
// },
// {
//   name: 'Documents',
//   value: '34',
//   icon: FileText,
//   trend: '-1.5%',
//   description: 'Files processed this month'
// },
// {
//   name: 'Active Users',
//   value: '2,345',
//   icon: Users,
//   trend: '+3.2%',
//   description: 'Users currently online'
// }