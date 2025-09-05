import React, { useState, useEffect } from 'react';

const quotes = [
    { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
    { text: "Research is what I'm doing when I don't know what I'm doing.", author: "Wernher von Braun" },
    { text: "The art and science of asking questions is the source of all knowledge.", author: "Thomas Berger" },
    { text: "In biology, nothing is constant. Everything is in a state of flux.", author: "Theodosius Dobzhansky" },
];

const RotatingQuotes: React.FC = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 7000); // Change quote every 7 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="mt-4 text-lg text-gray-600 dark:text-gray-300 transition-opacity duration-500">
            <p key={index} className="animate-fadeIn">"{quotes[index].text}" - <span className="font-semibold">{quotes[index].author}</span></p>
        </div>
    );
};

export default RotatingQuotes;
