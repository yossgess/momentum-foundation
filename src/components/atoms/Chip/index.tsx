import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { ChipProps } from './Chip.types';
import { createChipStyles } from './Chip.styles';

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onPress,
  variant = 'filled',
  size = 'medium',
  disabled = false,
  icon,
  style,
  textStyle,
}) => {
  const styles = createChipStyles();

  const handlePress = () => {
    if (disabled) return;
    onPress?.();
  };

  const getContainerStyle = () => {
    const baseStyle: any[] = [styles.container, styles[size]];
    
    if (variant === 'filled') {
      baseStyle.push(selected ? styles.filledSelected : styles.filled);
    } else if (variant === 'outlined') {
      baseStyle.push(selected ? styles.outlinedSelected : styles.outlined);
    } else if (variant === 'ghost') {
      baseStyle.push(selected ? styles.ghostSelected : styles.ghost);
    }

    if (disabled) {
      baseStyle.push(styles.disabled);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle: any[] = [styles.text, styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles]];
    
    if (variant === 'filled') {
      baseStyle.push(selected ? styles.textFilledSelected : styles.textFilled);
    } else if (variant === 'outlined') {
      baseStyle.push(selected ? styles.textOutlinedSelected : styles.textOutlined);
    } else if (variant === 'ghost') {
      baseStyle.push(selected ? styles.textGhostSelected : styles.textGhost);
    }

    return baseStyle;
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        ...getContainerStyle(),
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={[...getTextStyle(), textStyle]}>{label}</Text>
      </View>
    </Pressable>
  );
};
