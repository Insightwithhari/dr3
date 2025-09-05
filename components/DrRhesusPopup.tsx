import React from 'react';
import { CloseIcon } from './icons';

interface DrRhesusPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrRhesusPopup: React.FC<DrRhesusPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-sm p-8 pt-16 text-center relative transform transition-transform duration-300 scale-95 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            <CloseIcon />
        </button>
        <img 
            src="https://i.pravatar.cc/150?u=dr-rhesus" 
            alt="Dr. Rhesus" 
            className="w-28 h-28 rounded-full border-4 border-cyan-500 absolute -top-14 left-1/2 -translate-x-1/2"
        />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dr. Rhesus</h2>
        <p className="text-cyan-600 dark:text-cyan-400 font-medium">Expert Bioinformatics Research Assistant</p>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            I specialize in protein design and analysis. I can help you find PDB structures, visualize molecules, perform in-silico mutations, and conduct literature searches to accelerate your research.
        </p>
      </div>
    </div>
  );
};

export default DrRhesusPopup;
