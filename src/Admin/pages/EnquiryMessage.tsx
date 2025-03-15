import axios from 'axios';
import { useEffect, useState } from 'react';

const EnquiryMessage = () => {
  interface Message {
    name: string;
    email: string;
    contact: string;
    subject: string;
    message: string;
    service: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchMessages = async () => {
       try {
        const response = await axios.get('http://localhost:8080/api/data-op/getuserQueries', 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
        console.log(response);
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error('Unexpected response data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-8 bg-gray-900 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">Enquiry Messages</h2>
      {messages.length > 0 ? (
        <ul className="space-y-4">
          {messages.map((message, index) => (
            <li key={index} className="p-4 bg-gray-800 border border-gray-600 rounded-lg text-white">
              <p><strong>Name:</strong> {message.name}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Phone:</strong> {message.contactNo}</p>
              <p><strong>Subject:</strong> {message.subject}</p>
              <p><strong>Message:</strong> {message.message}</p>
              <p><strong>Service:</strong> {message.service}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white">No messages available.</p>
      )}
    </div>
  );
};

export default EnquiryMessage;
