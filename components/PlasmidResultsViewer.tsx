import React from 'react';

// Define the type for construct details
interface ConstructDetails {
  gene: string;
  tag: string;
  tag_position: string;
  vector: string;
  host_system: string;
  residue_range: string;
  selection_marker: string;
  promoter: string;
}

// Define the type for a single article result
export interface PlasmidResult {
  article_title: string;
  doi: string;
  pubmed_id: string;
  corresponding_author_name: string;
  corresponding_author_email: string;
  affiliation: string;
  construct_details: ConstructDetails;
}

interface PlasmidResultsViewerProps {
  results: PlasmidResult[];
}

const DetailItem: React.FC<{ label: string; value: string | undefined | null }> = ({ label, value }) => {
    if (!value) return null;
    return (
        <div>
            <span className="font-semibold text-slate-600 dark:text-slate-400">{label}:</span>
            <span className="ml-2 text-slate-800 dark:text-slate-300">{value}</span>
        </div>
    );
};


const PlasmidResultsViewer: React.FC<PlasmidResultsViewerProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="mt-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-slate-600 dark:text-slate-400">
        <p>No verifiable plasmid constructs found for your query.</p>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      {results.map((result, index) => (
        <div key={result.doi || result.pubmed_id || index} className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-sm transition-shadow hover:shadow-md">
          <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">
            {result.doi ? (
              <a href={`https://doi.org/${result.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {result.article_title}
              </a>
            ) : (
              result.article_title
            )}
          </h3>
          
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 space-x-4">
            {result.doi && <span>DOI: {result.doi}</span>}
            {result.pubmed_id && <span>PMID: {result.pubmed_id}</span>}
          </div>

          {result.corresponding_author_name && (
            <div className="mt-3 text-sm">
              <p>
                <span className="font-semibold">Author:</span> {result.corresponding_author_name}
                {result.corresponding_author_email && (
                  <a href={`mailto:${result.corresponding_author_email}`} className="ml-2 text-blue-500 hover:underline">
                    ({result.corresponding_author_email})
                  </a>
                )}
              </p>
              {result.affiliation && <p><span className="font-semibold">Affiliation:</span> {result.affiliation}</p>}
            </div>
          )}

          <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-md border-l-4 border-blue-500 dark:border-blue-400">
            <h4 className="font-semibold text-md text-slate-900 dark:text-slate-200 mb-2">Construct Details</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <DetailItem label="Gene" value={result.construct_details.gene} />
                <DetailItem label="Tag" value={result.construct_details.tag} />
                <DetailItem label="Tag Position" value={result.construct_details.tag_position} />
                <DetailItem label="Vector" value={result.construct_details.vector} />
                <DetailItem label="Host System" value={result.construct_details.host_system} />
                <DetailItem label="Residue Range" value={result.construct_details.residue_range} />
                <DetailItem label="Selection Marker" value={result.construct_details.selection_marker} />
                <DetailItem label="Promoter" value={result.construct_details.promoter} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlasmidResultsViewer;
