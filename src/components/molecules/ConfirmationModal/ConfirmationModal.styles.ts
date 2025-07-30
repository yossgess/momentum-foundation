import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createConfirmationModalStyles = () => {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '90%',
      maxWidth: 400,
    },
    modal: {
      backgroundColor: theme.colors.surface.primary,
      borderRadius: 16,
      overflow: 'hidden',
    },
    content: {
      padding: 24,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: theme.colors.text.primary,
      marginBottom: 12,
      textAlign: 'center',
    },
    message: {
      fontSize: 16,
      color: theme.colors.text.secondary,
      marginBottom: 24,
      textAlign: 'center',
      lineHeight: 22,
    },
    actions: {
      flexDirection: 'row',
      gap: 12,
    },
    cancelButton: {
      flex: 1,
    },
    confirmButton: {
      flex: 1,
    },
  });
};
