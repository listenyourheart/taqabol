import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Party, Language } from '../types';
import { PARTIES } from '../data/parties';
import { TRANSLATIONS } from '../data/translations';
import {
  BarChart3,
  Sliders,
  Check,
  Plus,
  Info,
  Layers,
  Sparkles,
  ArrowRightLeft,
} from 'lucide-react';

interface VisualPriorityBarsChartProps {
  language: Language;
  onOpenPartyModal?: (party: Party) => void;
}

const PARTY_COLORS: Record<string, { main: string; light: string; border: string }> = {
  rni: { main: '#2563EB', light: '#EFF6FF', border: '#93C5FD' }, // Blue
  pam: { main: '#D97706', light: '#FFFBEB', border: '#FCD34D' }, // Amber
  istiqlal: { main: '#DB2777', light: '#FDF2F8', border: '#F9A8D4' }, // Pink
  usfp: { main: '#DC2626', light: '#FEF2F2', border: '#FCA5A5' }, // Red
  mp: { main: '#059669', light: '#ECFDF5', border: '#6EE7B7' }, // Emerald
  pps: { main: '#4F46E5', light: '#EEF2FF', border: '#A5B4FC' }, // Indigo
  pjd: { main: '#0D9488', light: '#F0FDFA', border: '#5EEAD4' }, // Teal
  psu: { main: '#9333EA', light: '#FAF5FF', border: '#D8B4FE' }, // Purple
};

