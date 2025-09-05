import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ProteinBackground from './components/ProteinBackground';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import SupervisorPage from './pages/SupervisorPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import { MenuIcon, RhesusIcon } from './components/icons';
import ThemeToggle from './components/ThemeToggle';
import LiveClock from './components/LiveClock';
import DrRhesusPopup from './components/DrRhesusPopup';

export type Page = 'home' | 'chatbot' | 'supervisor' | 'about' | 'contact';
export type Theme = 'light' | 'dark';

const getPageFromHash = (): Page => {
    const hash = window.location.hash.substring(1);
    const validPages: Page[] = ['home', 'chatbot', 'supervisor', 'about', 'contact'];
    if (validPages.includes(hash as Page)) {
        return hash as Page;
    }
    return 'home';
};

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRhesusPopupOpen, setRhesusPopupOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleAuthentication = useCallback(() => {
    setIsAuthenticated(true);
    window.location.hash = '#chatbot';
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      const newPage = getPageFromHash();
      if ((newPage === 'chatbot' || newPage === 'supervisor') && !isAuthenticated) {
        window.location.hash = '#home';
        setCurrentPage('home');
      } else {
        setCurrentPage(newPage);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    handleHashChange();
    if (!window.location.hash) {
        window.location.hash = '#home';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isAuthenticated]);

  const renderPage = () => {
    const pageContent = () => {
      switch (currentPage) {
        case 'home':
          return <HomePage onAuthenticate={handleAuthentication} />;
        case 'chatbot':
          return isAuthenticated ? <ChatbotPage /> : <HomePage onAuthenticate={handleAuthentication} />;
        case 'supervisor':
          return isAuthenticated ? <SupervisorPage /> : <HomePage onAuthenticate={handleAuthentication} />;
        case 'about':
          return <AboutUsPage />;
        case 'contact':
          return <ContactUsPage />;
        default:
          return <HomePage onAuthenticate={handleAuthentication} />;
      }
    };
    return <div className="animate-fadeIn">{pageContent()}</div>;
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white font-sans flex flex-col">
      <ProteinBackground theme={theme} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentPage={currentPage}
        isAuthenticated={isAuthenticated}
      />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <header className="flex items-center justify-between p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-b border-gray-300/50 dark:border-gray-700/50 shadow-lg">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-4"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </button>
            <div className="hidden sm:block">
                <LiveClock />
            </div>
          </div>
          <div className="text-center absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold text-cyan-600 dark:text-cyan-300 tracking-wider">The Dream Lab</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">- we explore the questions we want the answers for.</p>
          </div>
          <div className="flex items-center">
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          {renderPage()}
        </main>

        <footer className="p-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-t border-gray-300/50 dark:border-gray-700/50 text-center text-xs text-gray-600 dark:text-gray-500">
            <p className="mb-1">Created by Hariom 👨‍💻</p>
            © {new Date().getFullYear()} The Dream Lab. All rights reserved.
        </footer>
      </div>

      <button
        onClick={() => setRhesusPopupOpen(true)}
        className="fixed bottom-6 right-6 z-20 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-500 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
        aria-label="About Dr. Rhesus"
      >
        <RhesusIcon className="w-8 h-8"/>
      </button>

      <DrRhesusPopup isOpen={isRhesusPopupOpen} onClose={() => setRhesusPopupOpen(false)} />
    </div>
  );
};

export default App;