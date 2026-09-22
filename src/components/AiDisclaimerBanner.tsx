import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Sparkles, Info, ChevronDown, ChevronUp, ShieldCheck, ExternalLink } from 'lucide-react';

interface AiDisclaimerBannerProps {
  language: Language;
}

export const AiDisclaimerBanner: React.FC<AiDisclaimerBannerProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      id="ai-disclaimer-banner"
      className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 border border-amber-300/40 rounded-2xl p-3.5 sm:p-4 text-xs transition-all shadow-2xs"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2.5">
          <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-800 shrink-0 font-bold flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              {t.aiDisclaimerBadge}
            </span>
          </span>
          <p className="text-stone-700 leading-relaxed font-medium">
            {t.aiDisclaimerShort}
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-end sm:self-center flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold shrink-0 hover:underline cursor-pointer"
        >
          <span>
            {language === 'fr'
              ? expanded
                ? 'Réduire la note'
                : 'En savoir plus sur la méthode IA'
              : expanded
              ? 'إخفاء التفاصيل'
              : 'تفاصيل منهجية الذكاء الاصطناعي'}
          </span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-amber-200/50 text-stone-600 space-y-2 leading-relaxed text-[12px] bg-white/60 p-3 rounded-xl">
          <div className="flex items-center gap-1.5 text-stone-900 font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {language === 'fr'
                ? 'Engagement de neutralité et traçabilité algorithmique'
                : 'التزام بالحياد والموضوعية في المعالجة الآلية'}
            </span>
          </div>
          <p>{t.aiDisclaimerNotice}</p>
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-500 pt-1">
            <span>
              {language === 'fr'
                ? '• Corpus source : Programmes électoraux légaux 2021 déposés auprès du Ministère de l’Intérieur'
                : '• مصادر المعطيات: البرامج الانتخابية التشريعية الرسمية لسنة 2021 المودعة لدى الجهات المختصة'}
            </span>
            <span>
              {language === 'fr'
                ? '• Outil civique indépendant à vocation éducative'
                : '• أداة مواطنة مستقلة ذات هدف تثقيفي وتعليمي'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
