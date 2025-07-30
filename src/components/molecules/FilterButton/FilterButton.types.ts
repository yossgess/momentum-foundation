import { ViewStyle } from 'react-native';

export interface FilterButtonProps {
  onPress: () => void;
  active?: boolean;
  badgeCount?: number;
  variant?: 'icon-only' | 'icon-text';
  label?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
}
