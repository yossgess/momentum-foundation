import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChallengeButtonProps } from './ChallengeButton.types';
import { createChallengeButtonStyles } from './ChallengeButton.styles';
import { theme } from '../../../../theme';

export const ChallengeButton: React.FC<ChallengeButtonProps> = ({
  onPress,
  disabled = false,
  size = 'large',
  style,
}) => {
  const styles = createChallengeButtonStyles();

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
        name="heart"
        size={size === 'large' ? 32 : 24}
        color={theme.colors.primary.main}
      />
    </Pressable>
  );
};
