import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createInputStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: theme.spacing[4],
    },

    labelContainer: {
      flexDirection: 'row',
      marginBottom: theme.spacing[2],
    },

    label: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: '500',
      color: theme.colors.text.primary,
    },

    required: {
      color: theme.colors.status.error,
      marginLeft: theme.spacing[1],
    },

    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme.borderRadius.lg,
      borderWidth: 1,
    },

    default: {
      backgroundColor: theme.colors.surface.primary,
      borderColor: theme.colors.border.primary,
    },

    filled: {
      backgroundColor: theme.colors.surface.secondary,
      borderColor: 'transparent',
    },

    outlined: {
      backgroundColor: 'transparent',
      borderColor: theme.colors.border.primary,
    },

    small: {
      minHeight: 36,
      paddingHorizontal: theme.spacing[3],
    },

    medium: {
      minHeight: 44,
      paddingHorizontal: theme.spacing[4],
    },

    large: {
      minHeight: 52,
      paddingHorizontal: theme.spacing[5],
    },

    focused: {
      borderColor: theme.colors.primary.main,
      borderWidth: 2,
    },

    error: {
      borderColor: theme.colors.status.error,
      borderWidth: 2,
    },

    disabled: {
      opacity: 0.6,
      backgroundColor: theme.colors.surface.tertiary,
    },

    input: {
      flex: 1,
      fontSize: theme.typography.fontSizes.base,
      color: theme.colors.text.primary,
      paddingVertical: 0,
    },

    inputSmall: {
      fontSize: theme.typography.fontSizes.sm,
    },

    inputMedium: {
      fontSize: theme.typography.fontSizes.base,
    },

    inputLarge: {
      fontSize: theme.typography.fontSizes.lg,
    },

    placeholder: {
      color: theme.colors.text.tertiary,
    },

    leftIcon: {
      marginRight: theme.spacing[3],
    },

    rightIcon: {
      marginLeft: theme.spacing[3],
    },

    helperContainer: {
      marginTop: theme.spacing[1],
    },

    helperText: {
      fontSize: theme.typography.fontSizes.xs,
      color: theme.colors.text.secondary,
    },

    errorText: {
      fontSize: theme.typography.fontSizes.xs,
      color: theme.colors.status.error,
    },
  });
};
