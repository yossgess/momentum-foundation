import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChatInputBarProps } from './ChatInputBar.types';
import { createChatInputBarStyles } from './ChatInputBar.styles';
import { theme } from '../../../theme';

export const ChatInputBar: React.FC<ChatInputBarProps> = ({
  value,
  onChange,
  onSend,
  onAttach,
  placeholder = 'Type a message...',
  disabled = false,
  style,
  inputStyle,
  maxLength = 1000,
  multiline = true,
  showEmojiButton = true,
  showAttachButton = true,
}) => {
  const styles = createChatInputBarStyles();
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value.trim());
      onChange('');
    }
  };

  const canSend = value.trim().length > 0 && !disabled;

  return (
    <View style={[styles.container, disabled && styles.disabled, style]}>
      {showAttachButton && onAttach && (
        <Pressable
          onPress={onAttach}
          style={[styles.actionButton, styles.attachButton]}
          disabled={disabled}
        >
          <Ionicons
            name="attach"
            size={20}
            color={theme.colors.text.secondary}
          />
        </Pressable>
      )}

      <View style={styles.inputContainer}>
        {showEmojiButton && (
          <Pressable
            style={[styles.actionButton, styles.emojiButton]}
            disabled={disabled}
          >
            <Ionicons
              name="happy-outline"
              size={20}
              color={theme.colors.text.secondary}
            />
          </Pressable>
        )}

        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.tertiary}
          style={[styles.input, inputStyle]}
          multiline={multiline}
          maxLength={maxLength}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          textAlignVertical="center"
        />
      </View>

      <Pressable
        onPress={handleSend}
        style={[
          styles.actionButton,
          canSend ? styles.sendButton : styles.sendButtonDisabled,
        ]}
        disabled={!canSend}
      >
        <Ionicons
          name="send"
          size={20}
          color={canSend ? theme.colors.background.primary : theme.colors.text.secondary}
        />
      </Pressable>
    </View>
  );
};
