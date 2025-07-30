import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createSkillLevelBadgeStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[4],
      alignSelf: 'flex-start',
    },
    small: {
      paddingHorizontal: theme.spacing[1],
      paddingVertical: theme.spacing[1] / 2,
    },
    medium: {
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
    },
    large: {
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
    },
    beginner: {
      backgroundColor: theme.colors.status.success,
    },
    intermediate: {
      backgroundColor: theme.colors.status.warning,
    },
    advanced: {
      backgroundColor: theme.colors.secondary.main,
    },
    expert: {
      backgroundColor: theme.colors.accent.main,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.background.primary,
      marginRight: theme.spacing[1],
    },
    smallDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
    },
    largeDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
    },
    text: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.background.primary,
      textTransform: 'uppercase',
    },
    smallText: {
      fontSize: theme.typography.fontSizes.xs - 2,
    },
    largeText: {
      fontSize: theme.typography.fontSizes.sm,
    },
  });
};
