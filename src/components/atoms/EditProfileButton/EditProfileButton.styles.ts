import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createEditProfileButtonStyles = () => {
  return StyleSheet.create({
    floating: {
      position: 'absolute',
      bottom: theme.spacing[4],
      right: theme.spacing[4],
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    inline: {
      alignSelf: 'flex-start',
    },
  });
};
