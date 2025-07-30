import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createNavBarStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: theme.colors.background.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.primary,
      minHeight: 56,
    },
    leftSection: {
      flex: 1,
      alignItems: 'flex-start',
    },
    centerSection: {
      flex: 2,
      alignItems: 'center',
    },
    rightSection: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    backButton: {
      padding: 8,
      marginLeft: -8,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    actionButton: {
      padding: 8,
    },
    actionSpacing: {
      marginLeft: 8,
    },
  });
};
