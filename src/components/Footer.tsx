import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ShieldCheck, BookOpen, Code, Github } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer id="main-footer" className="bg-white border-t border-stone-200 mt-16 text-stone-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Neutrality & Methodology Box */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 sm:p-6 space-y-3">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>{t.neutralityDisclaimerTitle}</span>
          </div>
          <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
            {t.neutralityDisclaimerText}
          </p>

          {/* AI Generation Notice */}
          <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl space-y-1">
            <span className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
              🤖 {t.aiDisclaimerBadge}
            </span>
            <p className="text-amber-800/90 text-[11px] leading-relaxed">
              {t.aiDisclaimerNotice}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-2 border-t border-stone-200/60 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-stone-400" />
            <span>{t.sourcesLabel}</span>
          </div>
        </div>

        {/* Bottom Credits and GitHub Pages compatibility badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-100 text-stone-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-700 text-white font-bold flex items-center justify-center text-[10px]">
              {language === 'ar' ? 'تق' : 'TQ'}
            </div>
            <span>
              © {new Date().getFullYear()} Taqaboul Maroc. {t.appSubtitle}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-medium text-[11px] border border-stone-200">
              <Code className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.githubPagesNote}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
