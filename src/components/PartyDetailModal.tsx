import React, { useEffect } from 'react';
import { Party, Language } from '../types';
import { THEMATIC_AREAS } from '../data/themes';
import { TRANSLATIONS } from '../data/translations';
import {
  X,
  Calendar,
  Vote,
  User,
  Sparkles,
  Target,
  CheckCircle2,
  Printer,
  TrendingUp,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Coins,
  Droplets,
} from 'lucide-react';

interface PartyDetailModalProps {
  party: Party | null;
  onClose: () => void;
  language: Language;
}

const ICONS_MAP: Record<string, React.FC<{ className?: string }>> = {
  TrendingUp,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Coins,
  Droplets,
};

export const PartyDetailModal: React.FC<PartyDetailModalProps> = ({
  party,
  onClose,
  language,
}) => {
  const t = TRANSLATIONS[language];

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!party) return null;

  const isMajority = party.position === 'majority';

  return (
    <div
      id="party-detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="party-detail-modal-container"
        className="bg-[#faf7ee] w-full max-w-4xl border-4 border-stone-900 shadow-[8px_8px_0px_#1c1917] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#1c1917] text-[#faf6ec] p-5 sm:p-6 flex items-start justify-between gap-4 border-b-2 border-stone-800">
          <div className="flex items-center gap-3.5">
            <span className="text-4xl">{party.symbolIcon}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold font-newspaper-title text-white">
                  {party.acronym[language]}
                </h3>
                <span
                  className={`px-2 py-0.5 text-xs font-bold border ${
                    isMajority
                      ? 'bg-blue-900/80 text-blue-200 border-blue-600'
                      : 'bg-amber-900/80 text-amber-200 border-amber-600'
                  }`}
                >
                  {isMajority
                    ? language === 'fr'
                      ? 'Majorité gouvernementale'
                      : 'أغلبية حكومية'
                    : language === 'fr'
                    ? 'Opposition parlementaire'
                    : 'معارضة برلمانية'}
                </span>
                <span className="newspaper-stamp text-[9px] px-1.5 py-0.2">
                  {language === 'ar' ? 'ملف الحزب' : 'DOSSIER'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-serif mt-0.5">
                {party.name[language]}
              </p>
            </div>
          </div>

          <button
            id="close-party-modal-btn"
            onClick={onClose}
            className="p-2 border border-stone-700 bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-stone-900">
          {/* Identity Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-[#eae3d2] p-4 border-2 border-stone-800 shadow-[2px_2px_0px_#78716c]">
            <div>
              <span className="text-stone-600 font-bold uppercase tracking-wider block text-[10px]">
                {t.foundation}
              </span>
              <span className="font-extrabold text-stone-950 font-serif text-sm">{party.foundationYear}</span>
            </div>
            <div>
              <span className="text-stone-600 font-bold uppercase tracking-wider block text-[10px]">
                {t.seats2021}
              </span>
              <span className="font-extrabold text-stone-950 font-serif text-sm">
                {party.parliamentSeats2021}
              </span>
            </div>
            <div>
              <span className="text-stone-600 font-bold uppercase tracking-wider block text-[10px]">
                {t.leader}
              </span>
              <span className="font-extrabold text-stone-950 font-serif text-sm">
                {party.currentLeader[language]}
              </span>
            </div>
            <div>
              <span className="text-stone-600 font-bold uppercase tracking-wider block text-[10px]">
                {t.symbol}
              </span>
              <span className="font-extrabold text-stone-950 font-serif text-sm">
                {party.symbolName[language]}
              </span>
            </div>
          </div>

          {/* Slogan & Core Philosophy */}
          <div className="space-y-3">
            <div className="p-3 bg-[#f2ecdc] text-stone-900 border-2 border-stone-800 text-sm font-bold font-newspaper-title shadow-[2px_2px_0px_#1c1917]">
              « {party.slogan[language]} »
            </div>

            <div className="p-4 bg-[#faf7ee] border-2 border-stone-800 shadow-[2px_2px_0px_#1c1917] space-y-1.5 text-xs sm:text-sm">
              <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] block border-b border-stone-300 pb-1">
                {t.philosophicalOrientation}
              </span>
              <p className="text-stone-800 font-serif leading-relaxed">
                {party.generalPhilosophy[language]}
              </p>
            </div>
          </div>

          {/* All 6 Thematic Breakdowns */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b-2 border-stone-800 pb-1 font-newspaper-title flex items-center justify-between">
              <span>
                {language === 'fr'
                  ? 'Engagements par Axe Économique et Social'
                  : 'الالتزامات حسب المحاور الاقتصادية والاجتماعية'}
              </span>
              <span className="font-normal text-stone-600 font-serif text-[11px]">
                {language === 'ar' ? '6 محاور رسمية' : '6 rubriques officielles'}
              </span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {THEMATIC_AREAS.map((theme) => {
                const Icon = ICONS_MAP[theme.iconName] || TrendingUp;
                const themeData = party.themes[theme.id];

                return (
                  <div
                    key={theme.id}
                    className="p-4 border-2 border-stone-800 bg-[#faf7ee] shadow-[2px_2px_0px_#1c1917] space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 border-b border-stone-300 pb-2">
                        <Icon className="w-4 h-4 text-emerald-800" />
                        <h5 className="font-extrabold text-stone-950 text-sm font-newspaper-title">
                          {theme.shortLabel[language]}
                        </h5>
                      </div>

                      <p className="text-xs text-stone-800 font-serif leading-relaxed">
                        {themeData.summary[language]}
                      </p>

                      {/* Measures list */}
                      <ul className="space-y-1 text-xs pt-1">
                        {themeData.keyMeasures[language].map((m, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-stone-700 font-serif leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Indicator */}
                    <div className="pt-2 border-t border-stone-200">
                      <div className="text-[11px] text-stone-900 font-bold bg-[#eae3d2] p-2 border border-stone-400">
                        <span className="font-normal text-stone-700 font-serif">
                          {themeData.indicator.label[language]} :{' '}
                        </span>
                        <span className="font-mono">{themeData.indicator.value[language]}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#eae3d2] border-t-2 border-stone-800 p-4 flex items-center justify-between">
          <span className="text-xs font-bold font-serif text-stone-800 uppercase">
            {party.spectrumLabel[language]}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 border-2 border-stone-800 bg-stone-900 text-[#faf7ee] text-xs font-bold hover:bg-stone-800 transition-colors shadow-[1px_1px_0px_#1c1917] cursor-pointer"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
