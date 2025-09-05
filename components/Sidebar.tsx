import React from 'react';
import type { Page } from '../App';
import LiveClock from './LiveClock';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: Page;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage }) => {
  const NavLink: React.FC<{ page: Page; label: string; glowColor: string }> = ({ page, label, glowColor }) => {
    const isActive = currentPage === page;
    const activeClasses = 'bg-blue-500/20 text-white';
    const inactiveClasses = 'text-slate-300 hover:bg-slate-700 hover:text-white';
    const glowClasses = `hover:shadow-[0_0_15px_${glowColor}]`;


    return (
      <li>
        <a
          href={`#${page}`}
          onClick={onClose}
          className={`w-full text-left px-4 py-3 block rounded-r-md transition-all duration-300 ${glowClasses} ${
            (isActive ? activeClasses : inactiveClasses)
          }`}
        >
          {label}
        </a>
      </li>
    );
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-xl z-30 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
        </div>
        <nav className="p-2 flex-grow">
          <ul className="space-y-1">
            <NavLink page="home" label="Home" glowColor="theme(colors.blue.500/50%)" />
            <NavLink page="chatbot" label="Dr. Rhesus Chatbot" glowColor="theme(colors.indigo.500/50%)" />
            <NavLink page="supervisor" label="Supervisor Page" glowColor="theme(colors.teal.500/50%)" />
            <NavLink page="about" label="About Us" glowColor="theme(colors.purple.500/50%)" />
            <NavLink page="contact" label="Contact Us" glowColor="theme(colors.red.500/50%)" />
            <NavLink page="quotes" label="Quotes" glowColor="theme(colors.amber.500/50%)" />
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-700">
            <LiveClock />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
