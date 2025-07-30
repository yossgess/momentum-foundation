import { ViewStyle } from 'react-native';

export type RevertButtonSize = 'medium' | 'large';

export interface RevertButtonProps {
  onPress: () => void;
  disabled?: boolean;
  size?: RevertButtonSize;
  style?: ViewStyle;
}
