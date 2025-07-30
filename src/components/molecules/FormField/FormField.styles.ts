import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createFormFieldStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    labelContainer: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.text.primary,
    },
    required: {
      color: theme.colors.status.error,
      marginLeft: 4,
    },
  });
};
