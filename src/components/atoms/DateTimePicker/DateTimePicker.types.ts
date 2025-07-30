import { ViewStyle, TextStyle } from 'react-native';

export type DateTimePickerMode = 'date' | 'time' | 'datetime';

export interface DateTimePickerProps {
  mode?: DateTimePickerMode;
  value?: Date;
  onDateChange: (date: Date) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  minimumDate?: Date;
  maximumDate?: Date;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  labelStyle?: TextStyle;
}
