import { ViewStyle } from 'react-native';

export interface SportChipProps {
  sport: string;
  icon?: string;
  selected?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onPress?: () => void;
  style?: ViewStyle;
}
