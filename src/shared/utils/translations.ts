export interface TranslationKeys {
  distance: {
    within: string;
    km: string;
  };
  age: {
    years: string;
    yearsShort: string;
  };
  cards: {
    event: {
      participants: string;
    };
    coach: {
      rating: string;
      specialty: string;
    };
    court: {
      indoor: string;
      outdoor: string;
      synthetic: string;
      natural: string;
    };
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
    cards: {
      event: {
        participants: 'participants',
      },
      coach: {
        rating: 'Rating',
        specialty: 'Specialty',
      },
      court: {
        indoor: 'Indoor',
        outdoor: 'Outdoor',
        synthetic: 'Synthetic',
        natural: 'Natural',
      },
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
    cards: {
      event: {
        participants: 'participants',
      },
      coach: {
        rating: 'Note',
        specialty: 'Spécialité',
      },
      court: {
        indoor: 'Intérieur',
        outdoor: 'Extérieur',
        synthetic: 'Synthétique',
        natural: 'Naturel',
      },
    },
  },
};

export const useTranslation = (locale: 'en' | 'fr' = 'en') => {
  const t = translations[locale];
  return { t, locale };
};
