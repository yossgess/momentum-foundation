import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createAgeRangeSelectorStyles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: theme.spacing[4],
      paddingHorizontal: theme.spacing[2],
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing[4],
    },
    valueText: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      textAlign: 'center',
    },
    sliderContainer: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[2],
    },
    slider: {
      height: 50,
    },
    ageIndicators: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing[2],
      paddingHorizontal: theme.spacing[4],
    },
    ageIndicator: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
    },
    disabled: {
      opacity: 0.6,
    },
  });
};
