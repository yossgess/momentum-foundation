import React from 'react';
import { View, Text, Switch as RNSwitch } from 'react-native';
import { SwitchProps } from './Switch.types';
import { createSwitchStyles } from './Switch.styles';
import { theme } from '../../../theme';

export const Switch: React.FC<SwitchProps> = ({
  value,
  onToggle,
  label,
  disabled = false,
  style,
  trackColor = {
    false: theme.colors.surface.secondary,
    true: theme.colors.primary.main,
  },
  thumbColor = theme.colors.text.primary,
}) => {
  const styles = createSwitchStyles();

  return (
    <View style={[styles.container, disabled && styles.disabled, style]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <View style={styles.switchContainer}>
        <RNSwitch
          value={value}
          onValueChange={onToggle}
          disabled={disabled}
          trackColor={trackColor}
          thumbColor={thumbColor}
          ios_backgroundColor={trackColor.false}
        />
      </View>
    </View>
  );
};
