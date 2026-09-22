import React, { useState } from 'react';
import { Party, ThemeId, Language } from '../types';
import { PARTIES } from '../data/parties';
import { THEMATIC_AREAS } from '../data/themes';
import { TRANSLATIONS } from '../data/translations';
import { ThemeSelector } from './ThemeSelector';
import { AiDisclaimerBanner } from './AiDisclaimerBanner';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from 'recharts';
import {
  Check,
  Plus,
  X,
  Sparkles,
  ListFilter,
  ArrowRightLeft,
  ChevronDown,
  Info,
  BarChart2,
  Eye,
  EyeOff,
  Coins,
} from 'lucide-react';

const PARTY_COLORS: Record<string, { stroke: string; fill: string }> = {
  rni: { stroke: '#2563EB', fill: '#3B82F6' },
  pam: { stroke: '#D97706', fill: '#F59E0B' },
  istiqlal: { stroke: '#DB2777', fill: '#EC4899' },
  usfp: { stroke: '#DC2626', fill: '#EF4444' },
  mp: { stroke: '#059669', fill: '#10B981' },
  pps: { stroke: '#4F46E5', fill: '#6366F1' },
  pjd: { stroke: '#0D9488', fill: '#14B8A6' },
  psu: { stroke: '#9333EA', fill: '#A855F7' },
};

interface ComparatorViewProps {
  language: Language;
  onOpenPartyModal: (party: Party) => void;
}

