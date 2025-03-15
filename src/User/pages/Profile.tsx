
import { motion } from 'framer-motion';
import { Calendar, Mail, MapPin, Phone, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useUserData } from '../../context/useUserData';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {userInfo} = useAuth();
    console.log(userInfo);
    
  useEffect(() => {
    if (userInfo) {
      setIsLoading(false);
    }
  }, [userInfo]);

  if (isLoading) {
    return null; // or a loading spinner
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-[#ffffff08] border border-[#ffffff08] rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-[#9dff13] flex items-center justify-center">
            <User className="w-10 h-10 text-[#03030a]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#dde2ff]">{userInfo?.username}</h1>
            <p className="text-[#94979e]">Premium Member</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#9dff13]" />
              <span className="text-[#dde2ff]">{userInfo?.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#9dff13]" />
              <span className="text-[#dde2ff]">{userInfo?.contact}</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#9dff13]" />
              <span className="text-[#dde2ff]">{userInfo?.country}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-[#9dff13]" />
              <span className="text-[#dde2ff]">{userInfo?.joinedDate?.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile; 