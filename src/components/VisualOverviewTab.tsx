import React from 'react';
import { Party, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { NewspaperEditorialBox } from './NewspaperEditorialBox';
import { VisualPriorityBarsChart } from './VisualPriorityBarsChart';
import { VisualSpectrumMatrix } from './VisualSpectrumMatrix';
import { VisualBenchmarksChart } from './VisualBenchmarksChart';
import { VisualGaugesMatrix } from './VisualGaugesMatrix';
import { AiDisclaimerBanner } from './AiDisclaimerBanner';
import {
  Sparkles,
  BarChart2,
  TrendingUp,
  Sliders,
  ArrowRight,
  Newspaper,
} from 'lucide-react';

interface VisualOverviewTabProps {
  language: Language;
  onOpenPartyModal: (party: Party) => void;
  onNavigateToCompare: () => void;
}

export const VisualOverviewTab: React.FC<VisualOverviewTabProps> = ({
  language,
  onOpenPartyModal,
  onNavigateToCompare,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <div className="space-y-6" id="visual-overview-tab-root">
      {/* AI Generation Transparency Disclaimer */}
      <AiDisclaimerBanner language={language} />

      {/* Front-Page Editorial Column */}
      <NewspaperEditorialBox language={language} />

      {/* Visual Hero Banner styled as Newspaper Front Section */}
      <div className="bg-[#1c1917] text-[#faf6ec] border-2 border-stone-900 p-6 sm:p-7 shadow-[3px_3px_0px_#1c1917] space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
              <Newspaper className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Le Dossier Graphique' : 'الملحق البياني المصور'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-newspaper-title">
              {t.visualHeadline}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-serif">
              {t.visualSubtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <button
              onClick={onNavigateToCompare}
              className="px-4 py-2 border-2 border-stone-200 bg-[#faf6ec] text-stone-950 text-xs font-bold hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#78716c] cursor-pointer"
            >
              <span>{language === 'fr' ? 'Consulter les textes intégraux' : 'الانتقال إلى النصوص الكاملة'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Quick Visual Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-700 text-xs">
          <div className="flex items-center gap-3 bg-stone-900/90 p-2.5 border border-stone-700">
            <span className="p-1.5 bg-blue-900/60 text-blue-300 border border-blue-700">
              <BarChart2 className="w-4 h-4" />
            </span>
            <div>
              <span className="font-bold text-white block">
                {language === 'fr' ? 'Barres Comparatives' : 'أعمدة بيانية مباشرة'}
              </span>
              <span className="text-stone-400 text-[11px]">
                {language === 'fr' ? 'Priorités de 1 à 10' : 'سلم الأولويات من 1 إلى 10'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-stone-900/90 p-2.5 border border-stone-700">
            <span className="p-1.5 bg-emerald-900/60 text-emerald-300 border border-emerald-700">
              <TrendingUp className="w-4 h-4" />
            </span>
            <div>
              <span className="font-bold text-white block">
                {language === 'fr' ? 'Échiquier 2D' : 'الرقعة ثنائية الأبعاد'}
              </span>
              <span className="text-stone-400 text-[11px]">
                {language === 'fr' ? 'Marché vs État' : 'السوق والدولة'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-stone-900/90 p-2.5 border border-stone-700">
            <span className="p-1.5 bg-purple-900/60 text-purple-300 border border-purple-700">
              <Sliders className="w-4 h-4" />
            </span>
            <div>
              <span className="font-bold text-white block">
                {language === 'fr' ? 'Repères Chiffrés' : 'مؤشرات رقمية دقيقة'}
              </span>
              <span className="text-stone-400 text-[11px]">
                {language === 'fr' ? 'SMIG & Budgets' : 'الحد الأدنى والميزانيات'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Module 1: Simple & Readable Priority Bar Chart */}
      <VisualPriorityBarsChart
        language={language}
        onOpenPartyModal={onOpenPartyModal}
      />

      {/* Module 2: 2D Political & Economic Matrix */}
      <VisualSpectrumMatrix
        language={language}
        onOpenPartyModal={onOpenPartyModal}
      />

      {/* Module 3: Quantitative Bar Charts (SMIG, Budgets, Sièges) */}
      <VisualBenchmarksChart language={language} />

      {/* Module 4: Visual Gauges Scorecard */}
      <VisualGaugesMatrix
        language={language}
        onOpenPartyModal={onOpenPartyModal}
      />
    </div>
  );
};
