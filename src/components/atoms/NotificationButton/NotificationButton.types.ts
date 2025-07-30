import { ViewStyle } from 'react-native';

export interface NotificationButtonProps {
  onPress: () => void;
  badgeCount?: number;
  size?: number;
  color?: string;
  disabled?: boolean;
  style?: ViewStyle;
}
