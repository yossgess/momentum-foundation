import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createToastStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: theme.spacing[4],
      right: theme.spacing[4],
      zIndex: 9999,
      borderRadius: theme.spacing[3],
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    top: {
      top: theme.spacing[12],
    },
    bottom: {
      bottom: theme.spacing[12],
    },
    success: {
      backgroundColor: theme.colors.status.success,
    },
    error: {
      backgroundColor: theme.colors.status.error,
    },
    warning: {
      backgroundColor: theme.colors.status.warning,
    },
    info: {
      backgroundColor: theme.colors.secondary.main,
    },
    iconContainer: {
      marginRight: theme.spacing[3],
    },
    textContainer: {
      flex: 1,
    },
    message: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
    },
  });
};
