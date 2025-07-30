import { ViewStyle } from 'react-native';

export interface EditProfileButtonProps {
  onPress: () => void;
  variant?: 'floating' | 'inline';
  buttonVariant?: 'primary' | 'ghost';
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
}
