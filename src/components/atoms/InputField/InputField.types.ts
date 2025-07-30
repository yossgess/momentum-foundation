import { TextInputProps, ViewStyle, TextStyle } from 'react-native';

export type InputFieldVariant = 'default' | 'password' | 'numeric';

export interface InputFieldProps extends Omit<TextInputProps, 'style'> {
  variant?: InputFieldVariant;
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}
