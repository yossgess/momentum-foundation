import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createListItemStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      backgroundColor: theme.colors.surface.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.primary,
    },
    pressable: {
      backgroundColor: theme.colors.surface.secondary,
    },
    disabled: {
      opacity: 0.5,
    },
    leftContainer: {
      marginRight: theme.spacing[3],
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    contentContainer: {
      flex: 1,
    },
    title: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing[1] / 2,
    },
    subtitle: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.secondary,
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: theme.spacing[3],
    },
    badge: {
      backgroundColor: theme.colors.status.error,
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spacing[2],
    },
    badgeText: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
    },
    chevron: {
      marginLeft: theme.spacing[2],
    },
  });
};
