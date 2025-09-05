import React, { useEffect, useRef } from 'react';
import type { Theme } from '../App';

declare const $3Dmol: any;

interface ProteinBackgroundProps {
  theme: Theme;
  isVisible: boolean;
}

const ProteinBackground: React.FC<ProteinBackgroundProps> = ({ theme, isVisible }) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const pdbId = '1XQ8'; // Alpha-synuclein

  useEffect(() => {
    let viewer: any = null;
    let rotationInterval: number | undefined;

    if (viewerRef.current && isVisible) {
      const element = viewerRef.current;
      const backgroundColor = theme === 'dark' ? '#0F172A' : '#F1F5F9'; // slate-900 and slate-100
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
  }, [theme, isVisible]);

  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  return (
    <div 
      ref={viewerRef} 
      className="absolute inset-0 z-0 opacity-10 dark:opacity-20"
      style={{ width: '100%', height: '100%' }} 
    />
  );
};

export default ProteinBackground;