export const ComparatorView: React.FC<ComparatorViewProps> = ({
  language,
  onOpenPartyModal,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedPartyIds, setSelectedPartyIds] = useState<string[]>([
    'rni',
    'istiqlal',
    'usfp',
  ]);
  const [selectedTheme, setSelectedTheme] = useState<ThemeId | 'all'>('all');
  const [detailedView, setDetailedView] = useState<boolean>(false);
  const [showVisualRadar, setShowVisualRadar] = useState<boolean>(true);

  const radarDimensions = [
    { key: 'stateVsMarket', labelFr: 'Rôle de l’État', labelAr: 'تدخل الدولة' },
    { key: 'socialSpending', labelFr: 'Dépenses Sociales', labelAr: 'الإنفاق الاجتماعي' },
    { key: 'taxProgressivity', labelFr: 'Justice Fiscale', labelAr: 'العدالة الجبائية' },
    { key: 'ruralPriority', labelFr: 'Priorité Rurale', labelAr: 'الإنصاف القروي' },
    { key: 'priceRegulation', labelFr: 'Blocage Prix', labelAr: 'تسقيف الأسعار' },
    { key: 'climateSobriety', labelFr: 'Sobriété Eau', labelAr: 'الحفاظ المائي' },
  ];

  const radarChartData = radarDimensions.map((dim) => {
    const entry: Record<string, string | number> = {
      dimension: language === 'fr' ? dim.labelFr : dim.labelAr,
    };
    selectedParties.forEach((p) => {
      entry[p.acronym[language]] = (p.metrics as unknown as Record<string, number>)[dim.key] ?? 5;
    });
    return entry;
  });

  const toggleParty = (partyId: string) => {
    if (selectedPartyIds.includes(partyId)) {
      if (selectedPartyIds.length <= 2) {
        return; // Keep at least 2 parties for comparison
      }
      setSelectedPartyIds(selectedPartyIds.filter((id) => id !== partyId));
    } else {
      if (selectedPartyIds.length >= 3) {
        // Replace last one or alert max 3
        const updated = [selectedPartyIds[1], selectedPartyIds[2], partyId];
        setSelectedPartyIds(updated);
      } else {
        setSelectedPartyIds([...selectedPartyIds, partyId]);
      }
    }
  };

  const selectedParties = PARTIES.filter((p) => selectedPartyIds.includes(p.id));

  const themesToDisplay =
    selectedTheme === 'all'
      ? THEMATIC_AREAS
      : THEMATIC_AREAS.filter((t) => t.id === selectedTheme);

  return (
    <div className="space-y-6" id="comparator-view-root">
      {/* AI Transparency Banner */}
      <AiDisclaimerBanner language={language} />

      {/* Party Selection Toolbar */}
      <div className="bg-[#faf7ee] border-2 border-stone-800 p-5 shadow-[3px_3px_0px_#1c1917]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b-2 border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-extrabold text-stone-950 font-newspaper-title flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-emerald-700" />
                <span>{t.selectPartiesToCompare}</span>
              </h2>
              <span className="newspaper-stamp text-[9px] px-1.5 py-0.2">
                {language === 'ar' ? 'منضدة المقارنة' : 'COMPARATEUR'}
              </span>
            </div>
            <p className="text-xs text-stone-600 font-serif mt-0.5">
              {t.maxPartiesWarning}
            </p>
          </div>

          {/* Quick toggle detailed vs simplified */}
          <div className="flex items-center gap-1 bg-[#eae3d2] p-0.5 border border-stone-500 shadow-[1px_1px_0px_#78716c] self-start md:self-auto">
            <button
              id="toggle-summary-view-btn"
              onClick={() => setDetailedView(false)}
              className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                !detailedView
                  ? 'bg-stone-900 text-[#faf7ee]'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              ⚡ {t.simplifiedSummary}
            </button>
            <button
              id="toggle-detailed-view-btn"
              onClick={() => setDetailedView(true)}
              className={`px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                detailedView
                  ? 'bg-stone-900 text-[#faf7ee]'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              📋 {t.detailedMeasures}
            </button>
          </div>
        </div>

        {/* Party Chips Selector */}
        <div className="pt-4 flex flex-wrap gap-2 items-center" id="party-chips-selector">
          {PARTIES.map((party) => {
            const isSelected = selectedPartyIds.includes(party.id);
            return (
              <button
                key={party.id}
                id={`select-party-${party.id}`}
                onClick={() => toggleParty(party.id)}
                className={`group flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-[#faf7ee] border-stone-900 shadow-[2px_2px_0px_#1c1917]'
                    : 'bg-[#faf7ee] text-stone-800 border-stone-400 hover:bg-[#f2ecdc] shadow-[1px_1px_0px_#78716c]'
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-base">{party.symbolIcon}</span>
                <span>{party.acronym[language]}</span>
                <span className="text-[11px] opacity-75 hidden sm:inline font-serif">
                  ({party.position === 'majority' ? (language === 'fr' ? 'Majorité' : 'أغلبية') : (language === 'fr' ? 'Opposition' : 'معارضة')})
                </span>
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thematic Area Filter Pills */}
      <div className="bg-[#faf7ee] border-2 border-stone-800 p-4 shadow-[3px_3px_0px_#1c1917]">
        <div className="flex items-center justify-between mb-3 border-b border-stone-300 pb-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-stone-800 flex items-center gap-1.5 font-newspaper-title">
            <ListFilter className="w-3.5 h-3.5 text-emerald-700" />
            {t.selectTheme}
          </span>
          <span className="text-xs text-stone-600 font-serif">
            {selectedParties.length} {t.selectedPartiesCount}
          </span>
        </div>
        <ThemeSelector
          selectedTheme={selectedTheme}
          onSelectTheme={setSelectedTheme}
          language={language}
          allowAll={true}
        />
      </div>

      {/* Visual Priority Bars Card of Selected Parties */}
      <div className="bg-[#faf7ee] border-2 border-stone-800 p-5 shadow-[3px_3px_0px_#1c1917] space-y-4" id="comparator-radar-block">
        <div className="flex items-center justify-between border-b border-stone-300 pb-2">
          <div className="flex items-center gap-2">
            <span className="p-1 border border-stone-800 bg-emerald-100 text-emerald-900 shadow-[1px_1px_0px_#1c1917]">
              <BarChart2 className="w-4 h-4" />
            </span>
            <h3 className="text-sm sm:text-base font-extrabold text-stone-950 font-newspaper-title">
              {language === 'fr'
                ? 'Comparatif Visuel des Priorités (Barres 1 à 10)'
                : 'المقارنة البصرية للأولويات (أعمدة بيانية من 1 إلى 10)'}
            </h3>
          </div>

          <button
            onClick={() => setShowVisualRadar(!showVisualRadar)}
            className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-900 font-semibold"
          >
            {showVisualRadar ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? 'Masquer le graphe' : 'إخفاء الرسم'}</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? 'Afficher le graphe' : 'إظهار الرسم'}</span>
              </>
            )}
          </button>
        </div>

        {showVisualRadar && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-2">
            <div className="md:col-span-8 h-64 sm:h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={radarChartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" vertical={false} />
                  <XAxis
                    dataKey="dimension"
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#44403c' }}
                    interval={0}
                  />
                  <YAxis
                    domain={[0, 10]}
                    ticks={[0, 2, 4, 6, 8, 10]}
                    tick={{ fontSize: 10, fill: '#78716c' }}
                  />
                  <RechartsTooltip
                    formatter={(val: any) => [`${val} / 10`, '']}
                    contentStyle={{
                      backgroundColor: '#1c1917',
                      color: '#fff',
                      borderRadius: '10px',
                      fontSize: '11px',
                      border: 'none',
                    }}
                  />
                  <RechartsLegend wrapperStyle={{ fontSize: '11px', fontWeight: 600 }} />
                  {selectedParties.map((party) => {
                    const colors = PARTY_COLORS[party.id] || { stroke: '#059669', fill: '#10B981' };
                    return (
                      <Bar
                        key={party.id}
                        dataKey={party.acronym[language]}
                        name={party.acronym[language]}
                        fill={colors.stroke}
                        radius={[4, 4, 0, 0]}
                      />
                    );
                  })}
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Quick Metrics of the Selected Parties */}
            <div className="md:col-span-4 space-y-2 text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                {language === 'fr' ? 'Engagements financiers clés' : 'المؤشرات المالية الرئيسية'}
              </span>
              {selectedParties.map((party) => (
                <div
                  key={party.id}
                  className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1"
                >
                  <div className="flex items-center justify-between font-bold text-stone-900">
                    <span className="flex items-center gap-1.5">
                      <span>{party.symbolIcon}</span>
                      <span>{party.acronym[language]}</span>
                    </span>
                    <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">
                      SMIG : {party.metrics.targetSmigMAD} DH
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span>
                      {language === 'fr' ? 'Santé' : 'صحة'}: {party.metrics.targetHealthBudgetPercent}%
                    </span>
                    <span>
                      {language === 'fr' ? 'Éducation' : 'تعليم'}: {party.metrics.targetEducationBudgetPercent}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comparison Grid */}
      <div className="space-y-8" id="comparison-results-grid">
        {themesToDisplay.map((theme) => (
          <section
            key={theme.id}
            id={`compare-theme-${theme.id}`}
            className="bg-[#faf7ee] border-2 border-stone-800 overflow-hidden shadow-[3px_3px_0px_#1c1917]"
          >
            {/* Theme Section Header */}
            <div className="bg-[#1c1917] text-[#faf6ec] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-stone-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                    {theme.shortLabel[language]}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold font-newspaper-title text-white">
                    {theme.label[language]}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-serif mt-1">
                  <span className="font-semibold text-amber-300">
                    {t.keyQuestionTitle}{' '}
                  </span>
                  {theme.keyQuestion[language]}
                </p>
              </div>
            </div>

            {/* Side-by-Side Columns for Selected Parties */}
            <div
              className={`grid grid-cols-1 ${
                selectedParties.length === 2
                  ? 'md:grid-cols-2 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-stone-300'
                  : 'lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-stone-300'
              }`}
            >
              {selectedParties.map((party) => {
                const partyTheme = party.themes[theme.id];
                const isMajority = party.position === 'majority';

                return (
                  <div
                    key={`${theme.id}-${party.id}`}
                    id={`col-${theme.id}-${party.id}`}
                    className="p-5 flex flex-col justify-between space-y-4 hover:bg-stone-50/40 transition-colors"
                  >
                    {/* Party Header Banner inside column */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{party.symbolIcon}</span>
                          <div>
                            <h4 className="font-bold text-stone-900 text-base leading-tight">
                              {party.name[language]}
                            </h4>
                            <span className="text-xs font-semibold text-stone-500">
                              {party.acronym[language]}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${
                            isMajority
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}
                        >
                          {isMajority
                            ? language === 'fr'
                              ? 'Majorité'
                              : 'أغلبية'
                            : language === 'fr'
                            ? 'Opposition'
                            : 'معارضة'}
                        </span>
                      </div>

                      {/* Spectrum Tag */}
                      <div className="inline-block text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 font-medium">
                        {party.spectrumLabel[language]}
                      </div>

                      {/* Key Indicator Highlight */}
                      <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs">
                        <div className="font-bold uppercase tracking-wide text-[10px] text-emerald-700">
                          {partyTheme.indicator.label[language]}
                        </div>
                        <div className="font-bold text-xs mt-0.5">
                          {partyTheme.indicator.value[language]}
                        </div>
                      </div>
                    </div>

                    {/* Philosophical Position */}
                    <div className="space-y-1.5 text-xs">
                      <span className="font-bold uppercase tracking-wider text-stone-400 text-[10px]">
                        {t.philosophicalOrientation}
                      </span>
                      <p className="text-stone-700 italic bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        « {partyTheme.philosophicalStance[language]} »
                      </p>
                    </div>

                    {/* Summary or Detailed Proposals */}
                    <div className="space-y-2 text-xs flex-1">
                      <span className="font-bold uppercase tracking-wider text-stone-400 text-[10px]">
                        {detailedView ? t.detailedMeasures : t.quickTakeaway}
                      </span>

                      {!detailedView ? (
                        <p className="text-stone-800 leading-relaxed font-medium">
                          {partyTheme.summary[language]}
                        </p>
                      ) : (
                        <ul className="space-y-2 mt-1">
                          {partyTheme.keyMeasures[language].map(
                            (measure, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-stone-700 leading-snug"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                                <span>{measure}</span>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>

                    {/* Button to view full party dossier */}
                    <div className="pt-2 border-t border-stone-100">
                      <button
                        onClick={() => onOpenPartyModal(party)}
                        className="text-xs text-emerald-700 font-semibold hover:text-emerald-800 hover:underline flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>{t.viewPartyDetails}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
