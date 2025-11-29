import React from 'react';
import { ThemeId } from '../types';
import { THEMES } from '../constants';
import { Palette } from 'lucide-react';

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onSelect: (theme: ThemeId) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onSelect }) => {
  return (
    <div className="flex items-center gap-3 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-sm">
      <div className="pl-2 pr-1 text-white/50">
        <Palette size={16} />
      </div>
      {Object.values(THEMES).map((theme) => (
        <button
          key={theme.id}
          onClick={() => onSelect(theme.id as ThemeId)}
          className={`
            px-3 py-1.5 rounded-full text-xs font-medium transition-all
            ${currentTheme === theme.id 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-white/60 hover:text-white hover:bg-white/10'}
          `}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
};