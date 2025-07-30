import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../Button';
import { EditProfileButtonProps } from './EditProfileButton.types';
import { createEditProfileButtonStyles } from './EditProfileButton.styles';
import { theme } from '../../../theme';
import { logger } from '../../../shared/utils/logger';

export const EditProfileButton: React.FC<EditProfileButtonProps> = ({
  onPress,
  variant = 'inline',
  buttonVariant = 'primary',
  label = 'Edit Profile',
  disabled = false,
  style,
}) => {
  const styles = createEditProfileButtonStyles();

  const handlePress = () => {
    logger.info('[EditProfileButton] Edit profile button pressed', { variant });
    onPress();
  };

  if (variant === 'floating') {
    return (
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.floating,
          pressed && { opacity: 0.8 },
          disabled && { opacity: 0.5 },
          style,
        ]}
      >
        <Ionicons
          name="pencil"
          size={24}
          color={theme.colors.background.primary}
        />
      </Pressable>
    );
  }

  return (
    <Button
      label={label}
      onPress={handlePress}
      variant={buttonVariant}
      icon="pencil"
      disabled={disabled}
      style={style}
    />
  );
};
