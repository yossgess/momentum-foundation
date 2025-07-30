import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Modal, Pressable, Animated } from 'react-native';
import { Image } from 'react-native';
import { Button } from '../../../../components/atoms/Button';
import { Typography } from '../../../../components/atoms/Typography';
import { MatchModalProps } from './MatchModal.types';
import { createMatchModalStyles } from './MatchModal.styles';
import { useTranslation } from '../../../../shared/utils/translations';

export const MatchModal: React.FC<MatchModalProps> = ({
  visible,
  currentUserImage,
  matchedUserImage,
  matchedUserName,
  onStartChat,
  onKeepSwiping,
  onClose,
}) => {
  const styles = createMatchModalStyles();
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: true,
          tension: 150,
          friction: 8,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 150,
          friction: 8,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(slideAnim, {
          toValue: 300,
          useNativeDriver: true,
          tension: 150,
          friction: 8,
        }),
        Animated.spring(scaleAnim, {
          toValue: 0.8,
          useNativeDriver: true,
          tension: 150,
          friction: 8,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false);
      });
    }
  }, [visible]);

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <Animated.View style={[styles.overlay, { opacity: opacityAnim }]}>
        <Pressable style={styles.overlay} onPress={onClose}>
          <Animated.View 
            style={[
              styles.container,
              {
                transform: [
                  { translateY: slideAnim },
                  { scale: scaleAnim }
                ]
              }
            ]}
          >
            <Pressable onPress={() => {}} style={styles.modal}>
              <View style={styles.content}>
                <Typography variant="h1" style={styles.title}>
                  {t.discovery.challengeAccepted}
                </Typography>
                
                <View style={styles.imagesContainer}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={{ uri: currentUserImage }}
                      style={styles.userImage}
                      resizeMode="cover"
                    />
                  </View>
                  
                  <View style={styles.heartContainer}>
                    <Text style={styles.heartIcon}>⚡</Text>
                  </View>
                  
                  <View style={styles.imageWrapper}>
                    <Image
                      source={{ uri: matchedUserImage }}
                      style={styles.userImage}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                
                <Typography variant="body" style={styles.message}>
                  You and {matchedUserName} have challenged each other!
                </Typography>
                
                <View style={styles.actions}>
                  <Button
                    variant="primary"
                    label={t.discovery.sendMessage}
                    onPress={onStartChat}
                    style={styles.primaryButton}
                  />
                  
                  <Button
                    variant="ghost"
                    label={t.common.continue}
                    onPress={onKeepSwiping}
                    style={styles.secondaryButton}
                  />
                </View>
              </View>
            </Pressable>
          </Animated.View>
        </Pressable>
      </Animated.View>
    </Modal>
  );
};
