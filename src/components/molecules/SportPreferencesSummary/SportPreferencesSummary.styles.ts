import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSportPreferencesSummaryStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface.primary,
      borderRadius: theme.spacing[3],
      padding: theme.spacing[4],
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing[3],
    },
    title: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
    },
    editButton: {
      padding: theme.spacing[1],
    },
    preferenceItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing[2],
    },
    sportInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    sportIcon: {
      marginRight: theme.spacing[2],
    },
    sportName: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
      flex: 1,
    },
    moreText: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
      textAlign: 'center',
      marginTop: theme.spacing[2],
    },
  });
};
