import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconBadge } from '../IconBadge';
import { ChatButtonProps } from './ChatButton.types';
import { createChatButtonStyles } from './ChatButton.styles';
import { theme } from '../../../theme';
import { logger } from '../../../shared/utils/logger';

export const ChatButton: React.FC<ChatButtonProps> = ({
  onPress,
  unreadCount = 0,
  size = 24,
  color = theme.colors.text.primary,
  disabled = false,
  style,
}) => {
  const styles = createChatButtonStyles();

  const handlePress = () => {
    logger.info('[ChatButton] Chat button pressed', { unreadCount });
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
        name="chatbubble-outline"
        size={size}
        color={color}
      />
      {unreadCount > 0 && (
        <IconBadge
          count={unreadCount}
          style={styles.badgeContainer}
        />
      )}
    </Pressable>
  );
};
