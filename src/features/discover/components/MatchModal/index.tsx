import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { Image } from 'react-native';
import { Button } from '../../../../components/atoms/Button';
import { Typography } from '../../../../components/atoms/Typography';
import { MatchModalProps } from './MatchModal.types';
import { createMatchModalStyles } from './MatchModal.styles';

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

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.container}>
          <Pressable onPress={() => {}} style={styles.modal}>
            <View style={styles.content}>
              <Typography variant="h1" style={styles.title}>
                It's a Match!
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
                  <Text style={styles.heartIcon}>💚</Text>
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
                You and {matchedUserName} have liked each other!
              </Typography>
              
              <View style={styles.actions}>
                <Button
                  variant="primary"
                  label="Start Chatting"
                  onPress={onStartChat}
                  style={styles.primaryButton}
                />
                
                <Button
                  variant="ghost"
                  label="Keep Swiping"
                  onPress={onKeepSwiping}
                  style={styles.secondaryButton}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};
