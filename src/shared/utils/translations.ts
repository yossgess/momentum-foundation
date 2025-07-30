export interface TranslationKeys {
  distance: {
    within: string;
    km: string;
  };
  age: {
    years: string;
    yearsShort: string;
  };
}

export const translations: Record<'en' | 'fr', TranslationKeys> = {
  en: {
    distance: {
      within: 'Within',
      km: 'km',
    },
    age: {
      years: 'years',
      yearsShort: 'yrs',
    },
  },
  fr: {
    distance: {
      within: 'À moins de',
      km: 'km',
    },
    age: {
      years: 'ans',
      yearsShort: 'ans',
    },
  },
};

export const useTranslation = (locale: 'en' | 'fr' = 'en') => {
  const t = translations[locale];
  return { t, locale };
};
