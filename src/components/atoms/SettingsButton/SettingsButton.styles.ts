import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSettingsButtonStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing[2],
    },
    disabled: {
      opacity: 0.5,
    },
    label: {
      marginLeft: theme.spacing[2],
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
    },
  });
};
