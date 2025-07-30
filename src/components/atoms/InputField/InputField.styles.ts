import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createInputFieldStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    labelContainer: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    label: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.colors.text.primary,
    },
    required: {
      color: theme.colors.status.error,
      marginLeft: 4,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface.primary,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
      paddingHorizontal: 16,
      minHeight: 48,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: theme.colors.text.primary,
      paddingVertical: 12,
    },
    leftIcon: {
      marginRight: 12,
    },
    rightIcon: {
      marginLeft: 12,
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
      backgroundColor: theme.colors.surface.secondary,
      opacity: 0.6,
    },
    helperContainer: {
      marginTop: 4,
    },
    helperText: {
      fontSize: 12,
      color: theme.colors.text.secondary,
    },
    errorText: {
      fontSize: 12,
      color: theme.colors.status.error,
    },
  });
};
