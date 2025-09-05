import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
        <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3">{title}</h3>
        <div className="text-gray-700 dark:text-gray-300 space-y-2">{children}</div>
    </div>
);

const SupervisorPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-cyan-600 dark:text-cyan-300">Supervisor Dashboard</h1>
        
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