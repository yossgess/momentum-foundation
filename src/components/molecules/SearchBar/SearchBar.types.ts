import { ViewStyle, TextStyle } from 'react-native';

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
  onSubmit?: () => void;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  disabled?: boolean;
  autoFocus?: boolean;
}
