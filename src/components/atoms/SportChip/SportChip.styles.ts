import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSportChipStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      borderRadius: theme.spacing[6],
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
      backgroundColor: theme.colors.surface.primary,
      marginRight: theme.spacing[2],
      marginBottom: theme.spacing[2],
    },
    selected: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    disabled: {
      opacity: 0.5,
    },
    small: {
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
    },
    medium: {
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
    },
    large: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
    },
    icon: {
      marginRight: theme.spacing[1],
    },
    text: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
    },
    selectedText: {
      color: theme.colors.background.primary,
    },
  });
};
