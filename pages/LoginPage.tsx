import React, { useState } from 'react';
import PasswordModal from '../components/PasswordModal';

interface LoginPageProps {
  onAuthenticate: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onAuthenticate }) => {
  const [isModalOpen, setModalOpen] = useState(true); // Modal is always open on this page

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 animate-gradient-x">
          The Dream Lab
        </h1>
        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
          Bioinformatics Research Assistant
        </p>
      </div>

      <PasswordModal 
        isOpen={isModalOpen}
        onClose={() => {}} // Can't close the modal from login page
        onSuccess={onAuthenticate}
      />
    </div>
  );
};

export default LoginPage;
