import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ToastProps } from './Toast.types';
import { createToastStyles } from './Toast.styles';
import { theme } from '../../../theme';

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  position = 'bottom',
  duration = 3000,
  icon,
  visible = false,
  onHide,
  style,
}) => {
  const styles = createToastStyles();
  const translateY = useRef(new Animated.Value(position === 'top' ? -100 : 100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      hideToast();
    }
  }, [visible, duration]);

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: position === 'top' ? -100 : 100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide?.();
    });
  };

  const getDefaultIcon = () => {
    switch (type) {
      case 'success':
        return <Ionicons name="checkmark-circle" size={20} color={theme.colors.text.primary} />;
      case 'error':
        return <Ionicons name="close-circle" size={20} color={theme.colors.text.primary} />;
      case 'warning':
        return <Ionicons name="warning" size={20} color={theme.colors.text.primary} />;
      case 'info':
        return <Ionicons name="information-circle" size={20} color={theme.colors.text.primary} />;
      default:
        return null;
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        styles[position],
        styles[type],
        {
          transform: [{ translateY }],
          opacity,
        },
        style,
      ]}
    >
      <View style={styles.iconContainer}>
        {icon || getDefaultIcon()}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
};
