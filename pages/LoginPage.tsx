import React, { useState } from 'react';
import PasswordModal from '../components/PasswordModal';
import { Theme } from '../App';
import ProteinBackground from '../components/ProteinBackground';

interface LoginPageProps {
  onAuthenticate: () => void;
  theme: Theme;
}

const LoginPage: React.FC<LoginPageProps> = ({ onAuthenticate, theme }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <ProteinBackground theme={theme} isVisible={true} />
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 animate-gradient-x">
          The Dream Lab
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Welcome to our computational bioinformatics research platform.
        </p>

        <button 
          onClick={() => setModalOpen(true)}
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all transform hover:scale-105"
        >
          Access Platform
        </button>
      </div>

      <PasswordModal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={onAuthenticate}
      />
    </div>
  );
};

export default LoginPage;
