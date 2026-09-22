import React, { useState } from 'react';
import { Party, Language, PoliticalPosition } from '../types';
import { PARTIES } from '../data/parties';
import { TRANSLATIONS } from '../data/translations';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

interface VisualGaugesMatrixProps {
  language: Language;
  onOpenPartyModal?: (party: Party) => void;
}

export const VisualGaugesMatrix: React.FC<VisualGaugesMatrixProps> = ({
  language,
  onOpenPartyModal,
}) => {
  const t = TRANSLATIONS[language];
  const [filterPos, setFilterPos] = useState<'all' | PoliticalPosition>('all');
  const [sortBy, setSortBy] = useState<keyof Party['metrics']>('stateVsMarket');

  const filtered = PARTIES.filter((p) => filterPos === 'all' || p.position === filterPos)
    .sort((a, b) => (b.metrics[sortBy] as number) - (a.metrics[sortBy] as number));

  const renderGauge = (val: number, colorClass: string) => {
    const percentage = (val / 10) * 100;
    return (
      <div className="flex items-center gap-2">
        <div className="w-16 sm:w-20 bg-stone-200/80 rounded-full h-2 overflow-hidden shrink-0">
          <div
            className={`h-full rounded-full ${colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs font-bold text-stone-700 w-5 text-end">{val}</span>
      </div>
    );
  };

  return (
    <div className="bg-[#faf7ee] border-2 border-stone-800 p-5 sm:p-7 shadow-[3px_3px_0px_#1c1917] space-y-5" id="visual-gauges-matrix-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 border border-stone-800 bg-emerald-100 text-emerald-900 shadow-[1px_1px_0px_#1c1917]">
              <SlidersHorizontal className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-stone-950 font-newspaper-title">
                {t.gaugesTitle}
              </h3>
              <span className="newspaper-stamp text-[9px] px-1.5 py-0.2">
                {language === 'ar' ? 'لوحة المقاييس' : 'CADRAN'}
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-serif mt-1">
            {language === 'fr'
              ? 'Baromètre synthétique par jauges (1 à 10) pour visualiser d’un coup d’œil les orientations.'
              : 'بارومتر بياني بالمقاييس البصرية (من 1 إلى 10) لتلمّس الفوارق والخيارات الجوهرية بسرعة.'}
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center bg-[#eae3d2] p-0.5 border border-stone-500 shadow-[1px_1px_0px_#78716c] text-xs font-bold">
          <button
            onClick={() => setFilterPos('all')}
            className={`px-3 py-1 transition-all cursor-pointer ${
              filterPos === 'all'
                ? 'bg-stone-900 text-[#faf7ee]'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            {t.filterAll}
          </button>
          <button
            onClick={() => setFilterPos('majority')}
            className={`px-3 py-1 transition-all cursor-pointer ${
              filterPos === 'majority'
                ? 'bg-stone-900 text-[#faf7ee]'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            {t.filterMajority}
          </button>
          <button
            onClick={() => setFilterPos('opposition')}
            className={`px-3 py-1 transition-all cursor-pointer ${
              filterPos === 'opposition'
                ? 'bg-stone-900 text-[#faf7ee]'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            {t.filterOpposition}
          </button>
        </div>
      </div>

      {/* Responsive Table of Gauges */}
      <div className="overflow-x-auto">
        <table className="w-full text-start text-xs border-collapse">
          <thead>
            <tr className="border-b border-stone-200 text-stone-500 uppercase tracking-wider text-[10px] bg-stone-50/70">
              <th className="py-3 px-3 text-start font-bold">Parti</th>
              <th
                onClick={() => setSortBy('stateVsMarket')}
                className="py-3 px-3 text-start font-bold cursor-pointer hover:text-stone-900"
              >
                <div className="flex items-center gap-1">
                  <span>{t.stateRole}</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => setSortBy('socialSpending')}
                className="py-3 px-3 text-start font-bold cursor-pointer hover:text-stone-900"
              >
                <div className="flex items-center gap-1">
                  <span>{t.socialPriority}</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => setSortBy('taxProgressivity')}
                className="py-3 px-3 text-start font-bold cursor-pointer hover:text-stone-900"
              >
                <div className="flex items-center gap-1">
                  <span>{t.fiscalJustice}</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => setSortBy('ruralPriority')}
                className="py-3 px-3 text-start font-bold cursor-pointer hover:text-stone-900"
              >
                <div className="flex items-center gap-1">
                  <span>{t.ruralFocus}</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => setSortBy('priceRegulation')}
                className="py-3 px-3 text-start font-bold cursor-pointer hover:text-stone-900"
              >
                <div className="flex items-center gap-1">
                  <span>{t.priceControl}</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th
                onClick={() => setSortBy('climateSobriety')}
                className="py-3 px-3 text-start font-bold cursor-pointer hover:text-stone-900"
              >
                <div className="flex items-center gap-1">
                  <span>{t.climateTransition}</span>
                  <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filtered.map((party) => (
              <tr
                key={party.id}
                className="hover:bg-stone-50/90 transition-colors cursor-pointer"
                onClick={() => onOpenPartyModal && onOpenPartyModal(party)}
              >
                {/* Party Identifier */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{party.symbolIcon}</span>
                    <div>
                      <span className="font-bold text-stone-900 block">
                        {party.acronym[language]}
                      </span>
                      <span className="text-[10px] text-stone-500 font-normal">
                        {party.parliamentSeats2021} sièges
                      </span>
                    </div>
                  </div>
                </td>

                {/* 1. État vs Marché */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {renderGauge(party.metrics.stateVsMarket, 'bg-blue-600')}
                </td>

                {/* 2. Dépenses Sociales */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {renderGauge(party.metrics.socialSpending, 'bg-rose-600')}
                </td>

                {/* 3. Justice Fiscale */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {renderGauge(party.metrics.taxProgressivity, 'bg-purple-600')}
                </td>

                {/* 4. Priorité Rurale */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {renderGauge(party.metrics.ruralPriority, 'bg-emerald-600')}
                </td>

                {/* 5. Blocage Prix */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {renderGauge(party.metrics.priceRegulation, 'bg-amber-600')}
                </td>

                {/* 6. Eau & Climat */}
                <td className="py-3 px-3 whitespace-nowrap">
                  {renderGauge(party.metrics.climateSobriety, 'bg-teal-600')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
