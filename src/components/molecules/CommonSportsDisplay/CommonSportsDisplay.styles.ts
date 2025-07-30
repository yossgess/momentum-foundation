import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createCommonSportsDisplayStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
    label: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing[1],
    },
    sportsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    moreText: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.secondary,
      marginLeft: theme.spacing[1],
      alignSelf: 'center',
    },
  });
};
