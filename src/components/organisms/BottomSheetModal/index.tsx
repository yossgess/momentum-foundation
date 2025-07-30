import React, { useEffect, useRef } from 'react';
import { View, Text, Modal, Pressable, Animated } from 'react-native';
import { BottomSheetModalProps } from './BottomSheetModal.types';
import { createBottomSheetModalStyles } from './BottomSheetModal.styles';

export const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  title,
  snapPoints = ['50%'],
  children,
  visible,
  onClose,
  style,
  enablePanDownToClose = true,
  backdropOpacity = 0.5,
}) => {
  const styles = createBottomSheetModalStyles();
  const translateY = useRef(new Animated.Value(300)).current;
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
          toValue: backdropOpacity,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 300,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, backdropOpacity]);

  const handleBackdropPress = () => {
    onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Animated.View style={[styles.overlay, { opacity }]}>
        <Pressable style={{ flex: 1 }} onPress={handleBackdropPress} />
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY }],
            },
            style,
          ]}
        >
          {enablePanDownToClose && (
            <View style={styles.handle} />
          )}
          
          {title && (
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
          
          <View style={styles.content}>
            {children}
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};
