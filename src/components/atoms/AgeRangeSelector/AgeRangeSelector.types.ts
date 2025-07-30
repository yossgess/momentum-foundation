import { ViewStyle } from 'react-native';

export interface AgeRangeSelectorProps {
  min?: number;
  max?: number;
  step?: number;
  initialRange?: [number, number];
  onChange: (range: [number, number]) => void;
  locale?: 'en' | 'fr';
  disabled?: boolean;
  style?: ViewStyle;
}

export interface AgeRangeSelectorRef {
  reset: () => void;
}
