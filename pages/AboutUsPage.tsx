import React from 'react';
import { TelegramIcon, InstagramIcon, XIcon, WhatsAppIcon } from '../components/icons';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
        {icon}
    </a>
);

const ProfileCard: React.FC<{ name: string; title: string; imageUrl: string }> = ({ name, title, imageUrl }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-cyan-500/20 shadow-lg border border-gray-200 dark:border-gray-700">
    <img src={imageUrl} alt={`Profile of ${name}`} className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300 dark:border-gray-700 object-cover" />
    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
    <p className="text-cyan-600 dark:text-cyan-400">{title}</p>
    <div className="flex space-x-4 mt-4">
        <SocialLink href="#" icon={<TelegramIcon />} />
        <SocialLink href="#" icon={<InstagramIcon />} />
        <SocialLink href="#" icon={<XIcon />} />
        <SocialLink href="#" icon={<WhatsAppIcon />} />
    </div>
  </div>
);

const AboutUsPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-cyan-600 dark:text-cyan-300">About The Dream Lab</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          We are a dedicated team of researchers and developers passionate about leveraging computational tools to push the boundaries of bioinformatics and protein engineering.
        </p>
        
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8 border-b-2 border-cyan-500 pb-2">Meet the Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProfileCard name="Hariom" title="Lead Developer & Bioinformatician" imageUrl="https://i.pravatar.cc/150?img=5" />
            <ProfileCard name="Alex Doe" title="Frontend Specialist & UI/UX Designer" imageUrl="https://i.pravatar.cc/150?img=6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;