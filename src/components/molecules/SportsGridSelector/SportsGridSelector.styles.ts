import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSportsGridSelectorStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    sportItem: {
      marginBottom: theme.spacing[2],
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
