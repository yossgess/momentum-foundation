import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSwitchStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    labelContainer: {
      flex: 1,
      marginRight: theme.spacing[3],
    },
    label: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
    },
    switchContainer: {
      flexShrink: 0,
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
