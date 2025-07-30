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
  challenges: {
    empty: {
      title: string;
      message: string;
    };
  };
  common: {
    retry: string;
    loading: string;
    error: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    close: string;
    back: string;
    next: string;
    done: string;
    search: string;
    filter: string;
    clear: string;
    apply: string;
    reset: string;
    submit: string;
    select: string;
    upload: string;
    remove: string;
    add: string;
    update: string;
    create: string;
    view: string;
    show: string;
    hide: string;
    enable: string;
    disable: string;
    on: string;
    off: string;
    yes: string;
    no: string;
    ok: string;
    continue: string;
    skip: string;
    finish: string;
    start: string;
    stop: string;
    pause: string;
    resume: string;
    refresh: string;
    reload: string;
  };
  forms: {
    required: string;
    invalid: string;
    tooShort: string;
    tooLong: string;
    invalidEmail: string;
    invalidPhone: string;
    passwordMismatch: string;
    selectOption: string;
    enterText: string;
    chooseFile: string;
    takePhoto: string;
    selectFromGallery: string;
    camera: string;
    gallery: string;
    permissions: string;
    permissionDenied: string;
  };
  navigation: {
    home: string;
    discover: string;
    events: string;
    coaches: string;
    courts: string;
    profile: string;
    settings: string;
    notifications: string;
    messages: string;
    favorites: string;
    history: string;
    help: string;
    about: string;
    privacy: string;
    terms: string;
    logout: string;
  };
  states: {
    empty: string;
    noResults: string;
    noData: string;
    offline: string;
    connectionError: string;
    serverError: string;
    notFound: string;
    unauthorized: string;
    forbidden: string;
    maintenance: string;
  };
  buttons: {
    challenge: string;
    nope: string;
    chat: string;
    settings: string;
    notifications: string;
    editProfile: string;
  };
  discovery: {
    title: string;
    noMoreProfiles: string;
    checkBackLater: string;
    sendMessage: string;
    continueSwiping: string;
    matchFound: string;
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
    challenges: {
      empty: {
        title: 'No Challenges Yet',
        message: 'No one has challenged you yet. Keep swiping to find your perfect sports partner!',
      },
    },
    common: {
      retry: 'Retry',
      loading: 'Loading...',
      error: 'Error',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      done: 'Done',
      search: 'Search',
      filter: 'Filter',
      clear: 'Clear',
      apply: 'Apply',
      reset: 'Reset',
      submit: 'Submit',
      select: 'Select',
      upload: 'Upload',
      remove: 'Remove',
      add: 'Add',
      update: 'Update',
      create: 'Create',
      view: 'View',
      show: 'Show',
      hide: 'Hide',
      enable: 'Enable',
      disable: 'Disable',
      on: 'On',
      off: 'Off',
      yes: 'Yes',
      no: 'No',
      ok: 'OK',
      continue: 'Continue',
      skip: 'Skip',
      finish: 'Finish',
      start: 'Start',
      stop: 'Stop',
      pause: 'Pause',
      resume: 'Resume',
      refresh: 'Refresh',
      reload: 'Reload',
    },
    forms: {
      required: 'Required',
      invalid: 'Invalid',
      tooShort: 'Too short',
      tooLong: 'Too long',
      invalidEmail: 'Invalid email',
      invalidPhone: 'Invalid phone number',
      passwordMismatch: 'Passwords do not match',
      selectOption: 'Select an option',
      enterText: 'Enter text',
      chooseFile: 'Choose file',
      takePhoto: 'Take photo',
      selectFromGallery: 'Select from gallery',
      camera: 'Camera',
      gallery: 'Gallery',
      permissions: 'Permissions',
      permissionDenied: 'Permission denied',
    },
    navigation: {
      home: 'Home',
      discover: 'Discover',
      events: 'Events',
      coaches: 'Coaches',
      courts: 'Courts',
      profile: 'Profile',
      settings: 'Settings',
      notifications: 'Notifications',
      messages: 'Messages',
      favorites: 'Favorites',
      history: 'History',
      help: 'Help',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      logout: 'Logout',
    },
    states: {
      empty: 'No items found',
      noResults: 'No results',
      noData: 'No data available',
      offline: 'You are offline',
      connectionError: 'Connection error',
      serverError: 'Server error',
      notFound: 'Not found',
      unauthorized: 'Unauthorized',
      forbidden: 'Forbidden',
      maintenance: 'Under maintenance',
    },
    buttons: {
      challenge: 'Challenge',
      nope: 'Nope',
      chat: 'Chat',
      settings: 'Settings',
      notifications: 'Notifications',
      editProfile: 'Edit Profile',
    },
    discovery: {
      title: 'Discovery',
      noMoreProfiles: 'No more profiles',
      checkBackLater: 'Check back later for new matches!',
      sendMessage: 'Send Message',
      continueSwiping: 'Continue Swiping',
      matchFound: 'It\'s a Match!',
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
    challenges: {
      empty: {
        title: 'Aucun Défi Pour Le Moment',
        message: 'Personne ne vous a challengé pour le moment. Continuez à swiper pour trouver votre partenaire sportif idéal!',
      },
    },
    common: {
      retry: 'Réessayer',
      loading: 'Chargement...',
      error: 'Erreur',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      save: 'Sauvegarder',
      edit: 'Modifier',
      delete: 'Supprimer',
      close: 'Fermer',
      back: 'Retour',
      next: 'Suivant',
      done: 'Terminé',
      search: 'Rechercher',
      filter: 'Filtrer',
      clear: 'Effacer',
      apply: 'Appliquer',
      reset: 'Réinitialiser',
      submit: 'Soumettre',
      select: 'Sélectionner',
      upload: 'Télécharger',
      remove: 'Supprimer',
      add: 'Ajouter',
      update: 'Mettre à jour',
      create: 'Créer',
      view: 'Voir',
      show: 'Afficher',
      hide: 'Masquer',
      enable: 'Activer',
      disable: 'Désactiver',
      on: 'Activé',
      off: 'Désactivé',
      yes: 'Oui',
      no: 'Non',
      ok: 'OK',
      continue: 'Continuer',
      skip: 'Ignorer',
      finish: 'Terminer',
      start: 'Commencer',
      stop: 'Arrêter',
      pause: 'Pause',
      resume: 'Reprendre',
      refresh: 'Actualiser',
      reload: 'Recharger',
    },
    forms: {
      required: 'Requis',
      invalid: 'Invalide',
      tooShort: 'Trop court',
      tooLong: 'Trop long',
      invalidEmail: 'Email invalide',
      invalidPhone: 'Numéro de téléphone invalide',
      passwordMismatch: 'Les mots de passe ne correspondent pas',
      selectOption: 'Sélectionner une option',
      enterText: 'Entrer du texte',
      chooseFile: 'Choisir un fichier',
      takePhoto: 'Prendre une photo',
      selectFromGallery: 'Sélectionner depuis la galerie',
      camera: 'Appareil photo',
      gallery: 'Galerie',
      permissions: 'Permissions',
      permissionDenied: 'Permission refusée',
    },
    navigation: {
      home: 'Accueil',
      discover: 'Découvrir',
      events: 'Événements',
      coaches: 'Entraîneurs',
      courts: 'Terrains',
      profile: 'Profil',
      settings: 'Paramètres',
      notifications: 'Notifications',
      messages: 'Messages',
      favorites: 'Favoris',
      history: 'Historique',
      help: 'Aide',
      about: 'À propos',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      logout: 'Déconnexion',
    },
    states: {
      empty: 'Aucun élément trouvé',
      noResults: 'Aucun résultat',
      noData: 'Aucune donnée disponible',
      offline: 'Vous êtes hors ligne',
      connectionError: 'Erreur de connexion',
      serverError: 'Erreur serveur',
      notFound: 'Non trouvé',
      unauthorized: 'Non autorisé',
      forbidden: 'Interdit',
      maintenance: 'En maintenance',
    },
    buttons: {
      challenge: 'Défier',
      nope: 'Non',
      chat: 'Chat',
      settings: 'Paramètres',
      notifications: 'Notifications',
      editProfile: 'Modifier le Profil',
    },
    discovery: {
      title: 'Découverte',
      noMoreProfiles: 'Plus de profils',
      checkBackLater: 'Revenez plus tard pour de nouveaux matchs!',
      sendMessage: 'Envoyer un Message',
      continueSwiping: 'Continuer à Swiper',
      matchFound: 'C\'est un Match!',
    },
  },
};

export const useTranslation = (locale: 'en' | 'fr' = 'en') => {
  const t = translations[locale];
  return { t, locale };
};
