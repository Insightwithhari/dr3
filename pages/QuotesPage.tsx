import React from 'react';

const quotes = [
    { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson" },
    { text: "Research is what I'm doing when I don't know what I'm doing.", author: "Wernher von Braun" },
    { text: "The art and science of asking questions is the source of all knowledge.", author: "Thomas Berger" },
    { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
    { text: "Science and everyday life cannot and should not be separated.", author: "Rosalind Franklin" },
    { text: "The scientist is not a person who gives the right answers, he's one who asks the right questions.", author: "Claude Lévi-Strauss" },
    { text: "In biology, nothing is constant. Everything is in a state of flux.", author: "Theodosius Dobzhansky" },
    { text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", author: "Edwin Hubble" },
];

const QuoteCard: React.FC<{ text: string; author: string }> = ({ text, author }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-200 dark:border-slate-700 transform transition-transform hover:-translate-y-1">
        <blockquote className="text-lg italic text-slate-700 dark:text-slate-300">
            "{text}"
        </blockquote>
        <cite className="block text-right mt-4 font-semibold text-blue-600 dark:text-blue-400 not-italic">
            - {author}
        </cite>
    </div>
);

const QuotesPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600 dark:text-blue-300">
          Inspiring Quotes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} text={quote.text} author={quote.author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;
