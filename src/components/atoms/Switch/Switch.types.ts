import { ViewStyle } from 'react-native';

export interface SwitchProps {
  value: boolean;
  onToggle: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
  trackColor?: {
    false?: string;
    true?: string;
  };
  thumbColor?: string;
}
