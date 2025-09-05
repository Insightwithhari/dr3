import React, { useState, useEffect } from 'react';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1532187643623-dbf267347e3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Advanced Molecular Visualization'
    },
    {
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'In-Silico Computational Analysis'
    },
    {
        image: 'https://images.unsplash.com/photo-1581093450021-4a7360aa9a2f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Next-Generation Gene Sequencing'
    },
];

const Slideshow: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="mt-12 mx-auto max-w-2xl relative w-full h-64 rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white font-bold text-lg">{slide.caption}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
