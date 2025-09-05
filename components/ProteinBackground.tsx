import React, { useEffect, useRef } from 'react';
import type { Theme } from '../App';

declare const $3Dmol: any;

interface ProteinBackgroundProps {
  theme: Theme;
}

const ProteinBackground: React.FC<ProteinBackgroundProps> = ({ theme }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const pdbId = '1XQ8'; // Alpha-synuclein

  useEffect(() => {
    let viewer: any = null;
    let rotationInterval: number | undefined;

    if (viewerRef.current) {
      const element = viewerRef.current;
      const backgroundColor = theme === 'dark' ? '#0D1117' : '#FFFFFF';
      const config = { backgroundColor };
      viewer = $3Dmol.createViewer(element, config);

      fetch(`https://files.rcsb.org/view/${pdbId}.pdb`)
        .then((res) => res.text())
        .then((pdbData) => {
          viewer.addModel(pdbData, 'pdb');
          viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
          viewer.zoomTo();
          viewer.render();
          
          rotationInterval = window.setInterval(() => {
            if (viewer) {
              viewer.rotate(1, { y: 1 });
              viewer.render();
            }
          }, 100);
        })
        .catch((err) => {
          console.error("Background PDB fetch error:", err);
        });
    }

    return () => {
      if (rotationInterval) {
        clearInterval(rotationInterval);
      }
      if (viewer && viewer.clear) {
        viewer.clear();
      }
    };
  }, [theme]);

  return (
    <div 
      ref={viewerRef} 
      className="absolute inset-0 z-0 opacity-20 dark:opacity-40"
      style={{ width: '100%', height: '100%' }} 
    />
  );
};

export default ProteinBackground;