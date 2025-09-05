import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import ProteinBackground from './components/ProteinBackground';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import SupervisorPage from './pages/SupervisorPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import QuotesPage from './pages/QuotesPage'; // Import the new QuotesPage
import { MenuIcon } from './components/icons';
import ThemeToggle from './components/ThemeToggle';
import DrRhesusPopup from './components/DrRhesusPopup';

export type Page = 'home' | 'chatbot' | 'supervisor' | 'about' | 'contact' | 'quotes';
export type Theme = 'light' | 'dark';

const getPageFromHash = (): Page => {
    const hash = window.location.hash.substring(1);
    const validPages: Page[] = ['home', 'chatbot', 'supervisor', 'about', 'contact', 'quotes'];
    if (validPages.includes(hash as Page)) {
        return hash as Page;
    }
    return 'home';
};

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash());
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('isAuthenticated') === 'true');
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
    sessionStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    window.location.replace('#chatbot');
    setCurrentPage('chatbot');
  }, []);
  
  useEffect(() => {
    const handleHashChange = () => {
      const newPage = getPageFromHash();
      if (newPage === 'home' && isAuthenticated) {
        window.location.hash = '#chatbot';
        setCurrentPage('chatbot');
        return;
      }
      if (newPage === 'chatbot' && !isAuthenticated) {
        window.location.hash = '#home';
        setCurrentPage('home');
      } else {
        setCurrentPage(newPage);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check on load
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
          return <SupervisorPage />;
        case 'about':
          return <AboutUsPage />;
        case 'contact':
          return <ContactUsPage />;
        case 'quotes':
          return <QuotesPage />;
        default:
          return <HomePage onAuthenticate={handleAuthentication} />;
      }
    };
    return <div className="animate-fadeIn">{pageContent()}</div>;
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 font-sans flex flex-col">
      <ProteinBackground theme={theme} isVisible={currentPage === 'home'} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        currentPage={currentPage}
        isAuthenticated={isAuthenticated}
      />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <header className="flex items-center justify-between p-4 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-700/50 shadow-md">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </button>
          <div className="text-center absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-wider">The Dream Lab</h1>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </header>
        
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>

        <footer className="p-4 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm border-t border-slate-200/80 dark:border-slate-700/50 text-center text-xs text-slate-500 dark:text-slate-500">
            <p className="mb-1">Created by Hariom 👨‍💻</p>
            © {new Date().getFullYear()} The Dream Lab. All rights reserved.
        </footer>
      </div>

      <button
        onClick={() => setRhesusPopupOpen(true)}
        className="fixed bottom-6 right-6 z-20 w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 focus:ring-blue-500"
        aria-label="About Dr. Rhesus"
        style={{
          backgroundImage: `url('https://envs.sh/icl.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '2px solid white'
        }}
      >
      </button>

      <DrRhesusPopup isOpen={isRhesusPopupOpen} onClose={() => setRhesusPopupOpen(false)} />
    </div>
  );
};

export default App;
