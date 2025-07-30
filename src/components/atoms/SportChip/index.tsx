import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SportChipProps } from './SportChip.types';
import { createSportChipStyles } from './SportChip.styles';
import { theme } from '../../../theme';

export const SportChip: React.FC<SportChipProps> = ({
  sport,
  icon,
  selected = false,
  disabled = false,
  size = 'medium',
  onPress,
  style,
}) => {
  const styles = createSportChipStyles();

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  const content = (
    <>
      {icon && (
        <Ionicons
          name={icon as any}
          size={size === 'small' ? 14 : size === 'large' ? 20 : 16}
          color={selected ? theme.colors.background.primary : theme.colors.text.primary}
          style={styles.icon}
        />
      )}
      <Text style={[
        styles.text,
        selected && styles.selectedText,
        styles[size],
      ]}>
        {sport}
      </Text>
    </>
  );

  if (onPress && !disabled) {
    return (
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.container,
          styles[size],
          selected && styles.selected,
          disabled && styles.disabled,
          pressed && { opacity: 0.8 },
          style,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View style={[
      styles.container,
      styles[size],
      selected && styles.selected,
      disabled && styles.disabled,
      style,
    ]}>
      {content}
    </View>
  );
};
