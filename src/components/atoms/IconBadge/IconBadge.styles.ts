import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createIconBadgeStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    badge: {
      position: 'absolute',
      top: -4,
      right: -4,
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 6,
    },
    text: {
      fontSize: 12,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    
    primary: {
      backgroundColor: theme.colors.primary.main,
    },
    secondary: {
      backgroundColor: theme.colors.secondary.main,
    },
    error: {
      backgroundColor: theme.colors.status.error,
    },
    warning: {
      backgroundColor: theme.colors.status.warning,
    },
    success: {
      backgroundColor: theme.colors.status.success,
    },
    
    small: {
      minWidth: 16,
      height: 16,
      borderRadius: 8,
    },
    medium: {
      minWidth: 20,
      height: 20,
      borderRadius: 10,
    },
    large: {
      minWidth: 24,
      height: 24,
      borderRadius: 12,
    },
    
    textSmall: {
      fontSize: 10,
    },
    textMedium: {
      fontSize: 12,
    },
    textLarge: {
      fontSize: 14,
    },
    
    textPrimary: {
      color: theme.colors.text.inverse,
    },
    textSecondary: {
      color: theme.colors.text.primary,
    },
    textError: {
      color: theme.colors.text.primary,
    },
    textWarning: {
      color: theme.colors.text.inverse,
    },
    textSuccess: {
      color: theme.colors.text.primary,
    },
  });
};
