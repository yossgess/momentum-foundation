import { ViewStyle } from 'react-native';

export interface SwipeProfile {
  id: string;
  name: string;
  age: number;
  images: string[];
  sports: string[];
  location: string;
  distance: number;
  skillLevel: string;
  commonInterests?: string[];
}

export interface SwipeCardProps {
  profile: SwipeProfile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onPressImage?: (imageIndex: number) => void;
  style?: ViewStyle;
}
