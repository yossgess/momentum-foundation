import { ViewStyle } from 'react-native';

export interface ImageCarouselProps {
  images: string[];
  onPress?: (imageIndex: number) => void;
  style?: ViewStyle;
}
