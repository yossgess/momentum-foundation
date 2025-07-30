import { ViewStyle, TextStyle } from 'react-native';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  orientation?: DividerOrientation;
  label?: string;
  style?: ViewStyle;
  lineStyle?: ViewStyle;
  textStyle?: TextStyle;
  color?: string;
  thickness?: number;
}
