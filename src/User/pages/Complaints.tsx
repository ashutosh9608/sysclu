import axios from 'axios';
import { motion } from 'framer-motion';
import { AlertTriangle, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
// import { useUserData } from '../../context/useUserData';
import Cookies from 'js-cookie';

interface Complaint {
  id: number;
  category: string;
  description: string;
  reply?: string; // Optional reply field
  replies?: { replyText: string; dateReplied: string }[]; // Optional replies field
  dateFiled: string;
}

function Complaints() {
  const catogeryElement = useRef<HTMLSelectElement>(null);
  const descriptionElement = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [complaints, setComplaints] = useState<Complaint[]>([]);

  const userdata = JSON.parse(localStorage.getItem("userData") || '{}');
  const token = localStorage.getItem("token"); // Retrieve token from localStorage

    // Fetch complaints when the component mounts
    useEffect(() => {
      fetchComplaints();
    }, []); 
  
    const fetchComplaints = async () => {
      console.log(userdata);
      const userId = userdata?.id; 
        console.log("userId:-",userId,"token:-",token);
      try {
        const response = await axios.get(`http://localhost:8080/api/users/complaints/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        const complaintsData = response.data.reverse();
        setComplaints(complaintsData);
      } catch (err) {
        console.error('Failed to fetch complaints:', err);
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const catogry = catogeryElement.current?.value;
    const description = descriptionElement.current?.value;
    const userId = userdata?.id; 
    setMessage('');
    setError('');

    try {
    const response = await axios.post(`http://localhost:8080/api/users/savecomplaints/${userId}`, 
      { catogry, description },
      {
        headers: {
          Authorization: `Bearer ${token}` // Include token in the Authorization header
        },
      }
    );
    
    console.log(response);
    console.log("category :-", catogry, "description :-", description );
    setMessage('Complaint submitted successfully.');
    fetchComplaints();
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Failed to submit complaint. Please try again.');
      } else {
        setError('Failed to submit complaint. Please try again.');
      }
    } else {
      setError('Failed to submit complaint. Please try again.');
    }
  }
};



return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-4xl mx-auto space-y-6"
  >
    <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-[#dde2ff] mb-6 flex items-center">
        <AlertTriangle className="w-5 h-5 mr-2 text-[#9dff13]" />
        Submit a Query or Complaint
      </h2>
      {message}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-[#dde2ff] mb-2">
            Category
          </label>
          <select
            id="category"
            ref={catogeryElement}
            className="w-full px-4 py-2 bg-[#ffffff05] border border-[#ffffff08] rounded-lg text-[#dde2ff] focus:outline-none focus:border-[#9dff13]"
          >
            <option value="">Select a category</option>
            <option value="service">Service Related</option>
            <option value="billing">Billing Issue</option>
            <option value="technical">Technical Problem</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[#dde2ff] mb-2">
            Description
          </label>
          <textarea
            id="description"
            ref={descriptionElement}
            rows={4}
            className="w-full px-4 py-2 bg-[#ffffff05] border border-[#ffffff08] rounded-lg text-[#dde2ff] placeholder-[#94979e] focus:outline-none focus:border-[#9dff13]"
            placeholder="Describe your complaint in detail"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#03030a] bg-[#9dff13] hover:bg-[#8ae610] focus:outline-none transition-colors"
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Complaint
          </button>
        </div>
        {error}
      </form>
    </div>

{/* Display Complaints and Replies */}
<div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
      <h2 className="text-xl font-semibold text-[#dde2ff] mb-6 flex items-center">
        <AlertTriangle className="w-5 h-5 mr-2 text-[#9dff13]" />
        Your Complaints
      </h2>
      {complaints.length === 0 ? (
        <p className="text-[#dde2ff]">No complaints submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="bg-[#ffffff05] border border-[#ffffff08] rounded-lg p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#33f8ff]">{complaint.category}</h3>
                <span className="text-sm text-[#94979e]">
                  {new Date(complaint.dateFiled).toLocaleDateString()}
                </span>
              </div>
              <p className="text-[#34ff45] mt-2">{complaint.description}</p>

              {/* Display Replies if available */}
              {complaint.replies && complaint.replies.length > 0 && (
                <div className="mt-4 p-3 bg-[#ffffff08] rounded-lg">
                  <h4 className="text-sm font-semibold text-[#9dff13] mb-2">Admin Replies:</h4>
                  <div className="space-y-2">
                    {complaint.replies.map((reply, index) => (
                      <div key={index} className="p-2 bg-[#ffffff10] rounded-md">
                        <p className="text-[#dde2ff]">{reply.replyText}</p>
                        <span className="text-xs text-[#94979e] block mt-1">
                          {new Date(reply.dateReplied).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
</motion.div>
);
}


export default Complaints;