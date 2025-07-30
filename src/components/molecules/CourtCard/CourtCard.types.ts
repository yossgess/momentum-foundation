import { ViewStyle } from 'react-native';

export interface CourtCardProps {
  id: string;
  image?: string;
  courtName: string;
  type: 'indoor' | 'outdoor' | 'synthetic' | 'natural';
  location: string;
  isFavorite?: boolean;
  onPress: (courtId: string) => void;
  onFavoriteToggle?: (courtId: string, isFavorite: boolean) => void;
  locale?: 'en' | 'fr';
  style?: ViewStyle;
}

export interface CourtCardData {
  id: string;
  image?: string;
  courtName: string;
  type: 'indoor' | 'outdoor' | 'synthetic' | 'natural';
  location: string;
  isFavorite?: boolean;
}
