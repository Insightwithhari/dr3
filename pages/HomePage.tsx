import React from 'react';
import RotatingQuotes from '../components/RotatingQuotes';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4 md:p-8">
      <div className="max-w-4xl">
        <RotatingQuotes />

        <p className="mt-6 max-w-2xl mx-auto text-slate-700 dark:text-slate-400">
          You have successfully accessed The Dream Lab's research platform. 
          Use the navigation menu to access the Dr. Rhesus assistant and other tools.
        </p>

        <div className="mt-10">
            <img 
                src="https://images.unsplash.com/photo-1579532582937-16c108930bf6?q=80&w=800&h=800&auto=format&fit=crop" 
                alt="Bioinformatics Research" 
                className="w-full max-w-xs h-auto mx-auto rounded-lg shadow-xl border-4 border-slate-200 dark:border-slate-700"
            />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
