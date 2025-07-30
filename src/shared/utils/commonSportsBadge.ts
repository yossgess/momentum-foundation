import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export interface SportBadgeProps {
  sport: string;
  icon?: string;
  size?: 'small' | 'medium' | 'large';
}

export const createSportBadgeStyles = (size: 'small' | 'medium' | 'large' = 'medium') => {
  return StyleSheet.create({
    badge: {
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: size === 'small' ? theme.spacing[1] : theme.spacing[2],
      paddingVertical: size === 'small' ? theme.spacing[1] : theme.spacing[1],
      borderRadius: theme.spacing[2],
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      fontSize: size === 'small' ? theme.typography.fontSizes.xs : theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.background.primary,
      marginLeft: theme.spacing[1],
    },
    icon: {
      marginRight: theme.spacing[1],
    },
  });
};

export const getSportBadgeIconSize = (size: 'small' | 'medium' | 'large' = 'medium') => {
  return size === 'small' ? 10 : size === 'large' ? 16 : 12;
};
