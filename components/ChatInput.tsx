import React, { useState } from 'react';
import { SendIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm border-t border-slate-300 dark:border-slate-700">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-white dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg p-3 pr-12 border border-slate-400 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition-shadow"
          placeholder="Ask Dr. Rhesus..."
          rows={1}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-white bg-blue-600 hover:bg-blue-500 disabled:bg-slate-500 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2">
        You can use Shift+Enter to create a new line.
      </p>
    </form>
  );
};

export default ChatInput;
