import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { Button } from '../../atoms/Button';
import { ConfirmationModalProps } from './ConfirmationModal.types';
import { createConfirmationModalStyles } from './ConfirmationModal.styles';

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  confirmVariant = 'danger',
  loading = false,
  style,
}) => {
  const styles = createConfirmationModalStyles();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Pressable style={styles.overlay} onPress={onCancel}>
        <View style={[styles.container, style]}>
          <Pressable onPress={() => {}} style={styles.modal}>
            <View style={styles.content}>
              {title && (
                <Text style={styles.title}>{title}</Text>
              )}
              
              {message && (
                <Text style={styles.message}>{message}</Text>
              )}
              
              <View style={styles.actions}>
                <Button
                  variant="ghost"
                  label={cancelText}
                  onPress={onCancel}
                  style={styles.cancelButton}
                  disabled={loading}
                />
                
                <Button
                  variant={confirmVariant}
                  label={confirmText}
                  onPress={onConfirm}
                  style={styles.confirmButton}
                  loading={loading}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};
