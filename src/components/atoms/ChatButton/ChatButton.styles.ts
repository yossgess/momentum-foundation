import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createChatButtonStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      padding: theme.spacing[2],
    },
    disabled: {
      opacity: 0.5,
    },
    badgeContainer: {
      position: 'absolute',
      top: theme.spacing[1],
      right: theme.spacing[1],
      zIndex: 1,
    },
  });
};
