export type Language = 'fr' | 'ar';

export type PoliticalPosition = 'majority' | 'opposition';

export type PoliticalSpectrum = 'liberal' | 'social_democrat' | 'conservative' | 'left' | 'centrist';

export type ThemeId =
  | 'economy_fiscal'
  | 'employment_youth'
  | 'social_health'
  | 'education'
  | 'purchasing_power'
  | 'territories_climate';

export interface ThematicArea {
  id: ThemeId;
  iconName: string;
  label: { fr: string; ar: string };
  shortLabel: { fr: string; ar: string };
  description: { fr: string; ar: string };
  keyQuestion: { fr: string; ar: string };
}

export interface PartyThemeData {
  summary: { fr: string; ar: string };
  keyMeasures: { fr: string[]; ar: string[] };
  philosophicalStance: { fr: string; ar: string };
  indicator: {
    label: { fr: string; ar: string };
    value: { fr: string; ar: string };
  };
}

export interface PartyMetrics {
  stateVsMarket: number; // 1 = Marché privé libre, 10 = État stratège / Nationalisations
  socialSpending: number; // 1 = Rigueur budgétaire, 10 = Priorité dépenses sociales maximales
  taxProgressivity: number; // 1 = Allègement fiscal entreprises, 10 = Impôt sur la fortune / Superprofits
  ruralPriority: number; // 1 = Focalisation métropoles/industrie, 10 = Priorité absolue monde rural/montagne
  priceRegulation: number; // 1 = Prix libres régulés par la concurrence, 10 = Plafonnement strict des prix
  climateSobriety: number; // 1 = Dessalement technologique & agro-export, 10 = Rupture écologique & arrêt agro-business
  economicSpectrumScore: number; // -5 (Gauche interventionniste) à +5 (Droite libérale)
  societalSpectrumScore: number; // -5 (Conservateur traditionnel) à +5 (Moderniste progressiste)
  targetSmigMAD: number; // SMIG mensuel visé en DH net
  targetHealthBudgetPercent: number; // % du budget général de l'État visé pour la Santé
  targetEducationBudgetPercent: number; // % du budget général visé pour l'Éducation
}

export interface Party {
  id: string;
  name: { fr: string; ar: string };
  acronym: { fr: string; ar: string };
  symbolName: { fr: string; ar: string };
  symbolIcon: string;
  foundationYear: number;
  currentLeader: { fr: string; ar: string };
  position: PoliticalPosition;
  spectrum: PoliticalSpectrum;
  spectrumLabel: { fr: string; ar: string };
  color: {
    primary: string; // Tailwind hex or class
    bg: string;
    border: string;
    text: string;
  };
  parliamentSeats2021: number;
  slogan: { fr: string; ar: string };
  generalPhilosophy: { fr: string; ar: string };
  targetAudience: { fr: string; ar: string };
  coreDifferentiator: { fr: string; ar: string };
  metrics: PartyMetrics;
  themes: Record<ThemeId, PartyThemeData>;
}

export type ActiveTab = 'visual' | 'compare' | 'thematic' | 'parties';

