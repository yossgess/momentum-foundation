import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createButtonStyles = () => {
  return StyleSheet.create({
    container: {
      borderRadius: theme.borderRadius.lg,
      overflow: 'hidden',
      elevation: 2,
      shadowColor: theme.colors.shadow.dark,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },

    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius.lg,
    },

    primary: {
      backgroundColor: theme.colors.primary.main,
    },

    secondary: {
      backgroundColor: theme.colors.secondary.main,
    },

    ghost: {
      backgroundColor: 'transparent',
    },

    danger: {
      backgroundColor: theme.colors.status.error,
    },

    iconButton: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      width: 48,
      height: 48,
      padding: 0,
    },

    small: {
      paddingVertical: theme.spacing[3],
      paddingHorizontal: theme.spacing[4],
      minHeight: 36,
    },

    medium: {
      paddingVertical: theme.spacing[4],
      paddingHorizontal: theme.spacing[6],
      minHeight: 44,
    },

    large: {
      paddingVertical: theme.spacing[5],
      paddingHorizontal: theme.spacing[8],
      minHeight: 52,
    },

    disabled: {
      opacity: 0.6,
    },

    pressed: {
      transform: [{ scale: 0.98 }],
    },

    fullWidth: {
      width: '100%',
    },

    text: {
      fontWeight: '600',
      textAlign: 'center',
    },

    textPrimary: {
      color: theme.colors.text.inverse,
    },

    textSecondary: {
      color: theme.colors.text.primary,
    },

    textGhost: {
      color: theme.colors.primary.main,
    },

    textDanger: {
      color: theme.colors.text.primary,
    },

    textIconButton: {
      color: theme.colors.text.primary,
    },

    textSmall: {
      fontSize: theme.typography.fontSizes.sm,
    },

    textMedium: {
      fontSize: theme.typography.fontSizes.base,
    },

    textLarge: {
      fontSize: theme.typography.fontSizes.lg,
    },

    icon: {
      marginHorizontal: theme.spacing[2],
    },

    iconLeft: {
      marginRight: theme.spacing[2],
      marginLeft: 0,
    },

    iconRight: {
      marginLeft: theme.spacing[2],
      marginRight: 0,
    },

    loadingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
