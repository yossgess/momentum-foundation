import { ViewStyle } from 'react-native';

export type NopeButtonSize = 'medium' | 'large';

export interface NopeButtonProps {
  onPress: () => void;
  disabled?: boolean;
  size?: NopeButtonSize;
  style?: ViewStyle;
}
