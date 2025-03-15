import axios from "axios";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { useEffect, useState } from "react";

function Complaints() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [replies, setReplies] = useState<{ [key: number]: string }>({});
  const userdata = JSON.parse(localStorage.getItem("userData") || "{}");
  const token = localStorage.getItem("token");
  const [complaints, setComplaints] = useState<
    Array<{
      id: number;
      complainantUsername: string;
      status: string;
      category: string;
      description: string;
      dateFiled: string;
      replies?: Array<{ replyText: string; dateReplied: string; adminUsername: string }>;
    }>
  >([]);

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "resolved":
        return {
          bg: "bg-green-400/10",
          text: "text-green-400",
          icon: <CheckCircle2 className="w-4 h-4" />,
        };
      case "pending":
        return {
          bg: "bg-yellow-400/10",
          text: "text-yellow-400",
          icon: <Clock className="w-4 h-4" />,
        };
      default:
        return {
          bg: "bg-red-400/10",
          text: "text-red-400",
          icon: <AlertTriangle className="w-4 h-4" />,
        };
    }
  };

  const storedUserDataString = localStorage.getItem("userData");
  const storedUserData = storedUserDataString
    ? JSON.parse(storedUserDataString)
    : null;

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    console.log(userdata);
    const userId = userdata?.id;
    console.log("userId:-", userId, "token:-", token);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/data-op/getComplaints`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      const complaints = response.data.reverse();
      setComplaints(complaints);
    } catch (err) {
      console.error("Failed to fetch complaints:", err);
    }
  };

  const handleReplyChange = (id: number, value: string) => {
    setReplies({ ...replies, [id]: value });
  };

  const handleReplySubmit = async (id: number) => {
    const adminsId = storedUserData.id;
    const reply = replies[id];
    console.log("adminId:-", adminsId, "reply:-", reply, "complaintId:-", id);
    try {
      const response = await axios.post(
        `http://localhost:8080/api/data-op/setReply`,
        { complaintId: id, adminId: adminsId, replyText: reply },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setMessage("Reply submitted successfully");
      fetchComplaints();
    } catch (err) {
      console.error("Failed to submit reply:", err);
      setError("Failed to submit reply");
    }
  };
  // :root {
  //   --bg-color: #03030a;
  //   --text-color: #dde2ff;
  //   --text-color-alt: #94979e;
  //   --primary-color: #9dff13;
  // }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 p-4"
    >
    {message && <p className="text-green-500">{message}</p>}
    {error && <p className="text-red-500">{error}</p>}
      <div>
        <h1 className="text-2xl font-bold mb-4">Complaints</h1>
        <div className="complaints-container space-y-4">
          {complaints.map((complaint) => {
            const statusStyle = getStatusStyles(complaint.status);
            return (
              
              <div
                key={complaint.id}
                className="complaint-card bg-[ #03030a] shadow-md rounded-lg p-4"
              >
                <form
                  className="complaint-form space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleReplySubmit(complaint.id);
                  }}
                >
                  {/* Complaint Header */}
                  <div className="complaint-header flex justify-between items-center">
                    <h3 className="text-2xl font-extrabold   text-[#dde2ff]">{complaint.complainantUsername}</h3>
                    <span
                      className={`status ${statusStyle.bg} ${statusStyle.text} flex items-center px-2 py-1 rounded`}
                    >
                      {statusStyle.icon}
                      <span className="ml-1">{complaint.status}</span>
                    </span>
                  </div>

                  {/* Complaint Details */}
                  <div className="complaint-body space-y-2 text-[#dde2ff]">
                    <p className="">
                      <strong>Category:</strong> {complaint.category}
                    </p>
                    <p className="">
                      <strong>Complaint:</strong> {complaint.description}
                    </p>
                    <p className="">
                      <strong>Date:</strong> {new Date(complaint.dateFiled).toLocaleString()}
                    </p>

                    {/* Replies Section */}
                    {complaint.replies && complaint.replies.length > 0 && (
                      <div className="replies-section mt-4 p-3 bg-gray-100 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Admin Replies:</h4>
                        <div className="space-y-2">
                          {complaint.replies.map((reply, index) => (
                            <div className="p-2 bg-gray-200 rounded-md">
                            <div className="flex justify-between">
                              <p className="text-gray-900">{reply.replyText}</p>
                              <span className="text-blue-900 text-base">{reply.adminUsername}</span>
                            </div>
                            <span className="text-xs text-gray-600 block mt-1">
                              {new Date(reply.dateReplied).toLocaleString()}
                            </span>
                          </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Reply Input & Submit Button */}
                    
                    <textarea
                      value={replies[complaint.id] || ""}
                      onChange={(e) => handleReplyChange(complaint.id, e.target.value)}
                      className="reply-textarea w-full p-2 border border-gray-300 rounded text-black"
                      placeholder="Write your reply here..."
                    ></textarea>
                    <button
                      type="submit"
                      className="reply-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Submit Reply
                    </button>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Complaints;
