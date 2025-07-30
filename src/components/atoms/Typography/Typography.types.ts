import { TextProps, TextStyle } from 'react-native';

export type TypographyVariant = 'h1' | 'h2' | 'body' | 'caption';

export interface TypographyProps extends Omit<TextProps, 'style'> {
  variant?: TypographyVariant;
  children: React.ReactNode;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  style?: TextStyle;
  numberOfLines?: number;
}
