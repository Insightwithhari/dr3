import React from 'react';
import type { GroundingChunk } from '@google/genai';

interface GroundingSourcesProps {
  chunks: GroundingChunk[];
}

const GroundingSources: React.FC<GroundingSourcesProps> = ({ chunks }) => {
  const webChunks = chunks.filter(chunk => chunk.web?.uri && chunk.web?.title);

  if (webChunks.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
      <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-200 mb-2">Sources</h4>
      <ul className="list-decimal list-inside space-y-1">
        {webChunks.map((chunk, index) => (
          <li key={index} className="text-xs text-blue-600 dark:text-blue-400 truncate">
            <a 
              href={chunk.web!.uri} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
              title={chunk.web!.title}
            >
              {chunk.web!.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroundingSources;
