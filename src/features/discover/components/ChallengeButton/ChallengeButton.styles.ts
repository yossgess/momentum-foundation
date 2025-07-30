import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const createChallengeButtonStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: theme.colors.surface.primary,
      borderWidth: 2,
      borderColor: theme.colors.primary.main,
      elevation: 4,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 4,
    },
    medium: {
      width: 56,
      height: 56,
    },
    large: {
      width: 72,
      height: 72,
    },
    pressed: {
      transform: [{ scale: 0.95 }],
      backgroundColor: theme.colors.primary.main,
    },
    disabled: {
      opacity: 0.5,
      borderColor: theme.colors.border.primary,
    },
  });
};
