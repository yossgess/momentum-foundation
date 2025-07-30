import React from 'react';
import { Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SettingsButtonProps } from './SettingsButton.types';
import { createSettingsButtonStyles } from './SettingsButton.styles';
import { theme } from '../../../theme';

export const SettingsButton: React.FC<SettingsButtonProps> = ({
  onPress,
  variant = 'icon-only',
  label = 'Settings',
  size = 24,
  color = theme.colors.text.primary,
  disabled = false,
  style,
}) => {
  const styles = createSettingsButtonStyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        disabled && styles.disabled,
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <Ionicons
        name="settings-outline"
        size={size}
        color={color}
      />
      {variant === 'icon-with-label' && (
        <Text style={styles.label}>{label}</Text>
      )}
    </Pressable>
  );
};
