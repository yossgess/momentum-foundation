import React, { useState } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InputFieldProps } from './InputField.types';
import { createInputFieldStyles } from './InputField.styles';
import { theme } from '../../../theme';

export const InputField: React.FC<InputFieldProps> = ({
  variant = 'default',
  label,
  placeholder,
  value,
  onChangeText,
  error,
  helperText,
  leftIcon,
  rightIcon,
  disabled = false,
  required = false,
  containerStyle,
  inputStyle,
  labelStyle,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const styles = createInputFieldStyles();

  const getInputContainerStyle = () => {
    const baseStyle = [styles.inputContainer];

    if (isFocused && !error) {
      baseStyle.push(styles.focused as any);
    }

    if (error) {
      baseStyle.push(styles.error as any);
    }

    if (disabled) {
      baseStyle.push(styles.disabled as any);
    }

    return baseStyle as any;
  };

  const getKeyboardType = () => {
    switch (variant) {
      case 'numeric':
        return 'numeric';
      default:
        return 'default';
    }
  };

  const getSecureTextEntry = () => {
    return variant === 'password' && !isPasswordVisible;
  };

  const renderRightIcon = () => {
    if (variant === 'password') {
      return (
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.rightIcon}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={20}
            color={theme.colors.text.secondary}
          />
        </Pressable>
      );
    }

    if (rightIcon) {
      return <View style={styles.rightIcon}>{rightIcon}</View>;
    }

    return null;
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
          style={[styles.input, inputStyle]}
          keyboardType={getKeyboardType()}
          secureTextEntry={getSecureTextEntry()}
          {...textInputProps}
        />

        {renderRightIcon()}
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
