import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const createDiscoverScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.primary,
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      backgroundColor: theme.colors.background.primary,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.primary,
    },
    title: {
      fontSize: theme.typography.fontSizes.xl,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
      textAlign: 'center',
    },
    scrollContainer: {
      flex: 1,
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: theme.spacing[4],
      marginVertical: theme.spacing[2],
      backgroundColor: theme.colors.surface.primary,
      borderRadius: theme.spacing[4],
      shadowColor: theme.colors.shadow.dark,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.25,
      shadowRadius: 16,
      elevation: 12,
      overflow: 'hidden',
      minHeight: screenHeight * 0.7,
    },
    imageContainer: {
      height: screenHeight * 0.5,
      width: '100%',
    },
    carousel: {
      flex: 1,
    },
    profileInfo: {
      padding: theme.spacing[4],
      flex: 1,
    },
    nameRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing[3],
    },
    name: {
      fontSize: theme.typography.fontSizes.xl,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
    },
    distance: {
      fontSize: theme.typography.fontSizes.sm,
      fontWeight: theme.typography.fontWeights.medium,
      color: theme.colors.text.secondary,
      backgroundColor: theme.colors.surface.secondary,
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.spacing[2],
    },
    sportsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: theme.spacing[3],
    },
    sportChip: {
      marginRight: theme.spacing[2],
      marginBottom: theme.spacing[1],
    },
    bio: {
      fontSize: theme.typography.fontSizes.base,
      lineHeight: theme.typography.lineHeights.relaxed,
      color: theme.colors.text.secondary,
      marginTop: theme.spacing[2],
    },
    actionBar: {
      backgroundColor: theme.colors.surface.primary,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border.primary,
      paddingVertical: theme.spacing[3],
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[4],
    },
    actionButton: {
      flex: 1,
      marginHorizontal: theme.spacing[2],
    },
    revertButtonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    revertButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing[6],
    },
    emptyTitle: {
      fontSize: theme.typography.fontSizes.xl,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
      textAlign: 'center',
      marginBottom: theme.spacing[2],
    },
    emptySubtitle: {
      fontSize: theme.typography.fontSizes.base,
      color: theme.colors.text.secondary,
      textAlign: 'center',
      lineHeight: theme.typography.lineHeights.relaxed,
    },
  });
