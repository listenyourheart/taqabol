import { PartyMetrics } from '../types';

export const PARTY_METRICS: Record<string, PartyMetrics> = {
  rni: {
    stateVsMarket: 3.2,
    socialSpending: 6.8,
    taxProgressivity: 4.0,
    ruralPriority: 6.0,
    priceRegulation: 3.5,
    climateSobriety: 4.5,
    economicSpectrumScore: 3.8, // Centre-droit libéral
    societalSpectrumScore: 1.2, // Modéré
    targetSmigMAD: 3120,
    targetHealthBudgetPercent: 8.0,
    targetEducationBudgetPercent: 21.0,
  },
  pam: {
    stateVsMarket: 4.5,
    socialSpending: 7.2,
    taxProgressivity: 5.0,
    ruralPriority: 7.0,
    priceRegulation: 5.5,
    climateSobriety: 6.0,
    economicSpectrumScore: 1.5, // Centre pragmatique
    societalSpectrumScore: 3.8, // Progressiste & Moderniste
    targetSmigMAD: 3200,
    targetHealthBudgetPercent: 8.5,
    targetEducationBudgetPercent: 22.0,
  },
  istiqlal: {
    stateVsMarket: 6.5,
    socialSpending: 8.0,
    taxProgressivity: 6.5,
    ruralPriority: 8.0,
    priceRegulation: 7.5,
    climateSobriety: 6.5,
    economicSpectrumScore: -0.5, // Centre égalitaire (Taâdoulia)
    societalSpectrumScore: -2.2, // Conservateur modéré
    targetSmigMAD: 3500,
    targetHealthBudgetPercent: 9.0,
    targetEducationBudgetPercent: 23.0,
  },
  usfp: {
    stateVsMarket: 8.5,
    socialSpending: 9.2,
    taxProgressivity: 9.0,
    ruralPriority: 7.0,
    priceRegulation: 9.0,
    climateSobriety: 8.0,
    economicSpectrumScore: -3.8, // Gauche socialiste
    societalSpectrumScore: 3.2, // Progressiste
    targetSmigMAD: 4000,
    targetHealthBudgetPercent: 12.0,
    targetEducationBudgetPercent: 25.0,
  },
  mp: {
    stateVsMarket: 4.0,
    socialSpending: 6.5,
    taxProgressivity: 5.0,
    ruralPriority: 9.8, // Champion du monde rural & montagne
    priceRegulation: 6.5,
    climateSobriety: 7.5,
    economicSpectrumScore: 0.8, // Centre-droit rural
    societalSpectrumScore: -1.5, // Traditionnel & Identité amazighe
    targetSmigMAD: 3500,
    targetHealthBudgetPercent: 8.0,
    targetEducationBudgetPercent: 20.0,
  },
  pps: {
    stateVsMarket: 8.2,
    socialSpending: 9.0,
    taxProgressivity: 9.0,
    ruralPriority: 7.5,
    priceRegulation: 9.2,
    climateSobriety: 8.5,
    economicSpectrumScore: -3.5, // Gauche réformiste
    societalSpectrumScore: 4.2, // Progressiste & Émancipation
    targetSmigMAD: 4000,
    targetHealthBudgetPercent: 11.0,
    targetEducationBudgetPercent: 24.0,
  },
  pjd: {
    stateVsMarket: 5.0,
    socialSpending: 7.0,
    taxProgressivity: 6.0,
    ruralPriority: 6.0,
    priceRegulation: 7.0,
    climateSobriety: 6.0,
    economicSpectrumScore: 1.0, // Orthodoxie budgétaire & libéralisme régulé
    societalSpectrumScore: -4.5, // Conservateur islamo-démocrate
    targetSmigMAD: 3300,
    targetHealthBudgetPercent: 8.5,
    targetEducationBudgetPercent: 22.0,
  },
  psu: {
    stateVsMarket: 9.8,
    socialSpending: 10.0,
    taxProgressivity: 10.0,
    ruralPriority: 8.5,
    priceRegulation: 10.0,
    climateSobriety: 9.8,
    economicSpectrumScore: -4.8, // Gauche radicale écosocialiste
    societalSpectrumScore: 4.5, // Démocratique laïque & progressiste
    targetSmigMAD: 5000,
    targetHealthBudgetPercent: 15.0,
    targetEducationBudgetPercent: 30.0,
  },
};
