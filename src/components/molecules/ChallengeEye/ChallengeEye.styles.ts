import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createChallengeEyeStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: theme.spacing[8],
    },
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[8],
    },
    errorText: {
      fontSize: theme.typography.fontSizes.base,
      color: theme.colors.status.error,
      textAlign: 'center',
      marginBottom: theme.spacing[4],
    },
    gridContainer: {
      padding: theme.spacing[4],
    },
    gridContent: {
      paddingBottom: theme.spacing[6],
    },
    challengeItem: {
      backgroundColor: theme.colors.surface.primary,
      borderRadius: theme.spacing[4],
      padding: theme.spacing[4],
      marginBottom: theme.spacing[4],
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
      flex: 1,
      marginHorizontal: theme.spacing[2],
    },
    pressed: {
      opacity: 0.8,
      transform: [{ scale: 0.98 }],
    },
    avatarContainer: {
      alignItems: 'center',
      marginBottom: theme.spacing[3],
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.colors.surface.secondary,
      marginBottom: theme.spacing[2],
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      borderRadius: 40,
      resizeMode: 'cover',
    },
    avatarPlaceholder: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
      backgroundColor: theme.colors.surface.secondary,
    },
    userInfo: {
      alignItems: 'center',
      marginBottom: theme.spacing[3],
    },
    userName: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      textAlign: 'center',
      marginBottom: theme.spacing[1],
    },
    userDetails: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
      textAlign: 'center',
    },
    sportsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: theme.spacing[1],
    },
    sportBadge: {
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[2],
      marginBottom: theme.spacing[1],
    },
    sportText: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.background.primary,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[8],
    },
    emptyIcon: {
      marginBottom: theme.spacing[4],
    },
    emptyTitle: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      textAlign: 'center',
      marginBottom: theme.spacing[2],
    },
    emptyMessage: {
      fontSize: theme.typography.fontSizes.base,
      color: theme.colors.text.secondary,
      textAlign: 'center',
      lineHeight: 24,
    },
  });
};
