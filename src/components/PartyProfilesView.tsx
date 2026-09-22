import React, { useState } from 'react';
import { Party, Language, PoliticalPosition } from '../types';
import { PARTIES } from '../data/parties';
import { TRANSLATIONS } from '../data/translations';
import {
  Calendar,
  User,
  Vote,
  Target,
  Sparkles,
  ArrowUpRight,
  Search,
} from 'lucide-react';

interface PartyProfilesViewProps {
  language: Language;
  onOpenPartyModal: (party: Party) => void;
  onCompareParty: (partyId: string) => void;
}

export const PartyProfilesView: React.FC<PartyProfilesViewProps> = ({
  language,
  onOpenPartyModal,
  onCompareParty,
}) => {
  const t = TRANSLATIONS[language];
  const [filterPosition, setFilterPosition] = useState<'all' | PoliticalPosition>('all');
  const [search, setSearch] = useState<string>('');

  const filteredParties = PARTIES.filter((party) => {
    if (filterPosition !== 'all' && party.position !== filterPosition) {
      return false;
    }
    if (search.trim() !== '') {
      const q = search.toLowerCase();
      return (
        party.name.fr.toLowerCase().includes(q) ||
        party.name.ar.toLowerCase().includes(q) ||
        party.acronym.fr.toLowerCase().includes(q) ||
        party.acronym.ar.toLowerCase().includes(q) ||
        party.currentLeader.fr.toLowerCase().includes(q) ||
        party.currentLeader.ar.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-6" id="party-profiles-root">
      {/* Intro Banner */}
      <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-stone-900">
            {language === 'fr'
              ? 'Cartographie des 8 Principales Formations Politiques'
              : 'دليل الأحزاب السياسية الثمانية الكبرى في المغرب'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {language === 'fr'
              ? 'Fiches d’identité, lignes doctrinales, audience et engagements majeurs pour chaque parti.'
              : 'بطاقات الهوية، المرجعيات الفكرية، القواعد الانتخابية وأبرز الالتزامات لكل حزب.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={language === 'fr' ? 'Rechercher un parti...' : 'ابحث عن حزب...'}
              className="ps-8 pe-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden"
            />
          </div>

          <div className="flex items-center rounded-xl border border-stone-200 p-0.5 bg-stone-50 text-xs font-semibold">
            <button
              onClick={() => setFilterPosition('all')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filterPosition === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-500'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setFilterPosition('majority')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filterPosition === 'majority'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-stone-500'
              }`}
            >
              {t.filterMajority}
            </button>
            <button
              onClick={() => setFilterPosition('opposition')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                filterPosition === 'opposition'
                  ? 'bg-white text-amber-800 shadow-xs'
                  : 'text-stone-500'
              }`}
            >
              {t.filterOpposition}
            </button>
          </div>
        </div>
      </div>

      {/* Parties Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" id="party-cards-grid">
        {filteredParties.map((party) => {
          const isMajority = party.position === 'majority';

          return (
            <div
              key={party.id}
              id={`party-profile-card-${party.id}`}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:border-emerald-400/70 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{party.symbolIcon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-stone-900">
                          {party.acronym[language]}
                        </h3>
                        <span className="text-xs text-stone-400">
                          ({party.symbolName[language]})
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 font-medium">
                        {party.name[language]}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
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

                {/* Identity Badges Row */}
                <div className="grid grid-cols-3 gap-2 text-xs py-2 px-3 bg-stone-50 rounded-xl border border-stone-100">
                  <div className="flex items-center gap-1.5 text-stone-600">
                    <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{party.foundationYear}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-600">
                    <Vote className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>
                      {party.parliamentSeats2021} {language === 'fr' ? 'sièges' : 'مقاعد'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-600 truncate">
                    <User className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{party.currentLeader[language]}</span>
                  </div>
                </div>

                {/* Slogan */}
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-100">
                  {party.slogan[language]}
                </div>
              </div>

              {/* General Philosophy */}
              <div className="space-y-2 text-xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  {t.philosophicalOrientation}
                </span>
                <p className="text-stone-700 leading-relaxed bg-stone-50/60 p-3 rounded-xl border border-stone-100">
                  {party.generalPhilosophy[language]}
                </p>
              </div>

              {/* Core Differentiator & Audience */}
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-1.5 text-stone-700">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900">
                      {t.coreDifferentiatorLabel} :{' '}
                    </span>
                    <span>{party.coreDifferentiator[language]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 text-stone-600">
                  <Target className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-800">
                      {t.targetAudienceLabel} :{' '}
                    </span>
                    <span>{party.targetAudience[language]}</span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  id={`open-party-modal-${party.id}`}
                  onClick={() => onOpenPartyModal(party)}
                  className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center gap-1.5"
                >
                  <span>{t.viewPartyDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onCompareParty(party.id)}
                  className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                >
                  {language === 'fr' ? 'Comparer dans le tableau' : 'مقارنة في الجدول'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
