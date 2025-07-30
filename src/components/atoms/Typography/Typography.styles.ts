import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createTypographyStyles = () => {
  return StyleSheet.create({
    h1: {
      fontSize: theme.typography.fontSizes['4xl'],
      fontWeight: theme.typography.fontWeights.bold,
      lineHeight: theme.typography.lineHeights.tight,
      color: theme.colors.text.primary,
    },
    h2: {
      fontSize: theme.typography.fontSizes['2xl'],
      fontWeight: theme.typography.fontWeights.semibold,
      lineHeight: theme.typography.lineHeights.tight,
      color: theme.colors.text.primary,
    },
    body: {
      ...theme.typography.body.base,
      color: theme.colors.text.primary,
    },
    caption: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.normal,
      lineHeight: theme.typography.lineHeights.normal,
      color: theme.colors.text.secondary,
    },
  });
};
