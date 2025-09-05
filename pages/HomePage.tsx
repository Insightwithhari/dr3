import React, { useState } from 'react';
import PasswordModal from '../components/PasswordModal';
import RotatingQuotes from '../components/RotatingQuotes';

interface HomePageProps {
  onAuthenticate: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAuthenticate }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4 md:p-8 text-slate-900 dark:text-white">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 animate-gradient-x">
          Welcome to The Dream Lab
        </h1>
        
        <RotatingQuotes />

        <p className="mt-6 max-w-2xl mx-auto text-slate-700 dark:text-slate-400">
          Our platform integrates cutting-edge AI with powerful bioinformatics tools. 
          Press the button below to begin your research journey with Dr. Rhesus.
        </p>
        
        <div className="mt-10">
            <button 
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-lg"
            >
                Access Research Assistant
            </button>
            <p className="text-xs text-slate-500 mt-3">
                If you want to access this chatbot, please <a href="#contact" className="text-blue-500 hover:underline">contact us</a>.
            </p>
        </div>

      </div>
      
      <PasswordModal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={onAuthenticate}
      />
    </div>
  );
};

export default HomePage;
