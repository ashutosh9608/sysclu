import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/dashboard/StatCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import { 
  Users, 
  MessageSquare, 
  DollarSign, 
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Settings,
  Mail
} from 'lucide-react';

function Dashboard() {
  const stats = [
    { 
      name: 'Total Users', 
      value: '1,234', 
      icon: Users, 
      trend: '+12%',
      description: 'Active users this month'
    },
    { 
      name: 'Messages', 
      value: '56', 
      icon: MessageSquare, 
      trend: '+8%',
      description: 'New messages received'
    },
    { 
      name: 'Revenue', 
      value: '$45,678', 
      icon: DollarSign, 
      trend: '+23%',
      description: 'Total revenue this month'
    },
    { 
      name: 'Growth', 
      value: '32%', 
      icon: TrendingUp, 
      trend: '+4%',
      description: 'Growth rate this month'
    }
  ];

  const activities = [
    {
      id: 1,
      description: 'New user registration',
      time: '2 hours ago',
      icon: Users,
      type: 'success'
    },
    {
      id: 2,
      description: 'New message received',
      time: '3 hours ago',
      icon: Mail,
      type: 'info'
    },
    {
      id: 3,
      description: 'System update completed',
      time: '5 hours ago',
      icon: Settings,
      type: 'success'
    },
    {
      id: 4,
      description: 'Payment processed',
      time: '6 hours ago',
      icon: DollarSign,
      type: 'success'
    },
    {
      id: 5,
      description: 'Server warning detected',
      time: '8 hours ago',
      icon: AlertTriangle,
      type: 'warning'
    }
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30, 40, 35, 50, 45, 60],
        color: '#9dff13'
      },
      {
        label: 'Users',
        data: [20, 25, 30, 35, 40, 45],
        color: '#ffffff30'
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#dde2ff]">Dashboard Overview</h1>
          <p className="text-[#94979e] mt-1">Welcome back, Admin</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
            <BarChart3 className="w-5 h-5 mr-2" />
            Reports
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            name={stat.name}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            description={stat.description}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold text-[#dde2ff] mb-4">Performance Overview</h2>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-[#94979e]">Chart Component Here</p>
          </div>
        </motion.div>

        <ActivityFeed activities={activities} />
      </div>

      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-[#dde2ff] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
            <Users className="w-5 h-5 mr-2" />
            Manage Users
          </button>
          <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
            <Settings className="w-5 h-5 mr-2" />
            System Settings
          </button>
          <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
            <Mail className="w-5 h-5 mr-2" />
            View Messages
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;