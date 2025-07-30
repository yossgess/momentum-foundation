import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createDistanceRangeSelectorStyles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: theme.spacing[4],
      paddingHorizontal: theme.spacing[2],
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing[4],
    },
    icon: {
      marginRight: theme.spacing[2],
    },
    valueText: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      flex: 1,
      textAlign: 'center',
    },
    sliderContainer: {
      paddingHorizontal: theme.spacing[2],
    },
    slider: {
      height: 40,
    },
    disabled: {
      opacity: 0.6,
    },
  });
};
