import { ViewStyle } from 'react-native';

export type LoaderVariant = 'full-screen' | 'inline' | 'button';
export type LoaderSize = 'small' | 'medium' | 'large';

export interface LoaderProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  color?: string;
  isVisible?: boolean;
  style?: ViewStyle;
  text?: string;
}
