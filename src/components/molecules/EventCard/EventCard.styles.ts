import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createEventCardStyles = () => {
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
    imageContainer: {
      width: '100%',
      height: 120,
      borderRadius: theme.spacing[3],
      marginBottom: theme.spacing[3],
      overflow: 'hidden',
      backgroundColor: theme.colors.surface.secondary,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    imagePlaceholder: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surface.secondary,
    },
    content: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: theme.spacing[2],
    },
    title: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      flex: 1,
      marginRight: theme.spacing[2],
    },
    sportPill: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[3],
    },
    sportIcon: {
      marginRight: theme.spacing[1],
    },
    sportText: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.background.primary,
    },
    details: {
      marginBottom: theme.spacing[2],
    },
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing[1],
    },
    detailIcon: {
      marginRight: theme.spacing[2],
    },
    detailText: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
      flex: 1,
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
    participantBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.accent.main,
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[2],
    },
    participantText: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.background.primary,
      marginLeft: theme.spacing[1],
    },
  });
};
