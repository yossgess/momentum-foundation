import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TagProps } from './Tag.types';
import { createTagStyles } from './Tag.styles';
import { theme } from '../../../theme';

export const Tag: React.FC<TagProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  onPress,
  onClose,
  disabled = false,
  style,
  textStyle,
  icon,
}) => {
  const styles = createTagStyles();

  const handlePress = () => {
    if (disabled) return;
    onPress?.();
  };

  const handleClose = () => {
    if (disabled) return;
    onClose?.();
  };

  const getContainerStyle = () => {
    return [
      styles.container,
      styles[variant],
      styles[size],
      disabled && styles.disabled,
      style,
    ] as any;
  };

  const getTextStyle = () => {
    return [
      styles.text,
      styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
      styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
      textStyle,
    ] as any;
  };

  const content = (
    <>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={getTextStyle()}>{label}</Text>
      {variant === 'closable' && onClose && (
        <Pressable onPress={handleClose} style={styles.closeButton}>
          <Ionicons
            name="close"
            size={14}
            color={theme.colors.text.secondary}
          />
        </Pressable>
      )}
    </>
  );

  if (onPress && !disabled) {
    return (
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          getContainerStyle(),
          pressed && styles.pressable,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={getContainerStyle()}>{content}</View>;
};
