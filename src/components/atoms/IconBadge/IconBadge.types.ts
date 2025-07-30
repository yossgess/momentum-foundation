import { ViewStyle, TextStyle } from 'react-native';

export type IconBadgeSize = 'small' | 'medium' | 'large';
export type IconBadgeVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'success';

export interface IconBadgeProps {
  count?: number;
  maxCount?: number;
  size?: IconBadgeSize;
  variant?: IconBadgeVariant;
  showZero?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode;
}
