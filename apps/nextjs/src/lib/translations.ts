export type Locale = 'en';

export const locales: Locale[] = ['en'];

export const docsFeedbackTranslations = {
  en: {
    helpfulQuestion: 'Was this page helpful?',
    yes: 'Yes',
    no: 'No',
    suggestEdits: 'Suggest edits',
    raiseIssue: 'Raise issue',
  },
} as const;

export const layoutTranslations = {
  en: {
    homeTitle: 'Encatch × Nextra',
    homeDescription:
      'Sample docs site with Encatch page feedback in the footer — built on Nextra.',
    footer: `MIT ${new Date().getFullYear()} © Encatch.`,
    searchPlaceholder: 'Search documentation…',
  },
} as const;

export function getDocsFeedbackTranslations(locale: string) {
  return docsFeedbackTranslations[locale as Locale] ?? docsFeedbackTranslations.en;
}

export function getLayoutTranslations(locale: string) {
  return layoutTranslations[locale as Locale] ?? layoutTranslations.en;
}
