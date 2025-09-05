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
              name="Dr. Rimpy Kaur Chowhan"
              title="Assistant Professor"
              imageUrl="https://envs.sh/icX.jpg"
              bio="She is currently serving as an Assistant Professor at Acharya Narendra Dev College, University of Delhi. Her research expertise encompasses protein science, protein aggregation, computational biology, and neurodegenerative disorders. She is presently leading multiple research projects focusing on elucidating the conformational dynamics of disease-associated proteins and exploring novel therapeutic targets against antimicrobial-resistant Klebsiella pneumoniae. "
              glowClasses="hover:shadow-blue-500/20 dark:hover:shadow-blue-400/10"
          />
          <SupervisorProfileCard 
              name="Dr. Archana Pandey"
              title="Associate Professor"
              imageUrl="https://envs.sh/icy.jpg"
              bio="She is an Associate Professor at Acharya Narendra Dev College, University of Delhi. Her areas of expertise include molecular biology, animal models, and bioluminescence. She is currently supervising several research projects focused on the development of biosensing tools and advancing cancer research."
              glowClasses="hover:shadow-indigo-500/20 dark:hover:shadow-indigo-400/10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard title="Ongoing Projects">
                <ul className="list-disc list-inside">
                    <li>Finding Drug Targets and Developing Novel Strategies for Treating AMR Klebsiella pneumoniae
Exploring potential therapeutic targets and innovative approaches to combat antibiotic-resistant Klebsiella pneumoniae.
</li>
                    <li>MDM2 Mutational Blueprint: An In-Silico Expedition into Cancer’s Molecular Root
Mapping mutational patterns in MDM2 using computational methods to uncover molecular drivers of cancer.

</li>
                    <li>Synthesis and characterization of ATPase inhibitor-based silver nanoparticles.</li>
                    <li>Engineering Bacterial Cellulose into a Sustainable Leather Alternative
Developing eco-friendly leather substitutes from bacterial cellulose for sustainable material applications.

</li>
                    <li>Computational Analysis of MDM2 Conformational Dynamics: Bridging Structure and Function
Investigating the dynamic structural behavior of MDM2 protein to understand its functional mechanisms.
</li>
                    <li>Studying Effect of Probiotics on Cancer Progression Using Cancer Cell Lines
Assessing how probiotics influence cancer cell behavior and progression in vitro.</li>
                </ul>
            </InfoCard>
            <InfoCard title="Recent Publications">
                <ul className="list-disc list-inside">
                    <li>Acute Osmotic and pH Shock to Bioluminescent Bacteria Is 
Reversible in Terms of Luminescence Response
 Rajeev Ranjan,  Sakshi Goswami,  Navendu Sharma, Lalit Mohan Vashishth,  Meenu Singh,  Yeshvandra Verma,
Suresh Vir Singh Rana,  Valentina Kratasyuk,  Satyandra Kumar, Archna Pandey
                    </li>
                    <li>A bioluminescence-based bioassay for hazard assessment of food-grade 
silver foil (E174) and its validation by atomic absorption spectroscopy
 Rajeev Ranjan, Meenu Singh, Sakshi Goswami, Yeshvandra Verma, Archna Pandey
                    </li>
                    <li>Niharika Sachdev, Sangeeta Goomer, Laishram Rajender Kumar Singh, and Rimpy 
Kaur Chowhan (2023). Preparation and nutritional characterisation of protein 
concentrate prepared from foxtail millet (Setaria italica). Food Science and Technology 
International 0(0). doi:10.1177/10820132231159819
                    </li>
                    <li>Rimpy Kaur Chowhan, Sunaina Hotumalani, Hamidur Rahaman, and 
LasihramRajendrakumar Singh. (2021) pH induced conformational alteration in human 
peroxiredoxin 6 might be responsible for its resistance against lysosomal pH or high 
temperature. Scientific reports (NatureResearch) 11, 9657.
                    </li>
                </ul>
            </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default SupervisorPage;
