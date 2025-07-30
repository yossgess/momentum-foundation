import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../../theme';

const { width: screenWidth } = Dimensions.get('window');

export const createImageCarouselStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
    },
    scrollView: {
      flex: 1,
    },
    imageContainer: {
      width: screenWidth,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    pagination: {
      position: 'absolute',
      top: 16,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: theme.colors.primary.main,
    },
    inactiveDot: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  });
};
