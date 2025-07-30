import { ViewStyle } from 'react-native';
import { ButtonVariant, ButtonSize } from '../../atoms/Button/Button.types';

export interface IconButtonItem {
  id?: string;
  icon: React.ReactNode;
  label?: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export interface IconButtonGroupProps {
  buttons: IconButtonItem[];
  selectedIndex?: number;
  onSelectionChange?: (index: number) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  containerStyle?: ViewStyle;
}
