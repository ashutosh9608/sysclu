import React from 'react';
import { Download, MoreVertical } from 'lucide-react';

function TransactionList({ transactions, onDownload }) {
  const getStatusBadge = (status) => {
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
            <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#ffffff08]">
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-[#ffffff05] transition-colors">
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
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusBadge(transaction.status)}`}>
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 text-[#94979e]">
                {transaction.date}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onDownload(transaction)}
                    className="p-1 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors"
                  >
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
  );
}

export default TransactionList;