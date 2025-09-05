import React, { useState } from 'react';
import PasswordModal from '../components/PasswordModal';
import RotatingQuotes from '../components/RotatingQuotes';

interface HomePageProps {
  onAuthenticate: () => void;
}

const QuoteCard: React.FC = () => {
    const quote = "Your imagination is your best friend, when conscious world won't give you subconscious will. So, keep on moving in the journey which might seem endless and without any light, you have the capacity to figure this out";
    const author = "Dr Rimpy Kaur Chowhan";

    return (
        <div className="mt-8 mx-auto max-w-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-3xl border border-blue-500/20 shadow-lg shadow-blue-500/10">
            <blockquote className="text-center">
                <p className="text-base italic text-slate-700 dark:text-slate-200">
                    "{quote}"
                </p>
                <footer className="mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    - {author}
                </footer>
            </blockquote>
        </div>
    );
};

const StaticImage: React.FC = () => (
    <div className="mt-12 mx-auto max-w-2xl relative w-full h-64 rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
        <img src="https://images.unsplash.com/photo-1532187643623-dbf267347e3c?q=80&w=1740&auto=format&fit=crop" alt="Molecular Research" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white font-bold text-lg">Advancing Bioinformatics with AI</h3>
        </div>
    </div>
);


const HomePage: React.FC<HomePageProps> = ({ onAuthenticate }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4 md:p-8 text-slate-800 dark:text-white">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-300 dark:to-indigo-400 animate-gradient-x">
          Welcome to The Dream Lab
        </h1>
        
        <RotatingQuotes />

        <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          Our platform integrates cutting-edge AI with powerful bioinformatics tools. 
          Press the button below to begin your research journey with Dr. Rhesus.
        </p>
        
        <div className="mt-8">
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

        <QuoteCard />
        <StaticImage />
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
