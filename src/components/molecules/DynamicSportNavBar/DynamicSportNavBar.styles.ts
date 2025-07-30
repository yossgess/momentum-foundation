import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createDynamicSportNavBarStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.surface.primary,
      paddingTop: theme.spacing[3],
      paddingBottom: theme.spacing[4],
      paddingHorizontal: theme.spacing[2],
      borderTopLeftRadius: theme.spacing[4],
      borderTopRightRadius: theme.spacing[4],
      shadowColor: theme.colors.shadow.dark,
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 8,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border.primary,
    },
    tabsContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    gradientOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: theme.colors.primary.main,
      opacity: 0.6,
    },
  });

export const createNavBarItemStyles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: theme.spacing[2],
      paddingHorizontal: theme.spacing[1],
      minWidth: 60,
    },
    iconContainer: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 20,
      marginBottom: theme.spacing[1],
    },
    activeIndicator: {
      position: 'absolute',
      bottom: -8,
      width: 4,
      height: 4,
      borderRadius: 2,
    },
    label: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.medium,
      textAlign: 'center',
      marginTop: theme.spacing[1],
    },
  });
