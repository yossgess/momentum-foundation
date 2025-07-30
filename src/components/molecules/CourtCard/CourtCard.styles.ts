import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createCourtCardStyles = () => {
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
      height: 100,
      borderRadius: theme.spacing[3],
      marginBottom: theme.spacing[3],
      overflow: 'hidden',
      backgroundColor: theme.colors.surface.secondary,
      position: 'relative',
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
    favoriteButton: {
      position: 'absolute',
      top: theme.spacing[2],
      right: theme.spacing[2],
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 16,
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
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
    courtName: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      color: theme.colors.text.primary,
      flex: 1,
      marginRight: theme.spacing[2],
    },
    typeTag: {
      backgroundColor: theme.colors.accent.main,
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[2],
    },
    typeText: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.background.primary,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationIcon: {
      marginRight: theme.spacing[2],
    },
    locationText: {
      fontSize: theme.typography.fontSizes.sm,
      color: theme.colors.text.secondary,
      flex: 1,
    },
  });
};
