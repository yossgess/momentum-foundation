import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createIconButtonGroupStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      marginHorizontal: 4,
    },
    buttonSpacing: {
      marginLeft: 8,
    },
  });
};
