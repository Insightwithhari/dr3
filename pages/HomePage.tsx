import React from 'react';
import RotatingQuotes from '../components/RotatingQuotes';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center p-4 md:p-8">
      <div className="max-w-4xl">
        <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
            "We explore the questions we want the answers for."
        </p>

        <RotatingQuotes />

        <p className="mt-6 max-w-2xl mx-auto text-slate-700 dark:text-slate-400">
          You have successfully accessed The Dream Lab's research platform. 
          Use the navigation menu to access the Dr. Rhesus assistant and other tools.
        </p>

        <div className="mt-10">
            <img 
                src="https://envs.sh/iZ7.jpg" 
                alt="Bioinformatics Research" 
                className="w-full max-w-xs h-auto mx-auto rounded-lg shadow-xl border-4 border-slate-200 dark:border-slate-700"
            />
        </div>
        
        <div className="mt-10 max-w-2xl mx-auto">
            <blockquote className="p-6 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg border-l-4 border-blue-500 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/20">
                <p className="italic text-slate-600 dark:text-slate-300">
                    "Your imagination is your best friend, when conscious world won't give you subconscious will. So, keep on moving in the journey which might seem endless and without any light, you have the capacity to figure this out"
                </p>
                <cite className="block text-right mt-4 font-semibold text-slate-700 dark:text-slate-200 not-italic">
                    - Dr Rimpy Kaur Chowhan
                </cite>
            </blockquote>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
