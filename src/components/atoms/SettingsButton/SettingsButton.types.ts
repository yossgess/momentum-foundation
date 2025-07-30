import { ViewStyle } from 'react-native';

export interface SettingsButtonProps {
  onPress: () => void;
  variant?: 'icon-only' | 'icon-with-label';
  label?: string;
  size?: number;
  color?: string;
  disabled?: boolean;
  style?: ViewStyle;
}
