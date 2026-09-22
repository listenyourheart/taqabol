import React, { useState } from 'react';
import { Party, Language } from '../types';
import { PARTIES } from '../data/parties';
import { TRANSLATIONS } from '../data/translations';
import { Compass, Sparkles, User, Vote } from 'lucide-react';

interface VisualSpectrumMatrixProps {
  language: Language;
  onOpenPartyModal?: (party: Party) => void;
}

export const VisualSpectrumMatrix: React.FC<VisualSpectrumMatrixProps> = ({
  language,
  onOpenPartyModal,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedParty, setSelectedParty] = useState<Party | null>(
    PARTIES.find((p) => p.id === 'rni') || PARTIES[0]
  );

  // Convert -5 to +5 range into 0% to 100% position on the visual grid
  // X: -5 (left) to +5 (right) => left: ((x + 5) / 10) * 100 %
  // Y: +5 (top) to -5 (bottom) => top: ((5 - y) / 10) * 100 %
  const getCoordinates = (econ: number, soc: number) => {
    // Invert X for RTL if needed or keep standard economic convention (Left = Left, Right = Right)
    const xPercent = Math.min(Math.max(((econ + 5) / 10) * 100, 8), 92);
    const yPercent = Math.min(Math.max(((5 - soc) / 10) * 100, 8), 92);
    return { xPercent, yPercent };
  };

  return (
    <div className="bg-[#faf7ee] border-2 border-stone-800 p-5 sm:p-7 shadow-[3px_3px_0px_#1c1917] space-y-6" id="visual-spectrum-matrix-card">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 border border-stone-800 bg-emerald-100 text-emerald-900 shadow-[1px_1px_0px_#1c1917]">
              <Compass className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-stone-950 font-newspaper-title">
                {t.spectrumMatrixTitle}
              </h3>
              <span className="newspaper-stamp text-[9px] px-1.5 py-0.2">
                {language === 'ar' ? 'رقعة الخريطة' : 'ÉCHIQUIER 2D'}
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-serif mt-1">
            {t.spectrumMatrixSubtitle}
          </p>
        </div>

        <div className="text-xs text-stone-700 bg-[#eae3d2] px-2.5 py-1 border border-stone-500 shadow-[1px_1px_0px_#78716c] font-medium">
          {language === 'fr'
            ? 'Cliquez sur un parti pour inspecter sa position'
            : 'اضغط على أي حزب للاطلاع على تموضعه'}
        </div>
      </div>

      {/* 2D Interactive Canvas Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* The 2D Matrix Grid */}
        <div className="lg:col-span-8">
          <div className="relative w-full aspect-square sm:aspect-4/3 max-h-[500px] bg-stone-50 rounded-2xl border-2 border-stone-200 overflow-hidden shadow-inner p-4 select-none">
            {/* 4 Quadrants Background Shading */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-40 pointer-events-none">
              <div className="bg-red-50/50 border-e border-b border-dashed border-stone-300 p-3">
                <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block">
                  {language === 'fr'
                    ? '1. Gauche Économique & Progressisme'
                    : '1. يسار اقتصادي وحداثة مجتمعية'}
                </span>
              </div>
              <div className="bg-blue-50/50 border-b border-dashed border-stone-300 p-3 text-end">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wider block">
                  {language === 'fr'
                    ? '2. Libéralisme Économique & Modernité'
                    : '2. ليبرالية اقتصادية وتحديث'}
                </span>
              </div>
              <div className="bg-pink-50/50 border-e border-dashed border-stone-300 p-3 self-end">
                <span className="text-[10px] font-bold text-pink-800 uppercase tracking-wider block">
                  {language === 'fr'
                    ? '3. Égalitarisme & Conservatisme Modéré'
                    : '3. تعادلية اجتماعية ومحافظة معتدلة'}
                </span>
              </div>
              <div className="bg-teal-50/50 p-3 self-end text-end">
                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block">
                  {language === 'fr'
                    ? '4. Orthodoxie & Conservatisme Moral'
                    : '4. محافظة أخلاقية وليبرالية مقننة'}
                </span>
              </div>
            </div>

            {/* Crosshair Axes */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-stone-300 -translate-x-1/2 pointer-events-none" />
            <div className="absolute inset-x-0 top-1/2 h-0.5 bg-stone-300 -translate-y-1/2 pointer-events-none" />

            {/* Axis Labels */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white/90 border border-stone-200 text-[10px] font-bold text-stone-700 shadow-xs z-10 pointer-events-none">
              ⬆️ {language === 'fr' ? 'Modernisme & Progressisme' : 'حداثة ومجتمع منفتح'}
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white/90 border border-stone-200 text-[10px] font-bold text-stone-700 shadow-xs z-10 pointer-events-none">
              ⬇️ {language === 'fr' ? 'Conservatisme & Tradition' : 'أصالة وهوية تقليدية'}
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-white/90 border border-stone-200 text-[10px] font-bold text-red-700 shadow-xs z-10 pointer-events-none max-w-[130px] text-center leading-tight">
              ⬅️ {language === 'fr' ? 'État Stratège & Social' : 'دولة اجتماعية متدخلة'}
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-white/90 border border-stone-200 text-[10px] font-bold text-blue-700 shadow-xs z-10 pointer-events-none max-w-[130px] text-center leading-tight">
              {language === 'fr' ? 'Marché Privé & Investissement' : 'حرية المبادرة والاستثمار'} ➡️
            </div>

            {/* Party Bubbles */}
            {PARTIES.map((party) => {
              const { xPercent, yPercent } = getCoordinates(
                party.metrics.economicSpectrumScore,
                party.metrics.societalSpectrumScore
              );
              const isSelected = selectedParty?.id === party.id;

              return (
                <button
                  key={party.id}
                  id={`matrix-bubble-${party.id}`}
                  onClick={() => setSelectedParty(party)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all group z-20 flex flex-col items-center cursor-pointer ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110 hover:z-25'
                  }`}
                  style={{
                    left: `${xPercent}%`,
                    top: `${yPercent}%`,
                  }}
                  title={party.name[language]}
                >
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-lg sm:text-xl shadow-md border-2 transition-all ${
                      isSelected
                        ? 'border-stone-900 bg-white ring-4 ring-emerald-400/40 shadow-lg'
                        : 'border-white bg-white/95 hover:border-stone-400'
                    }`}
                  >
                    {party.symbolIcon}
                  </div>
                  <span
                    className={`mt-1 px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold whitespace-nowrap shadow-xs ${
                      isSelected
                        ? 'bg-stone-900 text-white'
                        : 'bg-white/95 text-stone-800 border border-stone-200 group-hover:bg-stone-900 group-hover:text-white'
                    }`}
                  >
                    {party.acronym[language]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Party Profile Details Card */}
        <div className="lg:col-span-4 bg-stone-50 rounded-2xl border border-stone-200 p-5 space-y-4">
          {selectedParty ? (
            <>
              <div className="flex items-start justify-between gap-3 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{selectedParty.symbolIcon}</span>
                  <div>
                    <h4 className="font-bold text-stone-900 text-base sm:text-lg">
                      {selectedParty.acronym[language]}
                    </h4>
                    <span className="text-xs text-stone-500 font-medium">
                      {selectedParty.name[language]}
                    </span>
                  </div>
                </div>

                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${
                    selectedParty.position === 'majority'
                      ? 'bg-blue-50 text-blue-800 border-blue-200'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}
                >
                  {selectedParty.position === 'majority'
                    ? language === 'fr'
                      ? 'Majorité'
                      : 'أغلبية'
                    : language === 'fr'
                    ? 'Opposition'
                    : 'معارضة'}
                </span>
              </div>

              {/* Coordinates Badges */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[10px] font-bold uppercase">
                    {language === 'fr' ? 'Axe Économique' : 'المحور الاقتصادي'}
                  </span>
                  <span className="font-bold text-stone-800">
                    {selectedParty.metrics.economicSpectrumScore > 0
                      ? language === 'fr'
                        ? `Pro-Marché (+${selectedParty.metrics.economicSpectrumScore})`
                        : `سوق واستثمار (+${selectedParty.metrics.economicSpectrumScore})`
                      : language === 'fr'
                      ? `Étatiste / Social (${selectedParty.metrics.economicSpectrumScore})`
                      : `دولة متدخلة (${selectedParty.metrics.economicSpectrumScore})`}
                  </span>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-stone-200">
                  <span className="text-stone-400 block text-[10px] font-bold uppercase">
                    {language === 'fr' ? 'Axe Sociétal' : 'المحور المجتمعي'}
                  </span>
                  <span className="font-bold text-stone-800">
                    {selectedParty.metrics.societalSpectrumScore > 0
                      ? language === 'fr'
                        ? `Progressiste (+${selectedParty.metrics.societalSpectrumScore})`
                        : `تحديثي مجتمعي (+${selectedParty.metrics.societalSpectrumScore})`
                      : language === 'fr'
                      ? `Conservateur (${selectedParty.metrics.societalSpectrumScore})`
                      : `محافظ تقليدي (${selectedParty.metrics.societalSpectrumScore})`}
                  </span>
                </div>
              </div>

              {/* Leader & Seats */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span className="font-semibold">{selectedParty.currentLeader[language]}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Vote className="w-3.5 h-3.5 text-stone-400" />
                  <span>
                    {selectedParty.parliamentSeats2021} {language === 'fr' ? 'sièges' : 'مقاعد'}
                  </span>
                </div>
              </div>

              {/* Core Philosophy */}
              <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  {t.philosophicalOrientation}
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {selectedParty.generalPhilosophy[language]}
                </p>
              </div>

              {/* Key Differentiator */}
              <div className="flex items-start gap-2 text-xs p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="leading-snug">{selectedParty.coreDifferentiator[language]}</p>
              </div>

              {onOpenPartyModal && (
                <button
                  onClick={() => onOpenPartyModal(selectedParty)}
                  className="w-full py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors"
                >
                  {t.viewPartyDetails}
                </button>
              )}
            </>
          ) : (
            <div className="text-center py-10 text-stone-400 text-xs">
              {language === 'fr'
                ? 'Sélectionnez un parti sur la grille pour voir sa fiche.'
                : 'حدد حزباً على الرقعة لعرض تفاصيله.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
