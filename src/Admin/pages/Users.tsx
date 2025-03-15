import axios from "axios";
import { motion } from "framer-motion";
import {
  Edit2,
  Mail,
  MapPin,
  MoreVertical,
  Phone,
  Search,
  Trash2,
  UserPlus,
  Users as UsersIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import PageLoader from "../../components/PageLoader";
interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  role: string;
  status: "active" | "inactive" | "pending";
  joinedDate: string;
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async (): Promise<void> => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      const response = await axios.get(
        "http://localhost:8080/api/data-op/getusers",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        }
      );
      console.log(response);
      const usersList = response.data.reverse();
      setUsers(usersList);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers();
      console.log(users);
    };
    fetchData();
  }, []);

  const getStatusColor = (status: User["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-400/10 text-green-400";
      case "inactive":
        return "bg-red-400/10 text-red-400";
      case "pending":
        return "bg-yellow-400/10 text-yellow-400";
      default:
        return "bg-gray-400/10 text-gray-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94979e]" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#ffffff08] border border-[#ffffff08] rounded-lg text-[#dde2ff] placeholder-[#94979e] focus:outline-none focus:border-[#9dff13]"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors">
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>

      {/* Users List */}
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg overflow-hidden">
        {loading ? (
          <PageLoader />
        ) : error ? (
          <div className="p-4 text-center text-red-400">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#ffffff08]">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#94979e] uppercase tracking-wider">
                    Joined Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-[#94979e] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ffffff08]">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[#ffffff05]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-[#9dff13] flex items-center justify-center">
                          <UsersIcon className="h-5 w-5 text-[#03030a]" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#dde2ff]">
                            {user.username}
                          </div>
                          <div className="text-sm text-[#94979e]">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#dde2ff] space-y-1">
                        <div className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {user.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {user.country}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#dde2ff]">{user.roles}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${getStatusColor(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#94979e]">
                    {user.joinedDate ? new Date(user.joinedDate).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button title="Send Email" className="p-1 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button title="Edit User" className="p-1 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button title="Delete User" className="p-1 rounded-lg text-[#94979e] hover:text-red-400 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button title="More Options" className="p-1 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Users;
