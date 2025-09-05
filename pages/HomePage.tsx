import React, { useState } from 'react';
import PasswordModal from '../components/PasswordModal';
import RotatingQuotes from '../components/RotatingQuotes';
import Slideshow from '../components/Slideshow';

interface HomePageProps {
  onAuthenticate: () => void;
}

const QuoteCard: React.FC = () => {
    const quote = "Your imagination is your best friend, when conscious world won't give you subconscious will. So, keep on moving in the journey which might seem endless and without any light, you have the capacity to figure this out";
    const author = "Dr Rimpy Kaur Chowhan";

    return (
        <div className="mt-8 mx-auto max-w-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-3xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
            <blockquote className="text-center">
                <p className="text-base italic text-gray-700 dark:text-gray-200">
                    "{quote}"
                </p>
                <footer className="mt-4 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                    - {author}
                </footer>
            </blockquote>
        </div>
    );
};

const HomePage: React.FC<HomePageProps> = ({ onAuthenticate }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4 md:p-8 text-gray-800 dark:text-white">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-300 dark:to-blue-400 animate-gradient-x">
          Welcome to The Dream Lab
        </h1>
        
        <RotatingQuotes />

        <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          Our platform integrates cutting-edge AI with powerful bioinformatics tools. 
          Press the button below to begin your research journey with Dr. Rhesus.
        </p>
        
        <div className="mt-8">
            <button 
                onClick={() => setModalOpen(true)}
                className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-transform transform hover:scale-105 shadow-lg"
            >
                Access Research Assistant
            </button>
        </div>

        <QuoteCard />
        <Slideshow />
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