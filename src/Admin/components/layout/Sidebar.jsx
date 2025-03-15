import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import {
  LayoutDashboard,
  Users,
  Settings,
  MessageSquare,
  AlertTriangle,
  LogOut,
  Mail,
  DollarSign,
  List
} from 'lucide-react';
import logo from '../../../assets/images/logo.png';

const navItems = [
  { name: 'Dashboard', path: 'dashboard', icon: LayoutDashboard },
  { name: 'Users', path: 'users', icon: Users },
  { name: 'Services', path: 'services', icon: Settings },
  { name: 'Messages', path: 'messages', icon: Mail },
  { name: 'Complaints', path: 'complaints', icon: AlertTriangle },
  { name: 'Transactions', path: 'transactions', icon: DollarSign },
  {name: 'EnquiryMessage', path: 'EnquiryMessage' , icon: List}
];

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const isActivePath = (path) => {
    const currentPath = location.pathname.split('/').pop();
    return currentPath === path || 
           (path === 'dashboard' && (currentPath === 'admin' || currentPath === ''));
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#03070a]/95 backdrop-blur-md border-r border-[#ffffff08] transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
    >
      <div className="h-16 flex items-center justify-center border-b border-[#ffffff08]">
        <Link to="/admin/dashboard" className="flex items-center">
          <img 
            src={logo} 
            alt="Sysclu" 
            className="h-8 w-auto"
          />
        </Link>
      </div>
      
      <nav className="flex-1 mt-5 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md mb-1 transition-colors ${
                isActivePath(item.path)
                  ? 'bg-[#9dff13] text-[#03030a]'
                  : 'text-[#dde2ff] hover:bg-[#ffffff08]'
              }`}
              onClick={onClose}
            >
              <Icon className="mr-4 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#ffffff08]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-2 py-2 text-base font-medium rounded-md text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="mr-4 h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;