import React, { useState, useRef, useCallback } from 'react';
import type { Chat } from '@google/genai';
import { Message, MessageAuthor } from '../types';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import ChatWindow from '../components/ChatWindow';
import ChatInput from '../components/ChatInput';
import { RhesusIcon, DownloadIcon, ProjectIcon } from '../components/icons';
import PDBViewer from '../components/PDBViewer';
import ProjectListPage from '../components/ProjectListPage';

const BlinkingCursor: React.FC = () => <span className="inline-block w-2 h-5 bg-blue-500 animate-pulse ml-1" />;

const ChatbotComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      author: MessageAuthor.RHESUS,
      content: "Greetings. I am Dr. Rhesus, your bioinformatics research assistant. How may I help you today? You can ask me to find, visualize, or mutate protein structures, or to search for relevant literature."
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);

  const handleDownload = useCallback((filename: string, pdbId: string) => {
    fetch(`https://files.rcsb.org/view/${pdbId}.pdb`)
      .then(response => response.text())
      .then(data => {
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading PDB file:', error));
  }, []);

  const parseResponse = useCallback((responseText: string): React.ReactNode => {
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    const regex = /\[(PDB_VIEW|MUTATION_DOWNLOAD|BLAST_RESULT|PUBMED_SUMMARY):([^\]]+)\]/g;
    
    let match;
    while ((match = regex.exec(responseText)) !== null) {
      if (match.index > lastIndex) {
        parts.push(responseText.substring(lastIndex, match.index));
      }
      
      const [fullMatch, command, payload] = match;
      
      switch (command) {
        case 'PDB_VIEW':
          parts.push(<PDBViewer key={`${command}-${payload}`} pdbId={payload.trim()} />);
          break;
        case 'MUTATION_DOWNLOAD':
            const filename = payload.trim();
            const pdbId = filename.split('_')[0];
            parts.push(
              <div key={`${command}-${payload}`} className="mt-4">
                <button
                  onClick={() => handleDownload(filename, pdbId)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <DownloadIcon />
                  Download {filename}
                </button>
              </div>
            );
          break;
        case 'BLAST_RESULT':
          parts.push(<pre key={`${command}-${payload}`} className="whitespace-pre-wrap bg-slate-100 dark:bg-slate-800 p-3 rounded-md font-mono text-xs mt-4">{payload.trim()}</pre>);
          break;
        case 'PUBMED_SUMMARY':
          parts.push(<div key={`${command}-${payload}`} className="mt-4 p-3 border-l-4 border-blue-500 bg-slate-50 dark:bg-slate-800 rounded-r-md">{payload.trim()}</div>);
          break;
      }
      lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < responseText.length) {
      parts.push(responseText.substring(lastIndex));
    }
    
    return <>{parts.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)}</>;
  }, [handleDownload]);

  const handleSendMessage = useCallback(async (messageText: string) => {
    if (isLoading) return;

    setIsLoading(true);

    if (!chatRef.current) {
      chatRef.current = createChatSession();
    }
    
    const userMessage: Message = {
      id: Date.now().toString(),
      author: MessageAuthor.USER,
      content: messageText
    };

    setMessages(prev => [...prev, userMessage]);

    const rhesusMessageId = (Date.now() + 1).toString();
    const initialRhesusMessage: Message = {
        id: rhesusMessageId,
        author: MessageAuthor.RHESUS,
        content: <BlinkingCursor />
    };
    setMessages(prev => [...prev, initialRhesusMessage]);

    try {
      const stream = await sendMessageStream(chatRef.current, messageText);
      let fullResponseText = "";

      for await (const chunk of stream) {
        fullResponseText += chunk.text;
        setMessages(prev => prev.map(msg => 
            msg.id === rhesusMessageId 
                ? { ...msg, content: <>{fullResponseText}<BlinkingCursor /></> } 
                : msg
        ));
      }

      const parsedContent = parseResponse(fullResponseText);
      setMessages(prev => prev.map(msg => 
        msg.id === rhesusMessageId 
            ? { ...msg, content: parsedContent } 
            : msg
      ));

    } catch (error) {
        console.error("Failed to get response:", error);
        const errorMessage: Message = {
            id: rhesusMessageId,
            author: MessageAuthor.RHESUS,
            content: "I'm sorry, an error occurred. Please try again."
        };
        setMessages(prev => prev.map(msg => msg.id === rhesusMessageId ? errorMessage : msg));
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, parseResponse]);

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center p-4 bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 shadow-sm">
            <RhesusIcon className="w-8 h-8 text-blue-500 dark:text-blue-400"/>
            <div className="ml-3">
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dr. Rhesus</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Bioinformatics Research Assistant</p>
            </div>
      </header>
      <ChatWindow messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};


const ChatbotPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'chatbot' | 'projects'>('chatbot');

    const renderContent = () => {
        switch (activeTab) {
            case 'chatbot':
                return <ChatbotComponent />;
            case 'projects':
                return <ProjectListPage />;
            default:
                return null;
        }
    }

    const NavButton: React.FC<{
        label: string;
        tabName: 'chatbot' | 'projects';
        icon: React.ReactNode
    }> = ({ label, tabName, icon }) => {
        const isActive = activeTab === tabName;
        return (
            <button
                onClick={() => setActiveTab(tabName)}
                className={`flex-1 flex flex-col items-center justify-center p-2 transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'}`}
            >
                {icon}
                <span className="text-xs font-medium">{label}</span>
            </button>
        )
    };

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex-grow pb-16 overflow-y-auto">
                {renderContent()}
            </div>
            <div className="fixed bottom-0 left-0 right-0 h-16 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 flex z-10">
                <NavButton label="Dr. Rhesus" tabName="chatbot" icon={<RhesusIcon className="w-6 h-6" />} />
                <NavButton label="Projects" tabName="projects" icon={<ProjectIcon className="w-6 h-6" />} />
            </div>
        </div>
    );
};

export default ChatbotPage;
