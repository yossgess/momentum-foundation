import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createLoaderStyles = () => {
  return StyleSheet.create({
    fullScreenContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(11, 13, 16, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    inlineContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing[4],
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      marginTop: theme.spacing[3],
    },
    text: {
      color: theme.colors.text.primary,
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.medium,
      textAlign: 'center',
    },
    small: {
      transform: [{ scale: 0.8 }],
    },
    medium: {
      transform: [{ scale: 1 }],
    },
    large: {
      transform: [{ scale: 1.2 }],
    },
  });
};
