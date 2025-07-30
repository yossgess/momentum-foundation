import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const createSwipeCardStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 600,
    },
    card: {
      flex: 1,
      backgroundColor: theme.colors.surface.primary,
      borderRadius: 16,
      overflow: 'hidden',
      elevation: 8,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 8,
    },
    imageCarousel: {
      height: 400,
    },
    overlay: {
      position: 'absolute',
      top: 50,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 3,
    },
    leftOverlay: {
      left: 20,
      borderColor: theme.colors.status.error,
      backgroundColor: 'rgba(255, 61, 61, 0.1)',
    },
    rightOverlay: {
      right: 20,
      borderColor: theme.colors.primary.main,
      backgroundColor: 'rgba(168, 255, 53, 0.1)',
    },
    overlayText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text.primary,
    },
    profileInfo: {
      padding: 16,
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    nameAge: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.text.primary,
      marginRight: 8,
    },
    age: {
      fontSize: 20,
      color: theme.colors.text.secondary,
    },
    distance: {
      backgroundColor: theme.colors.surface.secondary,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    distanceText: {
      fontSize: 12,
      color: theme.colors.text.secondary,
    },
    sports: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 12,
    },
    sportChip: {
      marginRight: 8,
      marginBottom: 4,
    },
    skillLevel: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    skillLabel: {
      fontSize: 14,
      color: theme.colors.text.secondary,
      marginRight: 8,
    },
    skillValue: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.primary.main,
    },
    commonInterests: {
      marginTop: 8,
    },
    commonLabel: {
      fontSize: 12,
      color: theme.colors.text.secondary,
      marginBottom: 4,
    },
    commonValue: {
      fontSize: 14,
      color: theme.colors.text.primary,
    },
  });
};
