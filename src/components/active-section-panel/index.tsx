'use client';
import React from 'react';

interface ActiveSectionPanelProps {
  title: string;
  onBack: () => void;
}

export const ActiveSectionPanel: React.FC<ActiveSectionPanelProps> = ({ title, onBack }) => {
  return (
    <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-cyan-300 p-4 rounded-md shadow-lg border border-cyan-500">
      <h2 className="text-xl font-bold">{title}</h2>
      <button 
        className="mt-2 px-3 py-1 bg-cyan-600 rounded hover:bg-cyan-700 text-white text-sm transition-colors"
        onClick={onBack}
      >
        Back to Globe
      </button>
    </div>
  );
};