import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createDividerStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      width: '100%',
      marginVertical: 16,
    },
    vertical: {
      flexDirection: 'column',
      height: '100%',
      marginHorizontal: 16,
    },
    line: {
      backgroundColor: theme.colors.border.primary,
    },
    horizontalLine: {
      height: 1,
      flex: 1,
    },
    verticalLine: {
      width: 1,
      flex: 1,
    },
    labelContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    label: {
      fontSize: 12,
      color: theme.colors.text.secondary,
      fontWeight: '500',
    },
  });
};
