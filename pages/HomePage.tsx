import React from 'react';
import RotatingQuotes from '../components/RotatingQuotes';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4 md:p-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 animate-gradient-x">
          Welcome, Researcher
        </h1>
        
        <RotatingQuotes />

        <p className="mt-6 max-w-2xl mx-auto text-slate-700 dark:text-slate-400">
          You have successfully accessed The Dream Lab's research platform. 
          Use the navigation menu to access the Dr. Rhesus assistant and other tools.
        </p>

        <div className="mt-10">
            <img 
                src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=600&h=600&auto=format&fit=crop" 
                alt="Bioinformatics Research" 
                className="w-full max-w-xs h-auto mx-auto rounded-lg shadow-xl border-4 border-slate-200 dark:border-slate-700"
            />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
