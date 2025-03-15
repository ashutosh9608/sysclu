import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Upload, Download, MoreVertical } from 'lucide-react';

function Transactions() {
  // Mock data - Replace with actual API call
  const transactions = [
    {
      id: 1,
      name: 'Service Payment',
      reference: 'TRX-001',
      amount: 299.99,
      status: 'completed',
      date: '2024-01-15',
    },
    {
      id: 2,
      name: 'Subscription Renewal',
      reference: 'TRX-002',
      amount: 49.99,
      status: 'pending',
      date: '2024-01-14',
    },
    {
      id: 3,
      name: 'Hardware Purchase',
      reference: 'TRX-003',
      amount: 899.99,
      status: 'failed',
      date: '2024-01-13',
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/10 text-green-400';
      case 'pending':
        return 'bg-yellow-400/10 text-yellow-400';
      case 'failed':
        return 'bg-red-400/10 text-red-400';
      default:
        return 'bg-[#ffffff08] text-[#94979e]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-[#9dff13]/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-[#9dff13]" />
            </div>
          </div>
          <h3 className="text-[#94979e] text-sm">Total Spent</h3>
          <p className="text-2xl font-semibold text-[#dde2ff]">$1,249.97</p>
          <p className="text-sm text-green-400 mt-2">+12.5% from last month</p>
        </div>

        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-[#9dff13]/10 flex items-center justify-center">
              <Upload className="h-6 w-6 text-[#9dff13]" />
            </div>
          </div>
          <h3 className="text-[#94979e] text-sm">Pending</h3>
          <p className="text-2xl font-semibold text-[#dde2ff]">$49.99</p>
          <p className="text-sm text-yellow-400 mt-2">1 transaction pending</p>
        </div>

        <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-[#9dff13]/10 flex items-center justify-center">
              <Download className="h-6 w-6 text-[#9dff13]" />
            </div>
          </div>
          <h3 className="text-[#94979e] text-sm">Completed</h3>
          <p className="text-2xl font-semibold text-[#dde2ff]">$299.99</p>
          <p className="text-sm text-green-400 mt-2">Last payment successful</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg overflow-hidden">
        <div className="p-6 border-b border-[#ffffff08]">
          <h2 className="text-xl font-semibold text-[#dde2ff]">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#ffffff08]">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-[#94979e] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ffffff08]">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-[#ffffff05]">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-[#dde2ff] font-medium">{transaction.name}</span>
                      <span className="text-[#94979e] text-sm">{transaction.reference}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#dde2ff]">
                    ${transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#94979e]">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

export default Transactions;