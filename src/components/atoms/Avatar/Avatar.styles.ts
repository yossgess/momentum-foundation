import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createAvatarStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: theme.colors.surface.secondary,
    },
    image: {
      borderRadius: 50,
    },
    fallback: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary.main,
      borderRadius: 50,
    },
    fallbackText: {
      fontWeight: '600',
      color: theme.colors.text.inverse,
    },
    border: {
      borderWidth: 2,
      borderColor: theme.colors.primary.main,
    },
    
    small: {
      width: 32,
      height: 32,
    },
    medium: {
      width: 48,
      height: 48,
    },
    large: {
      width: 64,
      height: 64,
    },
    xlarge: {
      width: 96,
      height: 96,
    },
    
    textSmall: {
      fontSize: 12,
    },
    textMedium: {
      fontSize: 16,
    },
    textLarge: {
      fontSize: 20,
    },
    textXlarge: {
      fontSize: 28,
    },
  });
};
