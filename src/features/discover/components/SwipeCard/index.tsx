import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
  interpolate,
} from 'react-native-reanimated';
import { Avatar } from '../../../../components/atoms/Avatar';
import { Chip } from '../../../../components/atoms/Chip';
import { ImageCarousel } from '../ImageCarousel';
import { SwipeCardProps } from './SwipeCard.types';
import { createSwipeCardStyles } from './SwipeCard.styles';

export const SwipeCard: React.FC<SwipeCardProps> = ({
  profile,
  onSwipeLeft,
  onSwipeRight,
  onPressImage,
  style,
}) => {
  const styles = createSwipeCardStyles();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {
      scale.value = withSpring(0.95);
    },
    onActive: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    onEnd: (event) => {
      const shouldSwipeLeft = event.translationX < -100;
      const shouldSwipeRight = event.translationX > 100;

      if (shouldSwipeLeft) {
        translateX.value = withSpring(-500);
        runOnJS(onSwipeLeft)();
      } else if (shouldSwipeRight) {
        translateX.value = withSpring(500);
        runOnJS(onSwipeRight)();
      } else {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
      
      scale.value = withSpring(1);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(translateX.value, [-300, 0, 300], [-30, 0, 30]);
    
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotation}deg` },
      ] as any,
    };
  });

  const leftOverlayStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translateX.value, [-150, -50, 0], [1, 0.5, 0]);
    return { opacity };
  });

  const rightOverlayStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translateX.value, [0, 50, 150], [0, 0.5, 1]);
    return { opacity };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyle, style]}>
        <View style={styles.card}>
          <ImageCarousel
            images={profile.images}
            onPress={onPressImage}
            style={styles.imageCarousel}
          />
          
          <Animated.View style={[styles.overlay, styles.leftOverlay, leftOverlayStyle]}>
            <Text style={styles.overlayText}>NOPE</Text>
          </Animated.View>
          
          <Animated.View style={[styles.overlay, styles.rightOverlay, rightOverlayStyle]}>
            <Text style={styles.overlayText}>LIKE</Text>
          </Animated.View>
          
          <View style={styles.profileInfo}>
            <View style={styles.header}>
              <View style={styles.nameAge}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.age}>{profile.age}</Text>
              </View>
              <View style={styles.distance}>
                <Text style={styles.distanceText}>{profile.distance}km away</Text>
              </View>
            </View>
            
            <View style={styles.sports}>
              {profile.sports.map((sport, index) => (
                <Chip
                  key={index}
                  label={sport}
                  variant="outlined"
                  size="small"
                  style={styles.sportChip}
                />
              ))}
            </View>
            
            <View style={styles.skillLevel}>
              <Text style={styles.skillLabel}>Skill Level:</Text>
              <Text style={styles.skillValue}>{profile.skillLevel}</Text>
            </View>
            
            {profile.commonInterests && profile.commonInterests.length > 0 && (
              <View style={styles.commonInterests}>
                <Text style={styles.commonLabel}>Common Interests:</Text>
                <Text style={styles.commonValue}>
                  {profile.commonInterests.join(', ')}
                </Text>
              </View>
            )}
          </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};
