import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '../components/icons';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{title}</h3>
            <div className="text-slate-700 dark:text-slate-300">{children}</div>
        </div>
    </div>
);


const ContactUsPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 text-slate-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-300">Contact Us</h1>
        <p className="text-lg text-center text-slate-600 dark:text-slate-300 mb-12">
            Have a question or want to collaborate? Reach out to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/50 dark:bg-slate-800/50 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="space-y-8">
                <ContactInfo
                    icon={<EnvelopeIcon className="w-6 h-6 text-blue-500 dark:text-blue-300" />}
                    title="Email Us"
                >
                    <a href="mailto:hariom.ae-219@andc.du.ac.in" className="hover:underline">
                        contact@dreamlab.science
                    </a>
                </ContactInfo>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Send a Message</h3>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-100 dark:bg-slate-700 p-3 rounded-md border border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full bg-slate-100 dark:bg-slate-700 p-3 rounded-md border border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:outline-none" />
                <textarea placeholder="Your Message" rows={4} className="w-full bg-slate-100 dark:bg-slate-700 p-3 rounded-md border border-slate-300 dark:border-slate-600 focus:ring-blue-500 focus:outline-none resize-none"></textarea>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold transition-colors">
                    Submit
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
