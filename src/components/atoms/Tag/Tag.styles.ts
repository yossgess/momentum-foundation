import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createTagStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme.spacing[4],
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[1],
    },
    default: {
      backgroundColor: theme.colors.surface.secondary,
      borderWidth: 0,
    },
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
    },
    selected: {
      backgroundColor: theme.colors.primary.main,
      borderWidth: 0,
    },
    closable: {
      backgroundColor: theme.colors.surface.secondary,
      borderWidth: 0,
      paddingRight: theme.spacing[1],
    },
    small: {
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1] / 2,
    },
    medium: {
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[1],
    },
    large: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[2],
    },
    text: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.primary,
    },
    textDefault: {
      color: theme.colors.text.primary,
    },
    textOutlined: {
      color: theme.colors.text.primary,
    },
    textSelected: {
      color: theme.colors.background.primary,
    },
    textClosable: {
      color: theme.colors.text.primary,
    },
    textSmall: {
      fontSize: theme.typography.fontSizes.xs,
    },
    textMedium: {
      fontSize: theme.typography.fontSizes.sm,
    },
    textLarge: {
      fontSize: theme.typography.fontSizes.base,
    },
    icon: {
      marginRight: theme.spacing[1],
    },
    closeButton: {
      marginLeft: theme.spacing[1],
      padding: theme.spacing[1] / 2,
    },
    disabled: {
      opacity: 0.5,
    },
    pressable: {
      opacity: 0.8,
    },
  });
};
