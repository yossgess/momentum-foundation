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
  locale?: 'en' | 'fr';
}
