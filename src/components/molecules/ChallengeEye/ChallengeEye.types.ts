import { ViewStyle } from 'react-native';

export interface ChallengeUser {
  id: string;
  profilePicture?: string;
  name: string;
  age: number;
  location: string;
  commonSports: string[];
}

export interface ChallengeEyeProps {
  challenges: ChallengeUser[];
  isLoading?: boolean;
  error?: string;
  onViewProfile: (userId: string) => void;
  onRetry?: () => void;
  locale?: 'en' | 'fr';
  style?: ViewStyle;
}

export interface ChallengeEyeState {
  isRefreshing: boolean;
}
