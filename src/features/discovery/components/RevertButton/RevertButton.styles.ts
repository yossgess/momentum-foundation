import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const createRevertButtonStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: theme.colors.background.secondary,
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
    },
    medium: {
      width: 56,
      height: 56,
    },
    large: {
      width: 64,
      height: 64,
    },
    pressed: {
      opacity: 0.8,
      transform: [{ scale: 0.95 }],
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
