import { ViewStyle, TextStyle } from 'react-native';

export type TagVariant = 'default' | 'outlined' | 'selected' | 'closable';
export type TagSize = 'small' | 'medium' | 'large';

export interface TagProps {
  label: string;
  variant?: TagVariant;
  size?: TagSize;
  onPress?: () => void;
  onClose?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}
