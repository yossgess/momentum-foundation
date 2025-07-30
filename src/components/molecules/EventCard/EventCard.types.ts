import { ViewStyle } from 'react-native';

export interface EventCardProps {
  id: string;
  image?: string;
  title: string;
  dateTime: string;
  location: string;
  price?: string;
  sportType?: string;
  sportIcon?: string;
  participantCount?: number;
  maxParticipants?: number;
  onPress: (eventId: string) => void;
  locale?: 'en' | 'fr';
  style?: ViewStyle;
}

export interface EventCardData {
  id: string;
  image?: string;
  title: string;
  dateTime: string;
  location: string;
  price?: string;
  sportType?: string;
  sportIcon?: string;
  participantCount?: number;
  maxParticipants?: number;
}
