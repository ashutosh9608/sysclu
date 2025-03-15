import React, { useState } from 'react';
import axios from 'axios';

const EmailUsernameVer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/verify', {
        email,
        username,
      });
      setMessage('Verification email sent successfully.');
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Failed to send verification email.');
      } else {
        setError('Failed to send verification email.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03030a] text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#1a1a1a] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Verify Email and Username</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#444] rounded-lg text-white focus:outline-none focus:border-[#9dff13]"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#444] rounded-lg text-white focus:outline-none focus:border-[#9dff13]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors"
          >
            Send Verification
          </button>
        </form>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default EmailUsernameVer;