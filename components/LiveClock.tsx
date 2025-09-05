import React, { useState, useEffect } from 'react';

const LiveClock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };

    return (
        <div className="text-sm text-slate-400 dark:text-slate-400 font-mono text-center">
            {formatDate(time)}
        </div>
    );
};

export default LiveClock;
