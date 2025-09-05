import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700 ${className}`}>
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{title}</h3>
        <div className="text-slate-700 dark:text-slate-300 space-y-2">{children}</div>
    </div>
);

const SupervisorProfileCard: React.FC = () => (
    <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
        <img 
            src="https://i.pravatar.cc/150?img=12" 
            alt="Supervisor" 
            className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-slate-300 dark:border-slate-600 flex-shrink-0"
        />
        <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Dr. Evelyn Reed</h2>
            <p className="text-lg text-blue-600 dark:text-blue-400">Principal Investigator</p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
                Dr. Reed is a leading expert in computational biology with over 20 years of experience in protein engineering and bioinformatics. Her work focuses on leveraging artificial intelligence to accelerate drug discovery and develop novel therapeutic proteins.
            </p>
        </div>
    </div>
);


const SupervisorPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 text-slate-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-300">Meet Our Supervisor</h1>
        
        <SupervisorProfileCard />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard title="Ongoing Projects">
                <ul className="list-disc list-inside">
                    <li>Project Chimera: Protein stability analysis (Due: next Friday)</li>
                    <li>Project Griffin: In-silico drug docking simulations</li>
                    <li>Project Hydra: AI-driven gene sequencing</li>
                </ul>
            </InfoCard>
            <InfoCard title="Recent Publications">
                <ul className="list-disc list-inside">
                    <li>"In-Silico Protein Folding" - J. Mol. Biol. (Accepted)</li>
                    <li>"Thermostability Mutants of Lysozyme" - Protein Sci. (Published)</li>
                </ul>
            </InfoCard>
            <InfoCard title="Research Interests" className="md:col-span-2">
                <p>
                    Our lab focuses on the intersection of computational biology and artificial intelligence. Key areas of interest include rational protein design, predicting protein-protein interactions, and developing novel algorithms for analyzing large-scale genomic data. We are particularly interested in engineering enzymes with enhanced catalytic activity and stability for industrial applications.
                </p>
            </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default SupervisorPage;
