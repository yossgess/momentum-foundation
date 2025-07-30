import { ViewStyle, TextStyle } from 'react-native';

export type ChipVariant = 'filled' | 'outlined' | 'ghost';
export type ChipSize = 'small' | 'medium' | 'large';

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  variant?: ChipVariant;
  size?: ChipSize;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
