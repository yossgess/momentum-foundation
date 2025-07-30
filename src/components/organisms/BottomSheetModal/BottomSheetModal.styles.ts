import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../theme';

const { height: screenHeight } = Dimensions.get('window');

export const createBottomSheetModalStyles = () => {
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    },
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.surface.primary,
      borderTopLeftRadius: theme.spacing[4],
      borderTopRightRadius: theme.spacing[4],
      maxHeight: screenHeight * 0.9,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    handle: {
      width: 40,
      height: 4,
      backgroundColor: theme.colors.border.primary,
      borderRadius: 2,
      alignSelf: 'center',
      marginTop: theme.spacing[2],
      marginBottom: theme.spacing[3],
    },
    header: {
      paddingHorizontal: theme.spacing[4],
      paddingBottom: theme.spacing[3],
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.primary,
    },
    title: {
      fontSize: theme.typography.fontSizes.lg,
      fontWeight: theme.typography.fontWeights.bold,
      color: theme.colors.text.primary,
      textAlign: 'center',
    },
    content: {
      flex: 1,
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
    },
  });
};
