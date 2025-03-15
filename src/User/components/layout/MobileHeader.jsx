import React from 'react';
import { Menu } from 'lucide-react';
import logo from '../../../assets/images/logo.png';

function MobileHeader({ onMenuClick }) {
  return (
    <header className="h-16 flex items-center justify-between px-4 bg-[#03070a]/95 border-b border-[#ffffff08] backdrop-blur-md lg:hidden">
      <img 
        src={logo} 
        alt="Sysclu" 
        className="h-8 w-auto"
      />
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg text-[#94979e] hover:text-[#dde2ff] transition-colors"
      >
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
}

export default MobileHeader;