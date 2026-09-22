import React, { useState } from 'react';
import { Party, ThemeId, Language, PoliticalPosition, PoliticalSpectrum } from '../types';
import { PARTIES } from '../data/parties';
import { THEMATIC_AREAS } from '../data/themes';
import { TRANSLATIONS } from '../data/translations';
import { ThemeSelector } from './ThemeSelector';
import { AiDisclaimerBanner } from './AiDisclaimerBanner';
import {
  Search,
  Filter,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Coins,
  Droplets,
  RotateCcw,
} from 'lucide-react';

interface ThematicViewProps {
  language: Language;
  onOpenPartyModal: (party: Party) => void;
  onCompareParty: (partyId: string) => void;
}

const ICONS_MAP: Record<string, React.FC<{ className?: string }>> = {
  TrendingUp,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Coins,
  Droplets,
};

export const ThematicView: React.FC<ThematicViewProps> = ({
  language,
  onOpenPartyModal,
  onCompareParty,
}) => {
  const t = TRANSLATIONS[language];
  const [selectedThemeId, setSelectedThemeId] = useState<ThemeId>('economy_fiscal');
  const [positionFilter, setPositionFilter] = useState<'all' | PoliticalPosition>('all');
  const [spectrumFilter, setSpectrumFilter] = useState<'all' | PoliticalSpectrum>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeTheme =
    THEMATIC_AREAS.find((theme) => theme.id === selectedThemeId) || THEMATIC_AREAS[0];
  const ActiveIcon = ICONS_MAP[activeTheme.iconName] || TrendingUp;

  // Filter parties based on criteria
  const filteredParties = PARTIES.filter((party) => {
    if (positionFilter !== 'all' && party.position !== positionFilter) {
      return false;
    }
    if (spectrumFilter !== 'all' && party.spectrum !== spectrumFilter) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const partyTheme = party.themes[selectedThemeId];
      const matchName =
        party.name.fr.toLowerCase().includes(q) ||
        party.name.ar.toLowerCase().includes(q) ||
        party.acronym.fr.toLowerCase().includes(q) ||
        party.acronym.ar.toLowerCase().includes(q);
      const matchSummary =
        partyTheme.summary.fr.toLowerCase().includes(q) ||
        partyTheme.summary.ar.toLowerCase().includes(q);
      const matchMeasures =
        partyTheme.keyMeasures.fr.some((m) => m.toLowerCase().includes(q)) ||
        partyTheme.keyMeasures.ar.some((m) => m.toLowerCase().includes(q));
      const matchStance =
        partyTheme.philosophicalStance.fr.toLowerCase().includes(q) ||
        partyTheme.philosophicalStance.ar.toLowerCase().includes(q);

      return matchName || matchSummary || matchMeasures || matchStance;
    }
    return true;
  });

  const resetFilters = () => {
    setPositionFilter('all');
    setSpectrumFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6" id="thematic-view-root">
      {/* AI Transparency Banner */}
      <AiDisclaimerBanner language={language} />

      {/* Thematic Area Selector */}
      <div className="bg-[#faf7ee] border-2 border-stone-800 p-5 shadow-[3px_3px_0px_#1c1917]">
        <div className="flex items-center gap-2 mb-3 border-b-2 border-stone-800 pb-2">
          <ActiveIcon className="w-5 h-5 text-emerald-700" />
          <h2 className="text-base sm:text-lg font-extrabold text-stone-950 font-newspaper-title">
            {t.selectTheme}
          </h2>
          <span className="newspaper-stamp text-[9px] px-1.5 py-0.2 ms-auto">
            {language === 'ar' ? 'فهرس المحاور' : 'RUBRIQUES'}
          </span>
        </div>
        <ThemeSelector
          selectedTheme={selectedThemeId}
          onSelectTheme={(id) => {
            if (id !== 'all') setSelectedThemeId(id);
          }}
          language={language}
          allowAll={false}
        />
      </div>

      {/* Thematic Question & Overview Banner */}
      <div className="bg-[#1c1917] text-[#faf6ec] border-2 border-stone-800 p-5 sm:p-6 shadow-[3px_3px_0px_#1c1917]">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-stone-900 border border-stone-700 shrink-0 hidden sm:block">
            <ActiveIcon className="w-7 h-7 text-amber-300" />
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
              {activeTheme.label[language]}
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold font-newspaper-title leading-tight text-white">
              {activeTheme.keyQuestion[language]}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-serif max-w-3xl leading-relaxed">
              {activeTheme.description[language]}
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Search & Filtering Toolbar */}
      <div className="bg-[#faf7ee] border-2 border-stone-800 p-4 sm:p-5 shadow-[3px_3px_0px_#1c1917] space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Keyword Search */}
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-stone-500 absolute start-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="thematic-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full ps-10 pe-4 py-2 border-2 border-stone-800 bg-[#faf6ed] text-xs sm:text-sm focus:outline-none focus:bg-white text-stone-900 placeholder:text-stone-500 font-serif"
            />
          </div>

          {/* Parliamentary Position Filter */}
          <div className="md:col-span-3">
            <select
              id="thematic-position-filter"
              value={positionFilter}
              onChange={(e) =>
                setPositionFilter(e.target.value as 'all' | PoliticalPosition)
              }
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#faf6ed] border-2 border-stone-800 focus:bg-white focus:outline-none text-stone-900 font-bold"
            >
              <option value="all">{t.filterAll}</option>
              <option value="majority">{t.filterMajority}</option>
              <option value="opposition">{t.filterOpposition}</option>
            </select>
          </div>

          {/* Political Spectrum Filter */}
          <div className="md:col-span-3">
            <select
              id="thematic-spectrum-filter"
              value={spectrumFilter}
              onChange={(e) =>
                setSpectrumFilter(e.target.value as 'all' | PoliticalSpectrum)
              }
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#faf6ed] border-2 border-stone-800 focus:bg-white focus:outline-none text-stone-900 font-bold"
            >
              <option value="all">
                {language === 'fr' ? 'Tous les courants' : 'كافة التيارات السياسية'}
              </option>
              <option value="liberal">{t.spectrumLiberal}</option>
              <option value="social_democrat">{t.spectrumSocialDem}</option>
              <option value="conservative">{t.spectrumConservative}</option>
              <option value="left">{t.spectrumLeft}</option>
              <option value="centrist">{t.spectrumCentrist}</option>
            </select>
          </div>
        </div>

        {/* Active Filter Indicators */}
        {(positionFilter !== 'all' ||
          spectrumFilter !== 'all' ||
          searchQuery.trim() !== '') && (
          <div className="flex items-center justify-between pt-2 border-t border-stone-300 text-xs">
            <span className="text-stone-600 font-serif">
              {filteredParties.length} / {PARTIES.length}{' '}
              {language === 'fr' ? 'partis filtrés' : 'أحزاب مطابقة'}
            </span>
            <button
              id="reset-thematic-filters-btn"
              onClick={resetFilters}
              className="flex items-center gap-1 text-stone-900 hover:text-red-700 font-bold cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.resetFilters}</span>
            </button>
          </div>
        )}
      </div>

      {/* Cards Grid of Parties for this theme */}
      {filteredParties.length === 0 ? (
        <div className="bg-[#faf7ee] border-2 border-stone-800 p-8 text-center space-y-3 shadow-[3px_3px_0px_#1c1917]">
          <p className="text-stone-600 text-sm font-serif">{t.noResultsFound}</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 border-2 border-stone-800 bg-stone-900 text-[#faf7ee] text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            {t.resetFilters}
          </button>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          id="thematic-party-cards-grid"
        >
          {filteredParties.map((party) => {
            const partyTheme = party.themes[selectedThemeId];
            const isMajority = party.position === 'majority';

            return (
              <div
                key={party.id}
                id={`theme-card-${party.id}`}
                className="bg-[#faf7ee] border-2 border-stone-800 p-5 shadow-[3px_3px_0px_#1c1917] hover:shadow-[4px_4px_0px_#1c1917] transition-all flex flex-col justify-between space-y-4"
              >
                {/* Card Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-stone-300 pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl">{party.symbolIcon}</span>
                      <div>
                        <h4 className="font-extrabold text-stone-950 text-base leading-tight font-newspaper-title">
                          {party.acronym[language]}
                        </h4>
                        <span className="text-xs text-stone-600 font-serif line-clamp-1">
                          {party.name[language]}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold border shrink-0 ${
                        isMajority
                          ? 'bg-blue-100 text-blue-900 border-blue-800'
                          : 'bg-amber-100 text-amber-900 border-amber-800'
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

                  {/* Spectrum tag */}
                  <div className="text-[11px] text-stone-600 font-bold uppercase tracking-wider">
                    {party.spectrumLabel[language]} • {party.parliamentSeats2021}{' '}
                    {language === 'fr' ? 'sièges' : 'مقاعد'}
                  </div>

                  {/* Stance Quote */}
                  <div className="p-2.5 bg-[#f2ecdc] border border-stone-400 text-xs italic font-serif text-stone-900">
                    « {partyTheme.philosophicalStance[language]} »
                  </div>
                </div>

                {/* Main Synthesis */}
                <div className="space-y-2 text-xs flex-1">
                  <div className="font-bold text-stone-950 leading-relaxed font-serif">
                    {partyTheme.summary[language]}
                  </div>

                  {/* Concrete Measures (First 3) */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block border-b border-stone-200 pb-1">
                      {t.concreteProposals} :
                    </span>
                    <ul className="space-y-1.5">
                      {partyTheme.keyMeasures[language].slice(0, 3).map((measure, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-stone-700 font-serif leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Metric Indicator & Action */}
                <div className="pt-3 border-t-2 border-stone-800 space-y-2">
                  <div className="flex items-center justify-between text-xs bg-[#eae3d2] p-2 border border-stone-500 text-stone-900 font-bold">
                    <span className="text-[11px] font-normal text-stone-700 font-serif">
                      {partyTheme.indicator.label[language]} :
                    </span>
                    <span className="font-mono">{partyTheme.indicator.value[language]}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => onOpenPartyModal(party)}
                      className="text-xs font-bold text-stone-700 hover:text-stone-950 underline cursor-pointer"
                    >
                      {t.viewPartyDetails}
                    </button>
                    <button
                      onClick={() => onCompareParty(party.id)}
                      className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                    >
                      {language === 'fr' ? 'Comparer ce parti' : 'مقارنة هذا الحزب'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