export const VisualPriorityBarsChart: React.FC<VisualPriorityBarsChartProps> = ({
  language,
  onOpenPartyModal,
}) => {
  const t = TRANSLATIONS[language];

  // Selected parties (default: 3 parties representing majority & opposition)
  const [selectedPartyIds, setSelectedPartyIds] = useState<string[]>([
    'rni',
    'istiqlal',
    'usfp',
  ]);

  // View mode: 'grouped' (Bar chart by pillar) or 'cards' (Horizontal gauge meters per pillar)
  const [viewMode, setViewMode] = useState<'grouped' | 'cards'>('grouped');

  // Toggle party selection
  const toggleParty = (partyId: string) => {
    if (selectedPartyIds.includes(partyId)) {
      if (selectedPartyIds.length <= 1) return; // Keep at least one
      setSelectedPartyIds(selectedPartyIds.filter((id) => id !== partyId));
    } else {
      if (selectedPartyIds.length >= 4) {
        // Replace first
        setSelectedPartyIds([...selectedPartyIds.slice(1), partyId]);
      } else {
        setSelectedPartyIds([...selectedPartyIds, partyId]);
      }
    }
  };

  // Quick preset filters
  const applyPreset = (preset: 'majority' | 'opposition' | 'left_right') => {
    if (preset === 'majority') {
      setSelectedPartyIds(['rni', 'pam', 'istiqlal']);
    } else if (preset === 'opposition') {
      setSelectedPartyIds(['usfp', 'mp', 'pps', 'pjd']);
    } else if (preset === 'left_right') {
      setSelectedPartyIds(['rni', 'usfp', 'psu']);
    }
  };

  // The 6 strategic dimensions with bilingual labels and scale definitions
  const dimensions = [
    {
      key: 'stateVsMarket' as const,
      labelFr: 'Rôle de l’État',
      labelAr: 'تدخل الدولة',
      icon: '🏛️',
      lowFr: 'Marché libre & Investissement privé',
      highFr: 'État fort & Redistribution publique',
      lowAr: 'تحرير السوق والاستثمار الخاص',
      highAr: 'دولة اجتماعية قوية وتدخلية',
    },
    {
      key: 'socialSpending' as const,
      labelFr: 'Dépenses Sociales',
      labelAr: 'الإنفاق الاجتماعي',
      icon: '🤝',
      lowFr: 'Équilibre budgétaire rigoureux',
      highFr: 'Priorité absolue santé & éducation',
      lowAr: 'توازنات مالية وحذر ميزانياتي',
      highAr: 'أولوية قصوى للصحة والتعليم',
    },
    {
      key: 'taxProgressivity' as const,
      labelFr: 'Justice Fiscale',
      labelAr: 'العدالة الجبائية',
      icon: '⚖️',
      lowFr: 'Baisse d’impôts & Attractivité capital',
      highFr: 'Impôt sur la fortune & Taxation superprofits',
      lowAr: 'تخفيض الضرائب وجذب رؤوس الأموال',
      highAr: 'ضريبة على الثروة والأرباح الفاحشة',
    },
    {
      key: 'ruralPriority' as const,
      labelFr: 'Monde Rural & Montagne',
      labelAr: 'الإنصاف القروي والجبلي',
      icon: '🌾',
      lowFr: 'Métropoles & Pôles industriels',
      highFr: 'Zones enclavées, désenclavement & oasis',
      lowAr: 'تركيز على الحواضر والأقطاب الصناعية',
      highAr: 'أولوية فك العزلة عن القرى والواحات',
    },
    {
      key: 'priceRegulation' as const,
      labelFr: 'Plafonnement des Prix',
      labelAr: 'تسقيف الأسعار والمحروقات',
      icon: '🏷️',
      lowFr: 'Liberté totale des prix et marges',
      highFr: 'Blocage strict des marges des carburants',
      lowAr: 'حرية الأسعار والمنافسة الحرة',
      highAr: 'تسقيف هوامش أرباح المحروقات والمواد الأساسية',
    },
    {
      key: 'climateSobriety' as const,
      labelFr: 'Sobriété Eau & Climat',
      labelAr: 'الحفاظ المائي والبيئي',
      icon: '💧',
      lowFr: 'Agrobusiness exportateur intensif',
      highFr: 'Rupture écologique & Priorité eau potable',
      lowAr: 'أولوية الفلاحة التصديرية الكبرى',
      highAr: 'حظر الزراعات المستنزفة للماء وأولوية الشرب',
    },
  ];

  const activeParties = PARTIES.filter((p) => selectedPartyIds.includes(p.id));

  // Transform data for grouped Bar Chart
  const chartData = dimensions.map((dim) => {
    const entry: Record<string, string | number> = {
      dimension: language === 'fr' ? dim.labelFr : dim.labelAr,
      dimKey: dim.key,
      icon: dim.icon,
    };
    activeParties.forEach((p) => {
      entry[p.acronym[language]] = p.metrics[dim.key];
    });
    return entry;
  });

  return (
    <div
      className="bg-[#faf7ee] border-2 border-stone-800 p-5 sm:p-7 shadow-[3px_3px_0px_#1c1917] space-y-6"
      id="visual-priority-bars-card"
    >
      {/* Header and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-stone-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 border border-stone-800 bg-emerald-100 text-emerald-900 shadow-[1px_1px_0px_#1c1917]">
              <BarChart3 className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-extrabold text-stone-950 font-newspaper-title">
                {t.priorityBarsTitle}
              </h3>
              <span className="newspaper-stamp text-[9px] px-1.5 py-0.2">
                {language === 'ar' ? 'مقارنة مباشرة' : 'BAROMÈTRE'}
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-serif">
            {t.priorityBarsSubtitle}
          </p>
        </div>

        {/* View Mode Toggle & Presets */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center bg-[#eae3d2] p-0.5 border border-stone-500 shadow-[1px_1px_0px_#78716c]">
            <button
              onClick={() => setViewMode('grouped')}
              className={`px-3 py-1 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'grouped'
                  ? 'bg-stone-900 text-[#faf7ee]'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Graphe par Pilier' : 'أعمدة بيانية حسب المحور'}</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1 font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-stone-900 text-[#faf7ee]'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Jauges Détaillées' : 'مقاييس بصرية مفصلة'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Party Selection Chips & Quick Presets */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-stone-700">
            {language === 'fr'
              ? 'Choisissez les partis à comparer (1 à 4) :'
              : 'اختر الأحزاب المراد مقارنتها (من 1 إلى 4) :'}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-stone-400 text-[11px]">
              {language === 'fr' ? 'Préréglages :' : 'خيارات سريعة:'}
            </span>
            <button
              onClick={() => applyPreset('majority')}
              className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold"
            >
              {language === 'fr' ? 'Majorité' : 'الأغلبية'}
            </button>
            <button
              onClick={() => applyPreset('opposition')}
              className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 hover:bg-amber-100 font-semibold"
            >
              {language === 'fr' ? 'Opposition' : 'المعارضة'}
            </button>
            <button
              onClick={() => applyPreset('left_right')}
              className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 hover:bg-purple-100 font-semibold"
            >
              {language === 'fr' ? 'Droite / Gauche' : 'يمين / يسار'}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {PARTIES.map((party) => {
            const isSelected = selectedPartyIds.includes(party.id);
            const colors = PARTY_COLORS[party.id] || { main: '#059669', light: '#ECFDF5', border: '#6EE7B7' };
            return (
              <button
                key={party.id}
                onClick={() => toggleParty(party.id)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'text-stone-900 shadow-xs ring-2'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 opacity-60'
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: colors.light,
                        borderColor: colors.main,
                        color: colors.main,
                      }
                    : {}
                }
              >
                <span>{party.symbolIcon}</span>
                <span>{party.acronym[language]}</span>
                {isSelected ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* VIEW 1: Grouped Bar Chart */}
      {viewMode === 'grouped' && (
        <div className="space-y-4 pt-2" id="grouped-bars-chart-container">
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-stone-600 font-medium">
              💡 {language === 'fr'
                ? 'Lecture directe : Plus la barre est haute (max 10), plus la priorité ou l’intervention étatique est forte.'
                : 'قراءة مباشرة: كلما كان العمود أعلى (أقصى درجة 10)، زادت أولوية المحور أو قوة التدخل العمومي لدى الحزب.'}
            </span>
            <span className="text-[11px] text-stone-400">
              {language === 'fr' ? 'Échelle standardisée de 1 à 10' : 'سلم موحد من 1 إلى 10'}
            </span>
          </div>

          <div className="h-80 sm:h-96 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" vertical={false} />
                <XAxis
                  dataKey="dimension"
                  tick={{ fontSize: 11, fontWeight: 700, fill: '#44403c' }}
                  interval={0}
                />
                <YAxis
                  domain={[0, 10]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  tick={{ fontSize: 11, fill: '#78716c' }}
                />
                <Tooltip
                  formatter={(val: any) => [`${val} / 10`, '']}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '12px',
                    border: 'none',
                    padding: '8px 12px',
                  }}
                />
                <Legend
                  wrapperStyle={{
                    paddingTop: '16px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}
                />
                {activeParties.map((party) => {
                  const colors = PARTY_COLORS[party.id] || { main: '#059669', light: '#ECFDF5', border: '#6EE7B7' };
                  return (
                    <Bar
                      key={party.id}
                      dataKey={party.acronym[language]}
                      name={party.acronym[language]}
                      fill={colors.main}
                      radius={[6, 6, 0, 0]}
                    />
                  );
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* VIEW 2: Visual Gauge Scorecards per Pillar */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2" id="pillar-cards-container">
          {dimensions.map((dim) => (
            <div
              key={dim.key}
              className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/90 space-y-3"
            >
              {/* Pillar Title */}
              <div className="flex items-center justify-between border-b border-stone-200/70 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{dim.icon}</span>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {language === 'fr' ? dim.labelFr : dim.labelAr}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Polarity Indicators (What 1 vs 10 means) */}
              <div className="flex items-center justify-between text-[11px] text-stone-500 bg-white/70 p-2 rounded-xl border border-stone-200/50">
                <span className="text-start">
                  1 : {language === 'fr' ? dim.lowFr : dim.lowAr}
                </span>
                <span className="text-end font-medium text-stone-700">
                  10 : {language === 'fr' ? dim.highFr : dim.highAr}
                </span>
              </div>

              {/* Progress bars for each selected party */}
              <div className="space-y-2 pt-1">
                {activeParties.map((party) => {
                  const score = party.metrics[dim.key];
                  const percentage = (score / 10) * 100;
                  const colors = PARTY_COLORS[party.id] || { main: '#059669', light: '#ECFDF5', border: '#6EE7B7' };

                  return (
                    <div
                      key={party.id}
                      className="flex items-center gap-3 bg-white p-2 rounded-xl border border-stone-200/70"
                    >
                      <div className="flex items-center gap-1.5 w-24 sm:w-28 shrink-0">
                        <span className="text-sm">{party.symbolIcon}</span>
                        <span className="font-bold text-xs text-stone-900 truncate">
                          {party.acronym[language]}
                        </span>
                      </div>

                      {/* Bar Gauge */}
                      <div className="flex-1 bg-stone-100 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: colors.main,
                          }}
                        />
                      </div>

                      {/* Score Value */}
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-md shrink-0 w-11 text-center"
                        style={{
                          backgroundColor: colors.light,
                          color: colors.main,
                        }}
                      >
                        {score} / 10
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Party Quick Info Footnote */}
      <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-stone-400" />
          {language === 'fr'
            ? 'Cliquez sur un parti pour inspecter sa fiche programmatique complète.'
            : 'اضغط على أي حزب للاطلاع على بطاقته الانتخابية الكاملة.'}
        </span>
        <div className="flex items-center gap-2">
          {activeParties.map((p) => (
            <button
              key={p.id}
              onClick={() => onOpenPartyModal && onOpenPartyModal(p)}
              className="text-emerald-700 hover:underline font-semibold"
            >
              {p.acronym[language]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
