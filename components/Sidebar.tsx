import React from 'react';
import type { Page } from '../App';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: Page;
  isAuthenticated: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentPage, isAuthenticated }) => {
  const NavLink: React.FC<{ page: Page; label: string; disabled?: boolean }> = ({ page, label, disabled = false }) => {
    const isActive = currentPage === page;
    const activeClasses = 'bg-cyan-500/20 text-white';
    const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';
    const disabledClasses = 'text-gray-500 cursor-not-allowed';

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
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-xl z-30 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Navigation</h2>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            <NavLink page="home" label="Home" />
            <NavLink page="chatbot" label="Dr. Rhesus Chatbot" disabled={!isAuthenticated} />
            <NavLink page="supervisor" label="Supervisor Page" disabled={!isAuthenticated} />
            <NavLink page="about" label="About Us" />
            <NavLink page="contact" label="Contact Us" />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;