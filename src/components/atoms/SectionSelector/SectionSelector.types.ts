import { ViewStyle, TextStyle } from 'react-native';

export interface SectionOption {
  label: string;
  value: string;
}

export interface SectionSelectorProps {
  options: SectionOption[];
  selectedValue: string;
  onSelectionChange: (value: string) => void;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  selectedButtonStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  disabled?: boolean;
}
