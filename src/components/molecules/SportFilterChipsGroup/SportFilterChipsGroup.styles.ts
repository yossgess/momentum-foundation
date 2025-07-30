import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSportFilterChipsGroupStyles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: theme.spacing[2],
    },
    scrollContainer: {
      paddingHorizontal: theme.spacing[4],
    },
    chipContainer: {
      marginRight: theme.spacing[2],
    },
    countText: {
      fontSize: theme.typography.fontSizes.xs,
      color: theme.colors.text.secondary,
      marginLeft: theme.spacing[1],
    },
  });
};
