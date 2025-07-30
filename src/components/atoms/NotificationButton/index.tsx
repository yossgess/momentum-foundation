import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconBadge } from '../IconBadge';
import { NotificationButtonProps } from './NotificationButton.types';
import { createNotificationButtonStyles } from './NotificationButton.styles';
import { theme } from '../../../theme';
import { logger } from '../../../shared/utils/logger';

export const NotificationButton: React.FC<NotificationButtonProps> = ({
  onPress,
  badgeCount = 0,
  size = 24,
  color = theme.colors.text.primary,
  disabled = false,
  style,
}) => {
  const styles = createNotificationButtonStyles();

  const handlePress = () => {
    logger.info('[NotificationButton] Notification button pressed', { badgeCount });
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        disabled && styles.disabled,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <Ionicons
        name="notifications-outline"
        size={size}
        color={color}
      />
      {badgeCount > 0 && (
        <IconBadge
          count={badgeCount}
          style={styles.badgeContainer}
        />
      )}
    </Pressable>
  );
};
