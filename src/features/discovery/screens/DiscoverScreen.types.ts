export interface ProfileData {
  id: string;
  name: string;
  age: number;
  distance: number;
  sports: string[];
  images: string[];
  bio?: string;
}

export interface DiscoverScreenProps {
  navigation: any;
  locale?: 'en' | 'fr';
}
