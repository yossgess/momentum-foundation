import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

export const createMatchModalStyles = () => {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '90%',
      maxWidth: 400,
    },
    modal: {
      backgroundColor: theme.colors.surface.primary,
      borderRadius: 20,
      overflow: 'hidden',
    },
    content: {
      padding: 32,
      alignItems: 'center',
    },
    title: {
      marginBottom: 32,
      textAlign: 'center',
      color: theme.colors.primary.main,
    },
    imagesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    imageWrapper: {
      borderRadius: 60,
      overflow: 'hidden',
      borderWidth: 4,
      borderColor: theme.colors.primary.main,
    },
    userImage: {
      width: 120,
      height: 120,
    },
    heartContainer: {
      marginHorizontal: 20,
    },
    heartIcon: {
      fontSize: 40,
    },
    message: {
      textAlign: 'center',
      marginBottom: 32,
      lineHeight: 22,
    },
    actions: {
      width: '100%',
      gap: 12,
    },
    primaryButton: {
      width: '100%',
    },
    secondaryButton: {
      width: '100%',
    },
  });
};
