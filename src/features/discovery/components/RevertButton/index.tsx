import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RevertButtonProps } from './RevertButton.types';
import { createRevertButtonStyles } from './RevertButton.styles';
import { theme } from '../../../../theme';

export const RevertButton: React.FC<RevertButtonProps> = ({
  onPress,
  disabled = false,
  size = 'large',
  style,
}) => {
  const styles = createRevertButtonStyles();

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
        name="arrow-back"
        size={size === 'large' ? 32 : 24}
        color={theme.colors.text.secondary}
      />
    </Pressable>
  );
};
