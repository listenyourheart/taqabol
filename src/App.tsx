import React, { useState, useEffect } from 'react';
import { Language, ActiveTab, Party } from './types';
import { Header } from './components/Header';
import { VisualOverviewTab } from './components/VisualOverviewTab';
import { ComparatorView } from './components/ComparatorView';
import { ThematicView } from './components/ThematicView';
import { PartyProfilesView } from './components/PartyProfilesView';
import { PartyDetailModal } from './components/PartyDetailModal';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [activeTab, setActiveTab] = useState<ActiveTab>('visual');
  const [largeFont, setLargeFont] = useState<boolean>(false);
  const [activePartyModal, setActivePartyModal] = useState<Party | null>(null);

  // Synchronize HTML attributes for direction (RTL/LTR) and language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const handleToggleFontSize = () => {
    setLargeFont((prev) => !prev);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCompareSpecificParty = (partyId: string) => {
    setActiveTab('compare');
    // Scroll to top of comparator
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="app-root"
      className={`min-h-screen flex flex-col bg-[#f6f2e8] text-stone-900 transition-[font-size] duration-150 ${
        largeFont ? 'text-[17px]' : 'text-[15px]'
      }`}
    >
      {/* Header with Navigation and Language / Accessibility switches */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        largeFont={largeFont}
        onToggleFontSize={handleToggleFontSize}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'visual' && (
          <VisualOverviewTab
            language={language}
            onOpenPartyModal={setActivePartyModal}
            onNavigateToCompare={() => setActiveTab('compare')}
          />
        )}

        {activeTab === 'compare' && (
          <ComparatorView
            language={language}
            onOpenPartyModal={setActivePartyModal}
          />
        )}

        {activeTab === 'thematic' && (
          <ThematicView
            language={language}
            onOpenPartyModal={setActivePartyModal}
            onCompareParty={handleCompareSpecificParty}
          />
        )}

        {activeTab === 'parties' && (
          <PartyProfilesView
            language={language}
            onOpenPartyModal={setActivePartyModal}
            onCompareParty={handleCompareSpecificParty}
          />
        )}
      </main>

      {/* Party Full Profile Modal */}
      <PartyDetailModal
        party={activePartyModal}
        onClose={() => setActivePartyModal(null)}
        language={language}
      />

      {/* Footer with Neutrality & Methodology Notes */}
      <Footer language={language} />
    </div>
  );
}
