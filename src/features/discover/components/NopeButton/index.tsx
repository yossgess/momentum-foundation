import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NopeButtonProps } from './NopeButton.types';
import { createNopeButtonStyles } from './NopeButton.styles';
import { theme } from '../../../../theme';

export const NopeButton: React.FC<NopeButtonProps> = ({
  onPress,
  disabled = false,
  size = 'large',
  style,
}) => {
  const styles = createNopeButtonStyles();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.container,
        styles[size],
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Ionicons
        name="close"
        size={size === 'large' ? 32 : 24}
        color={theme.colors.status.error}
      />
    </Pressable>
  );
};
