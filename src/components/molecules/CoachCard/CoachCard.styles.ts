import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createCoachCardStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface.primary,
      borderRadius: theme.spacing[4],
      padding: theme.spacing[4],
      marginBottom: theme.spacing[3],
      borderWidth: 1,
      borderColor: theme.colors.border.primary,
      shadowColor: theme.colors.background.primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    pressed: {
      opacity: 0.8,
      transform: [{ scale: 0.98 }],
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing[3],
    },
    avatarContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: theme.spacing[3],
      overflow: 'hidden',
      backgroundColor: theme.colors.surface.secondary,
    },
    avatar: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    avatarPlaceholder: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surface.secondary,
    },
    info: {
      flex: 1,
    },
    name: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing[1],
    },
    specialty: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing[1],
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingStars: {
      flexDirection: 'row',
      marginRight: theme.spacing[2],
    },
    ratingText: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
    },
    sportBadge: {
      position: 'absolute',
      top: -4,
      right: -4,
      backgroundColor: theme.colors.primary.main,
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.primary.main,
    },
  });
};
