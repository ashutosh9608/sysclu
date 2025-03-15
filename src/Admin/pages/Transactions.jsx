import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FileUpload from '../components/transactions/FileUpload';
import TransactionList from '../components/transactions/TransactionList';
import { Filter, Search, Download, Upload, TrendingUp, DollarSign } from 'lucide-react';

function Transactions() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: 'Monthly Subscription',
      amount: 299.99,
      status: 'completed',
      date: '2024-02-28',
      user: 'John Doe',
      type: 'recurring'
    },
    {
      id: 2,
      name: 'One-time Service',
      amount: 149.99,
      status: 'pending',
      date: '2024-02-27',
      user: 'Jane Smith',
      type: 'one-time'
    }
  ]);

  const stats = [
    { label: 'Total Revenue', value: '$4,589.00', trend: '+12.5%', icon: DollarSign },
    { label: 'Pending', value: '$892.00', trend: '+5.2%', icon: TrendingUp }
  ];

  const handleFileSelect = (file) => {
    const newTransaction = {
      id: transactions.length + 1,
      name: file.name,
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
      amount: 0,
      user: 'System Upload',
      type: 'upload'
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#dde2ff]">Transactions</h1>
          <p className="text-[#94979e] mt-1">Monitor and manage financial transactions</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Export
          </button>
          <button className="flex items-center px-4 py-2 rounded-lg bg-[#9dff13] text-[#03030a] hover:bg-[#8ae610] transition-colors">
            <Upload className="w-5 h-5 mr-2" />
            Upload
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6 hover:border-[#9dff13] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="rounded-lg p-3 bg-[#9dff13]/10 text-[#9dff13]">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-[#94979e]">{stat.label}</p>
                  <p className="text-2xl font-semibold text-[#dde2ff]">{stat.value}</p>
                </div>
              </div>
              <div className="text-green-400 text-sm font-medium">
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94979e]" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff08] text-[#dde2ff] placeholder-[#94979e] focus:border-[#9dff13] transition-colors"
          />
        </div>
        <button className="flex items-center px-4 py-2 rounded-lg bg-[#ffffff08] text-[#dde2ff] hover:bg-[#ffffff12] transition-colors">
          <Filter className="w-5 h-5 mr-2" />
          Filter
        </button>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg">
        <TransactionList 
          transactions={transactions}
          onDownload={(transaction) => console.log('Downloading:', transaction.name)}
        />
      </div>
    </motion.div>
  );
}

export default Transactions;