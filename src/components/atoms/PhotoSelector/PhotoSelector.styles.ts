import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createPhotoSelectorStyles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surface.primary,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.colors.border.primary,
      borderStyle: 'dashed',
      padding: 20,
      minHeight: 120,
    },
    selectedContainer: {
      borderStyle: 'solid',
      borderColor: theme.colors.primary.main,
      padding: 0,
    },
    image: {
      width: '100%',
      height: 120,
      borderRadius: 10,
    },
    placeholder: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginBottom: 8,
    },
    text: {
      fontSize: 14,
      color: theme.colors.text.secondary,
      textAlign: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
