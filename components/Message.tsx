import type React from 'react';
import { Message, MessageAuthor } from '../types';
import { UserIcon, RhesusIcon } from './icons';

interface MessageProps {
  message: Message;
}

const MessageComponent: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.author === MessageAuthor.USER;

  const authorDetails = {
    [MessageAuthor.USER]: {
      name: 'You',
      icon: <UserIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />,
      align: 'items-start',
      iconBg: 'bg-slate-100 dark:bg-slate-700',
    },
    [MessageAuthor.RHESUS]: {
      name: 'Dr. Rhesus',
      icon: <RhesusIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      align: 'items-start',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    },
    [MessageAuthor.SYSTEM]: {
      name: 'System',
      icon: null,
      align: 'items-center',
      iconBg: '',
    },
  };

  const details = authorDetails[message.author];

  return (
    <div className={`p-4 md:p-6 flex flex-col ${details.align}`}>
      <div className="flex items-start space-x-4 max-w-full">
        {details.icon && (
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${details.iconBg}`}>
                {details.icon}
            </div>
        )}
        <div className={`flex flex-col w-full overflow-hidden`}>
          <span className="font-bold text-slate-800 dark:text-slate-300">{details.name}</span>
          <div className="prose prose-sm md:prose-base max-w-none text-slate-900 dark:text-slate-300 prose-headings:text-slate-900 dark:prose-headings:text-white prose-strong:text-slate-900 dark:prose-strong:text-white">
            {message.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
