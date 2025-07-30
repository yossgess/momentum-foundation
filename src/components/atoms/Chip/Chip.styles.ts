import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createChipStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme.borderRadius.full,
      borderWidth: 1,
    },

    filled: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },

    filledSelected: {
      backgroundColor: theme.colors.primary.dark,
      borderColor: theme.colors.primary.dark,
    },

    outlined: {
      backgroundColor: 'transparent',
      borderColor: theme.colors.border.primary,
    },

    outlinedSelected: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },

    ghost: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },

    ghostSelected: {
      backgroundColor: theme.colors.surface.secondary,
      borderColor: 'transparent',
    },

    small: {
      paddingVertical: theme.spacing[1],
      paddingHorizontal: theme.spacing[3],
      minHeight: 28,
    },

    medium: {
      paddingVertical: theme.spacing[2],
      paddingHorizontal: theme.spacing[4],
      minHeight: 32,
    },

    large: {
      paddingVertical: theme.spacing[3],
      paddingHorizontal: theme.spacing[5],
      minHeight: 40,
    },

    disabled: {
      opacity: 0.6,
    },

    pressed: {
      transform: [{ scale: 0.96 }],
    },

    text: {
      fontWeight: '500',
      textAlign: 'center',
    },

    textFilled: {
      color: theme.colors.text.inverse,
    },

    textFilledSelected: {
      color: theme.colors.text.primary,
    },

    textOutlined: {
      color: theme.colors.text.secondary,
    },

    textOutlinedSelected: {
      color: theme.colors.text.inverse,
    },

    textGhost: {
      color: theme.colors.text.secondary,
    },

    textGhostSelected: {
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
  });
};
