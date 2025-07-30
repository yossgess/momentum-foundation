import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { InputProps } from './Input.types';
import { createInputStyles } from './Input.styles';
import { theme } from '../../../theme';

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  variant = 'default',
  size = 'medium',
  disabled = false,
  error,
  helperText,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  labelStyle,
  required = false,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const styles = createInputStyles();

  const getInputContainerStyle = () => {
    const baseStyle: any[] = [styles.inputContainer, styles[variant], styles[size]];

    if (isFocused && !error) {
      baseStyle.push(styles.focused);
    }

    if (error) {
      baseStyle.push(styles.error);
    }

    if (disabled) {
      baseStyle.push(styles.disabled);
    }

    return baseStyle;
  };

  const getInputTextStyle = () => {
    return [
      styles.input,
      styles[`input${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
      inputStyle,
    ];
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          {required && <Text style={styles.required}>*</Text>}
        </View>
      )}

      <View style={getInputContainerStyle()}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.text.tertiary}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={getInputTextStyle()}
          {...textInputProps}
        />

        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>

      {(error || helperText) && (
        <View style={styles.helperContainer}>
          <Text style={error ? styles.errorText : styles.helperText}>
            {error || helperText}
          </Text>
        </View>
      )}
    </View>
  );
};
