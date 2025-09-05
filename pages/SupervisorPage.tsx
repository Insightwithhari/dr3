import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700 ${className}`}>
        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">{title}</h3>
        <div className="text-slate-700 dark:text-slate-300 space-y-2">{children}</div>
    </div>
);

const SupervisorProfileCard: React.FC<{name: string, title: string, imageUrl: string, bio: string, glowClasses: string}> = ({ name, title, imageUrl, bio, glowClasses }) => (
    <div className={`flex flex-col items-center md:flex-row md:items-start text-center md:text-left bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-shadow duration-300 ${glowClasses}`}>
        <img 
            src={imageUrl} 
            alt={name}
            className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8 border-4 border-slate-300 dark:border-slate-600 flex-shrink-0 object-cover"
        />
        <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{name}</h2>
            <p className="text-lg text-blue-600 dark:text-blue-400">{title}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
                {bio}
            </p>
        </div>
    </div>
);


const SupervisorPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 text-slate-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-300">Meet Our Supervisors</h1>
        
        <div className="space-y-10 mb-10">
          <SupervisorProfileCard 
              name="Dr. Evelyn Reed"
              title="Principal Investigator"
              imageUrl="https://i.pravatar.cc/150?img=12"
              bio="Dr. Reed is a leading expert in computational biology with over 20 years of experience in protein engineering and bioinformatics. Her work focuses on leveraging artificial intelligence to accelerate drug discovery and develop novel therapeutic proteins."
              glowClasses="hover:shadow-blue-500/20 dark:hover:shadow-blue-400/10"
          />
          <SupervisorProfileCard 
              name="Dr. Kenji Tanaka"
              title="Senior Research Scientist"
              imageUrl="https://i.pravatar.cc/150?img=58"
              bio="Dr. Tanaka specializes in structural bioinformatics and molecular dynamics simulations. His research is pivotal in understanding protein-ligand interactions and designing next-generation enzymes for industrial applications."
              glowClasses="hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/10"
          />
        </div>

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
