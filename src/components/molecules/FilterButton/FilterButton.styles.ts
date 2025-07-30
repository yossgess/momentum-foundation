import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createFilterButtonStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surface.primary,
      borderRadius: theme.spacing[6],
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      minHeight: 44,
      position: 'relative',
    },
    active: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    disabled: {
      opacity: 0.5,
    },
    pressed: {
      opacity: 0.8,
    },
    small: {
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      minHeight: 36,
    },
    medium: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      minHeight: 44,
    },
    large: {
      paddingHorizontal: theme.spacing[5],
      paddingVertical: theme.spacing[4],
      minHeight: 52,
    },
    iconOnly: {
      width: 44,
      height: 44,
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
    iconOnlySmall: {
      width: 36,
      height: 36,
    },
    iconOnlyLarge: {
      width: 52,
      height: 52,
    },
    icon: {
      marginRight: 0,
    },
    iconWithText: {
      marginRight: theme.spacing[2],
    },
    text: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
    },
    activeText: {
      color: theme.colors.background.primary,
    },
    badgeContainer: {
      position: 'absolute',
      top: -6,
      right: -6,
      backgroundColor: theme.colors.status.error,
      borderRadius: 10,
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
    },
    badgeText: {
      fontSize: 12,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
    },
  });
};
