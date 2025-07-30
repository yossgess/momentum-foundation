import { ViewStyle } from 'react-native';

export interface CoachCardProps {
  id: string;
  avatarImage?: string;
  name: string;
  specialty: string;
  rating: number;
  price?: string;
  sportIcon?: string;
  onPress: (coachId: string) => void;
  locale?: 'en' | 'fr';
  style?: ViewStyle;
}

export interface CoachCardData {
  id: string;
  avatarImage?: string;
  name: string;
  specialty: string;
  rating: number;
  price?: string;
  sportIcon?: string;
}
