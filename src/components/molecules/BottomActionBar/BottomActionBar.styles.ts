import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createBottomActionBarStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.background.primary,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border.primary,
      gap: 12,
    },
    primaryButton: {
      flex: 1,
    },
    secondaryButton: {
      flex: 1,
    },
  });
};
