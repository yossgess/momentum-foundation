import { ViewStyle } from 'react-native';

export interface DistanceRangeSelectorProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  onChange: (value: number) => void;
  locale?: 'en' | 'fr';
  icon?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

export interface DistanceRangeSelectorRef {
  reset: () => void;
}
