import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const createFiltersChipGroupStyles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: 8,
    },
    scrollContent: {
      paddingHorizontal: 16,
      gap: 8,
    },
    chip: {
      marginRight: 8,
    },
  });
};
