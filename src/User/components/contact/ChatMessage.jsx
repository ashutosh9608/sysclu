import React from 'react';

function ChatMessage({ message, type, timestamp }) {
  return (
    <div className={`flex ${type === 'sent' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-md rounded-lg px-4 py-2 ${
          type === 'sent'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p>{message}</p>
        <span className="text-xs opacity-75">
          {new Date(timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

export default ChatMessage;