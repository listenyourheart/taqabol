import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  Legend,
} from 'recharts';
import { Language } from '../types';
import { PARTIES } from '../data/parties';
import { TRANSLATIONS } from '../data/translations';
import { BarChart3, Coins, HeartPulse, PieChart } from 'lucide-react';

interface VisualBenchmarksChartProps {
  language: Language;
}

export const VisualBenchmarksChart: React.FC<VisualBenchmarksChartProps> = ({
  language,
}) => {
  const t = TRANSLATIONS[language];
  const [activeBenchmark, setActiveBenchmark] = useState<'smig' | 'budget' | 'seats'>(
    'smig'
  );

  // 1. SMIG Data sorted from highest to lowest
  const smigData = [...PARTIES]
    .map((p) => ({
      name: p.acronym[language],
      fullName: p.name[language],
      smig: p.metrics.targetSmigMAD,
      symbol: p.symbolIcon,
      position: p.position,
      color: p.color.primary,
    }))
    .sort((a, b) => b.smig - a.smig);

  // 2. Budget Data: Santé vs Éducation
  const budgetData = PARTIES.map((p) => ({
    name: p.acronym[language],
    symbol: p.symbolIcon,
    sante: p.metrics.targetHealthBudgetPercent,
    education: p.metrics.targetEducationBudgetPercent,
  }));

  // 3. Seats Data
  const seatsData = [...PARTIES]
    .map((p) => ({
      name: p.acronym[language],
      seats: p.parliamentSeats2021,
      symbol: p.symbolIcon,
      position: p.position,
      color: p.position === 'majority' ? '#2563EB' : '#D97706',
    }))
    .sort((a, b) => b.seats - a.seats);

  return (
    <div className="bg-[#faf7ee] border-2 border-stone-800 p-5 sm:p-7 shadow-[3px_3px_0px_#1c1917] space-y-6" id="visual-benchmarks-card">
      {/* Header with Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 border border-stone-800 bg-emerald-100 text-emerald-900 shadow-[1px_1px_0px_#1c1917]">
              <BarChart3 className="w-4 h-4" />
            </span>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-stone-950 font-newspaper-title">
                {t.benchmarksTitle}
              </h3>
              <span className="newspaper-stamp text-[9px] px-1.5 py-0.2">
                {language === 'ar' ? 'أرقام رسمية' : 'REPÈRES'}
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 font-serif mt-1">
            {language === 'fr'
              ? 'Des chiffres concrets pour comparer sans ambiguïté les engagements majeurs.'
              : 'أرقام ملموسة وواضحة للمقارنة المباشرة بين التزامات الأحزاب دون إطناب.'}
          </p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="flex items-center bg-[#eae3d2] p-0.5 border border-stone-500 shadow-[1px_1px_0px_#78716c] text-xs font-bold self-start sm:self-auto">
          <button
            id="benchmark-tab-smig"
            onClick={() => setActiveBenchmark('smig')}
            className={`flex items-center gap-1.5 px-3 py-1 transition-all cursor-pointer ${
              activeBenchmark === 'smig'
                ? 'bg-stone-900 text-[#faf7ee]'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            <Coins className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'fr' ? 'SMIG (Dirhams)' : 'الحد الأدنى للأجور'}</span>
          </button>

          <button
            id="benchmark-tab-budget"
            onClick={() => setActiveBenchmark('budget')}
            className={`flex items-center gap-1.5 px-3 py-1 transition-all cursor-pointer ${
              activeBenchmark === 'budget'
                ? 'bg-stone-900 text-[#faf7ee]'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5 text-rose-600" />
            <span>{language === 'fr' ? 'Santé & Éducation' : 'ميزانية الصحة والتعليم'}</span>
          </button>

          <button
            id="benchmark-tab-seats"
            onClick={() => setActiveBenchmark('seats')}
            className={`flex items-center gap-1.5 px-3 py-1 transition-all cursor-pointer ${
              activeBenchmark === 'seats'
                ? 'bg-stone-900 text-[#faf7ee]'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            <PieChart className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'fr' ? 'Sièges Parlement' : 'مقاعد البرلمان'}</span>
          </button>
        </div>
      </div>

      {/* Chart 1: SMIG */}
      {activeBenchmark === 'smig' && (
        <div className="space-y-3" id="smig-chart-container">
          <div className="flex items-center justify-between text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
            <span>{t.smigBenchmark}</span>
            <span className="font-semibold text-emerald-700">
              {language === 'fr'
                ? 'Repère : SMIG officiel actuel ~3 120 DH net'
                : 'المرجع: الحد الأدنى الحالي يناهز 3,120 درهم صافي'}
            </span>
          </div>

          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={smigData}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" />
                <XAxis
                  type="number"
                  domain={[2500, 5500]}
                  unit=" DH"
                  tick={{ fontSize: 11, fill: '#78716c' }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 12, fontWeight: 700, fill: '#1c1917' }}
                  width={60}
                />
                <Tooltip
                  formatter={(value: any) => [`${value?.toLocaleString()} DH / mois`, 'SMIG Visé']}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '12px',
                    border: 'none',
                  }}
                />
                <ReferenceLine
                  x={3120}
                  stroke="#ef4444"
                  strokeDasharray="4 4"
                  label={{
                    value: language === 'fr' ? 'Niveau actuel (3 120 DH)' : 'المستوى الحالي (3,120 د)',
                    fill: '#ef4444',
                    fontSize: 10,
                    position: 'insideTopLeft',
                  }}
                />
                <Bar dataKey="smig" radius={[0, 8, 8, 0]}>
                  {smigData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.position === 'majority' ? '#2563eb' : '#d97706'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-4 justify-center text-xs text-stone-500 pt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
              <span>{language === 'fr' ? 'Majorité gouvernementale' : 'أغلبية حكومية'}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
              <span>{language === 'fr' ? 'Opposition parlementaire' : 'معارضة برلمانية'}</span>
            </span>
          </div>
        </div>
      )}

      {/* Chart 2: Budget Santé vs Éducation */}
      {activeBenchmark === 'budget' && (
        <div className="space-y-3" id="budget-chart-container">
          <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
            {t.budgetBenchmark}
          </div>

          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={budgetData}
                margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 700 }} />
                <YAxis unit="%" tick={{ fontSize: 11 }} domain={[0, 35]} />
                <Tooltip
                  formatter={(val: any) => [`${val}% du budget général`, '']}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '12px',
                    border: 'none',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', fontWeight: 600 }} />
                <Bar
                  dataKey="sante"
                  name={language === 'fr' ? 'Santé Publique (%)' : 'قطاع الصحة (%)'}
                  fill="#E11D48"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="education"
                  name={language === 'fr' ? 'Éducation Nationale (%)' : 'التربية والتعليم (%)'}
                  fill="#0D9488"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Chart 3: Sièges 2021 */}
      {activeBenchmark === 'seats' && (
        <div className="space-y-4" id="seats-chart-container">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <span className="font-bold text-blue-900 block text-sm">
                {language === 'fr' ? 'Coalition Majoritaire : 270 sièges (68%)' : 'التحالف الحكومي: 270 مقعداً (68%)'}
              </span>
              <span className="text-blue-700 text-[11px]">
                RNI (102) + PAM (87) + Istiqlal (81)
              </span>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <span className="font-bold text-amber-900 block text-sm">
                {language === 'fr' ? 'Forces d’Opposition : 125 sièges (32%)' : 'المعارضة البرلمانية: 125 مقعداً (32%)'}
              </span>
              <span className="text-amber-700 text-[11px]">
                USFP (34) + MP (28) + PPS (22) + PJD (13) + PSU (1) + Divers
              </span>
            </div>
          </div>

          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={seatsData}
                margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 700 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  formatter={(value: any) => [`${value} sièges`, 'Députés']}
                  contentStyle={{
                    backgroundColor: '#1c1917',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '12px',
                    border: 'none',
                  }}
                />
                <Bar dataKey="seats" name={language === 'fr' ? 'Sièges' : 'مقاعد'} radius={[6, 6, 0, 0]}>
                  {seatsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};
