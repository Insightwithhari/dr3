import React from 'react';
import type { Theme } from '../App';
import { SunIcon, MoonIcon } from './icons';

interface ThemeToggleProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800 focus:ring-blue-500"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <MoonIcon className="w-6 h-6 text-slate-700" /> : <SunIcon className="w-6 h-6 text-yellow-400" />}
        </button>
    );
};

export default ThemeToggle;
