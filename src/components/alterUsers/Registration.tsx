import axios from 'axios';
import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [country, setCountry] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState('');
  const [passMessage, setPassMessage] = useState('');
  const [error, setError] = useState('');

  const handleVerify = async () => {
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register-verify', {
        email,
        username,
      });
      console.log(response);
      setMessage('Verification successful. Please check your email for the OTP.');
      setIsVerified(true);
    } catch (err: unknown) {
      // Log the error message from the backend
      const errorMessage = axios.isAxiosError(err) && err.response?.data.message ? err.response.data.message : 'Verification failed. Please try again.';
      console.error(errorMessage); // Log the error message in the console
      if (errorMessage != null) {
        setMessage(errorMessage);
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!isVerified) {
      setError('Please verify your email and username first.');
      return;
    }

    if (password1 !== password2) {
      setPassMessage('Passwords do not match.');
      return;
    } else setPassword(password1);

    // Password rules
    const passwordRules = [
      { regex: /.{8,}/, message: "Password must be at least 8 characters long" },
      { regex: /[A-Z]/, message: "Password must contain at least one uppercase letter" },
      { regex: /[a-z]/, message: "Password must contain at least one lowercase letter" },
      { regex: /[0-9]/, message: "Password must contain at least one number" },
      { regex: /[!@#$%^&*]/, message: "Password must contain at least one special character" },
    ];

    for (const rule of passwordRules) {
      if (!rule.regex.test(password)) {
        setPassMessage(rule.message);
        return;
      }
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        email,
        username,
        password,
        country,
        otp,
      });
      setMessage('Registration successful.');
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03030a] text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#1a1a1a] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
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
            {message? message: ""}
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
            type="button"
            onClick={handleVerify}
            className="w-full py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors"
          >
            Verify
          </button>
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              title="Enter OTP"
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#444] rounded-lg text-white focus:outline-none focus:border-[#9dff13]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password1"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#3673f7] border border-[#444] rounded-lg text-white focus:outline-none focus:border-[#9dff13]"
            />
            {passMessage ? passMessage : ""}
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
             <input
              type="password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              placeholder="Confirm Password"
              className="w-full px-3 py-2 bg-[#3673f7] border border-[#444] rounded-lg text-white focus:outline-none focus:border-[#9dff13]"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-300">
              Country
            </label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              placeholder="Enter your country"
              className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#444] rounded-lg text-white focus:outline-none focus:border-[#9dff13]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors"
          >
            Register
          </button>
        </form>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Registration;