import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createEmptyStateStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[8],
    },
    iconContainer: {
      marginBottom: theme.spacing[4],
      opacity: 0.6,
    },
    title: {
      fontSize: theme.typography.fontSizes.xl,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
      textAlign: 'center',
      marginBottom: theme.spacing[2],
    },
    description: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.secondary,
      textAlign: 'center',
      lineHeight: theme.typography.lineHeights.relaxed,
      marginBottom: theme.spacing[6],
    },
    actionButton: {
      marginTop: theme.spacing[2],
    },
  });
};
