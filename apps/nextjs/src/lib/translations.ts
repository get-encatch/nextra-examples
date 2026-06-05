export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

export const docsFeedbackTranslations = {
  en: {
    helpfulQuestion: 'Was this page helpful?',
    yes: 'Yes',
    no: 'No',
    suggestEdits: 'Suggest edits',
    raiseIssue: 'Raise issue',
  },
  es: {
    helpfulQuestion: '¿Te resultó útil esta página?',
    yes: 'Sí',
    no: 'No',
    suggestEdits: 'Sugerir ediciones',
    raiseIssue: 'Reportar un problema',
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
  es: {
    homeTitle: 'Encatch × Nextra',
    homeDescription:
      'Sitio de documentación de ejemplo con comentarios Encatch en el pie de página — construido con Nextra.',
    footer: `MIT ${new Date().getFullYear()} © Encatch.`,
    searchPlaceholder: 'Buscar documentación…',
  },
} as const;

export function getDocsFeedbackTranslations(locale: string) {
  return docsFeedbackTranslations[locale as Locale] ?? docsFeedbackTranslations.en;
}

export function getLayoutTranslations(locale: string) {
  return layoutTranslations[locale as Locale] ?? layoutTranslations.en;
}
