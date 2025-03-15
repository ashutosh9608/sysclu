import { AnimatePresence, motion } from 'framer-motion';
import {
  Bell,
  ChevronDown,
  LogOut,
  MessageSquare,
  Settings,
  User
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
 
const UserProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, userRole } = useAuth();
  // const [user, setUser] = useState<UserDataType | null>(null);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  const { userInfo } = useAuth();
  console.log("userInfo",userInfo);
// console.log("UserProfile",user)
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#ffffff08] border border-[#ffffff08] hover:border-[#9dff13] transition-all"
        title="User Profile"
      >
        <div className="w-8 h-8 rounded-full bg-[#9dff13] flex items-center justify-center">
          <User className="w-5 h-5 text-[#03030a]" />
        </div>
        <span className="text-[#dde2ff]">{userInfo?.username}</span>
        <ChevronDown className={`w-4 h-4 text-[#94979e] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-[#03070a] border border-[#ffffff08] shadow-lg overflow-hidden z-[100]"
          >
            <div className="py-1">
              <button
                onClick={() => navigate(`/${userRole}/profile`)}
                className="flex items-center w-full px-4 py-2 text-sm text-[#dde2ff] hover:bg-[#ffffff08]"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </button>
              <button
                onClick={() => navigate(`/${userRole}/settings`)}
                className="flex items-center w-full px-4 py-2 text-sm text-[#dde2ff] hover:bg-[#ffffff08]"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
              <button
                onClick={() => navigate(`/${userRole}/messages`)}
                className="flex items-center w-full px-4 py-2 text-sm text-[#dde2ff] hover:bg-[#ffffff08]"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </button>
              <button
                onClick={() => navigate(`/${userRole}/notifications`)}
                className="flex items-center w-full px-4 py-2 text-sm text-[#dde2ff] hover:bg-[#ffffff08]"
              >
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </button>
              <div className="border-t border-[#ffffff08] my-1"></div>
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfileButton; 






