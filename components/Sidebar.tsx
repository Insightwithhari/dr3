import React from 'react';
import type { Page } from '../App';
import LiveClock from './LiveClock';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: Page;
  isAuthenticated: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, isAuthenticated }) => {
  const NavLink: React.FC<{ page: Page; label: string; disabled?: boolean }> = ({ page, label, disabled = false }) => {
    const isActive = currentPage === page;
    const activeClasses = 'bg-blue-500/20 text-white';
    const inactiveClasses = 'text-slate-300 hover:bg-slate-700 hover:text-white';
    const disabledClasses = 'text-slate-500 cursor-not-allowed';

    return (
      <li>
        <a
          href={!disabled ? `#${page}` : undefined}
          onClick={(e) => {
            if (disabled) e.preventDefault();
            else onClose();
          }}
          className={`w-full text-left px-4 py-3 block transition-colors rounded-r-md ${
            disabled ? disabledClasses : (isActive ? activeClasses : inactiveClasses)
          }`}
          aria-disabled={disabled}
        >
          {label}
        </a>
      </li>
    );
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 shadow-xl z-30 transform transition-transform flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
        </div>
        <nav className="p-2 flex-grow">
          <ul className="space-y-1">
            <NavLink page="home" label="Home" />
            <NavLink page="chatbot" label="Dr. Rhesus Chatbot" disabled={!isAuthenticated} />
            <NavLink page="supervisor" label="Supervisor Page" disabled={!isAuthenticated} />
            <NavLink page="about" label="About Us" />
            <NavLink page="contact" label="Contact Us" />
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
