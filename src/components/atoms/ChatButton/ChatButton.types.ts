import { ViewStyle } from 'react-native';

export interface ChatButtonProps {
  onPress: () => void;
  unreadCount?: number;
  size?: number;
  color?: string;
  disabled?: boolean;
  style?: ViewStyle;
}
