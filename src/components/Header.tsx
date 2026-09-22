import React from 'react';
import { Language, ActiveTab } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { NewspaperMasthead } from './NewspaperMasthead';
import { Scale, Layers, Users, Globe, Printer, Type, BarChart3, Sparkles, Newspaper, BookmarkCheck } from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  largeFont: boolean;
  onToggleFontSize: () => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  activeTab,
  onTabChange,
  largeFont,
  onToggleFontSize,
  onPrint,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header id="main-header" className="bg-[#faf7ee] border-b-2 border-stone-800 sticky top-0 z-30 shadow-xs">
      {/* Top Utility Bar with Newspaper Ink Vibe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between border-b border-stone-300 text-xs text-stone-700 bg-[#f4efe3]">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-stone-800 text-stone-900 bg-white font-bold text-[11px] shadow-[1px_1px_0px_#1c1917]">
            <Newspaper className="w-3 h-3 text-stone-800" />
            <span>{t.appBadge}</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 border border-amber-800/50 text-amber-950 bg-amber-100/60 font-semibold text-[11px]">
            <Sparkles className="w-3 h-3 text-amber-700" />
            <span>{t.aiDisclaimerBadge}</span>
          </span>
          <span className="hidden md:inline text-stone-400">|</span>
          <span className="hidden md:inline text-stone-600 font-serif italic text-[11px]">
            {language === 'fr' ? 'Édition spéciale : Élections & Programmes 2021-2026' : 'طبعة خاصة: انتخابات وبرامج المغرب 2021-2026'}
          </span>
        </div>

        {/* Accessibility & Language Controls */}
        <div className="flex items-center gap-2.5">
          {/* Font Size Button */}
          <button
            id="font-size-toggle-btn"
            onClick={onToggleFontSize}
            className="flex items-center gap-1 px-2 py-0.5 border border-stone-400 bg-white hover:bg-stone-100 transition-colors text-stone-800 shadow-[1px_1px_0px_#78716c] text-xs font-semibold cursor-pointer"
            title={t.fontSize}
            aria-label={t.fontSize}
          >
            <Type className="w-3.5 h-3.5" />
            <span>{largeFont ? 'A-' : 'A+'}</span>
          </button>

          {/* Print Button */}
          <button
            id="print-page-btn"
            onClick={onPrint}
            className="no-print hidden sm:flex items-center gap-1 px-2 py-0.5 border border-stone-400 bg-white hover:bg-stone-100 transition-colors text-stone-800 shadow-[1px_1px_0px_#78716c] text-xs font-semibold cursor-pointer"
            title={t.print}
            aria-label={t.print}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.print}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center border border-stone-500 p-0.5 bg-[#eae3d2] shadow-[1px_1px_0px_#78716c]">
            <button
              id="lang-fr-btn"
              onClick={() => onLanguageChange('fr')}
              className={`px-2 py-0.5 text-xs font-bold transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-stone-900 text-[#faf7ee]'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              aria-pressed={language === 'fr'}
            >
              Français
            </button>
            <button
              id="lang-ar-btn"
              onClick={() => onLanguageChange('ar')}
              className={`px-2 py-0.5 text-xs font-bold transition-all cursor-pointer ${
                language === 'ar'
                  ? 'bg-stone-900 text-[#faf7ee]'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
              aria-pressed={language === 'ar'}
            >
              العربية
            </button>
          </div>
        </div>
      </div>

      {/* Newspaper Masthead Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewspaperMasthead language={language} />
      </div>

      {/* Newspaper Section Navigation Bar (Cahiers du Journal) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-[#faf7ee]">
        <div className="flex items-center gap-2 text-xs text-stone-600">
          <span className="font-bold uppercase tracking-wider text-stone-900 text-[11px] flex items-center gap-1">
            <BookmarkCheck className="w-3.5 h-3.5 text-emerald-800" />
            <span>{language === 'ar' ? 'أقسام الجريدة :' : 'CAHIERS DU JOURNAL :'}</span>
          </span>
        </div>

        {/* View Navigation Tabs Styled Like Newspaper Section Tabs */}
        <nav
          id="main-nav-tabs"
          className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0"
          aria-label="Navigation principale"
        >
          <button
            id="nav-tab-visual"
            onClick={() => onTabChange('visual')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap border cursor-pointer ${
              activeTab === 'visual'
                ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[2px_2px_0px_#1c1917]'
                : 'bg-white text-stone-700 border-stone-400 hover:bg-[#f2edde] hover:text-stone-950'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ar' ? 'الملحق البياني' : 'Cahier Graphique'}</span>
            <span className="px-1 py-0.2 text-[9px] uppercase font-bold border border-current">
              {language === 'ar' ? 'أعمدة' : 'Visuel'}
            </span>
          </button>

          <button
            id="nav-tab-compare"
            onClick={() => onTabChange('compare')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap border cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[2px_2px_0px_#1c1917]'
                : 'bg-white text-stone-700 border-stone-400 hover:bg-[#f2edde] hover:text-stone-950'
            }`}
          >
            <Scale className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ar' ? 'جدول المقارنة' : 'Tableau Comparatif'}</span>
          </button>

          <button
            id="nav-tab-thematic"
            onClick={() => onTabChange('thematic')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap border cursor-pointer ${
              activeTab === 'thematic'
                ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[2px_2px_0px_#1c1917]'
                : 'bg-white text-stone-700 border-stone-400 hover:bg-[#f2edde] hover:text-stone-950'
            }`}
          >
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ar' ? 'الملفات الموضوعية' : 'Dossiers Thématiques'}</span>
          </button>

          <button
            id="nav-tab-parties"
            onClick={() => onTabChange('parties')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold transition-all whitespace-nowrap border cursor-pointer ${
              activeTab === 'parties'
                ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[2px_2px_0px_#1c1917]'
                : 'bg-white text-stone-700 border-stone-400 hover:bg-[#f2edde] hover:text-stone-950'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-600" />
            <span>{language === 'ar' ? 'سجل الأحزاب' : 'Répertoire des Partis'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
