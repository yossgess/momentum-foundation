import React, { useState } from 'react';
import { View, ScrollView, Pressable, Dimensions } from 'react-native';
import { Image } from 'react-native';
import { ImageCarouselProps } from './ImageCarousel.types';
import { createImageCarouselStyles } from './ImageCarousel.styles';

const { width: screenWidth } = Dimensions.get('window');

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  onPress,
  style,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const styles = createImageCarouselStyles();

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {images.map((image, index) => (
          <Pressable
            key={index}
            onPress={() => onPress?.(index)}
            style={styles.imageContainer}
          >
            <Image
              source={{ uri: image }}
              style={styles.image}
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </ScrollView>
      
      {images.length > 1 && (
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};
