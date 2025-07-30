import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSearchBarStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface.primary,
      borderRadius: theme.spacing[6],
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
      minHeight: 48,
    },
    focused: {
      borderColor: theme.colors.primary.main,
      shadowColor: theme.colors.primary.main,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 2,
    },
    disabled: {
      opacity: 0.6,
      backgroundColor: theme.colors.surface.secondary,
    },
    searchIcon: {
      marginRight: theme.spacing[3],
    },
    input: {
      flex: 1,
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.primary,
      paddingVertical: 0,
    },
    placeholder: {
      color: theme.colors.text.secondary,
    },
    clearButton: {
      marginLeft: theme.spacing[2],
      padding: theme.spacing[1],
      borderRadius: theme.spacing[4],
    },
    clearIcon: {
      opacity: 0.6,
    },
  });
};
