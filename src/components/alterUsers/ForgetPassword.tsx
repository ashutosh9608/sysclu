import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/forgot-password', { email });
      setMessage(response.data);
      console.log(message);
      navigate("/reset-password" ,{state : {mail : email}});
  } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data);
      } else {
        setMessage('An error occurred');
      }
  }
};
  return (
    <div className="">
      <h2>Enter registered email to reset password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="text-black"
        />
        <button className='cursor-pointer' type="submit">Send Reset link on Email</button>
      </form>
      
    </div>
  );
};

export default ForgotPassword;