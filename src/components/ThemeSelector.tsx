import React from 'react';
import { ThemeId, ThematicArea, Language } from '../types';
import { THEMATIC_AREAS } from '../data/themes';
import {
  TrendingUp,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Coins,
  Droplets,
  LayoutGrid,
} from 'lucide-react';

interface ThemeSelectorProps {
  selectedTheme: ThemeId | 'all';
  onSelectTheme: (themeId: ThemeId | 'all') => void;
  language: Language;
  allowAll?: boolean;
}

const ICONS_MAP: Record<string, React.FC<{ className?: string }>> = {
  TrendingUp,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Coins,
  Droplets,
};

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selectedTheme,
  onSelectTheme,
  language,
  allowAll = true,
}) => {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none" id="theme-selector-container">
      <div className="flex items-center gap-2 min-w-max">
        {allowAll && (
          <button
            id="theme-btn-all"
            onClick={() => onSelectTheme('all')}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold transition-all border cursor-pointer ${
              selectedTheme === 'all'
                ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[1px_1px_0px_#1c1917]'
                : 'bg-[#faf7ee] text-stone-800 border-stone-500 hover:bg-[#f2ecdc] shadow-[1px_1px_0px_#78716c]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Tous les axes' : 'كافة المحاور'}</span>
          </button>
        )}

        {THEMATIC_AREAS.map((theme: ThematicArea) => {
          const Icon = ICONS_MAP[theme.iconName] || TrendingUp;
          const isSelected = selectedTheme === theme.id;

          return (
            <button
              key={theme.id}
              id={`theme-btn-${theme.id}`}
              onClick={() => onSelectTheme(theme.id)}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[1px_1px_0px_#1c1917]'
                  : 'bg-[#faf7ee] text-stone-800 border-stone-500 hover:bg-[#f2ecdc] shadow-[1px_1px_0px_#78716c]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{theme.shortLabel[language]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
