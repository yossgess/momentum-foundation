import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const createDiscoverScreenStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[2],
      backgroundColor: theme.colors.background.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.primary,
      zIndex: 10,
    },
    title: {
      color: theme.colors.text.primary,
      fontWeight: '600',
    },
    profileCard: {
      flex: 1,
      backgroundColor: theme.colors.background.secondary,
      marginHorizontal: theme.spacing[4],
      marginTop: theme.spacing[2],
      marginBottom: 100,
      borderRadius: theme.spacing[4],
      overflow: 'hidden',
      shadowColor: theme.colors.shadow.dark,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.15,
      shadowRadius: 16,
      elevation: 8,
    },
    imageSection: {
      height: '65%',
      position: 'relative',
    },
    profileInfo: {
      flex: 1,
      padding: theme.spacing[4],
      justifyContent: 'space-between',
    },
    nameAgeRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: theme.spacing[2],
    },
    name: {
      color: theme.colors.text.primary,
      fontWeight: '700',
      marginRight: theme.spacing[2],
      fontSize: 24,
    },
    age: {
      color: theme.colors.text.secondary,
      fontWeight: '500',
      fontSize: 20,
    },
    distanceContainer: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.background.tertiary,
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[4],
      marginBottom: theme.spacing[3],
    },
    distance: {
      color: theme.colors.text.secondary,
      fontSize: 12,
      fontWeight: '600',
    },
    sportsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing[2],
      marginBottom: theme.spacing[3],
    },
    bio: {
      color: theme.colors.text.secondary,
      lineHeight: 20,
      fontSize: 14,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[4],
      backgroundColor: theme.colors.background.primary,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border.primary,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[6],
    },
    emptyTitle: {
      color: theme.colors.text.primary,
      marginBottom: theme.spacing[2],
      textAlign: 'center',
    },
    emptyMessage: {
      color: theme.colors.text.secondary,
      textAlign: 'center',
      lineHeight: 20,
    },
  });
};
