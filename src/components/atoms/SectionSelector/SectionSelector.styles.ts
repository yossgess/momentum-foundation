import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSectionSelectorStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.surface.primary,
      borderRadius: 12,
      padding: 4,
    },
    button: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedButton: {
      backgroundColor: theme.colors.primary.main,
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.colors.text.secondary,
    },
    selectedText: {
      color: theme.colors.text.inverse,
      fontWeight: '600',
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
