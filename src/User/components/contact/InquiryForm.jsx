import React, { useState } from 'react';

function InquiryForm({ onSubmit }) {
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inquiry);
    setInquiry('');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Submit New Inquiry
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="inquiry"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="inquiry"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
}

export default InquiryForm;