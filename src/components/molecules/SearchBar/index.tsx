import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SearchBarProps } from './SearchBar.types';
import { createSearchBarStyles } from './SearchBar.styles';
import { theme } from '../../../theme';

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  onClear,
  onSubmit,
  style,
  inputStyle,
  disabled = false,
  autoFocus = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const styles = createSearchBarStyles();

  const handleClear = () => {
    onChangeText('');
    if (onClear) {
      onClear();
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  const showClearButton = value.length > 0 && !disabled;

  return (
    <View style={[
      styles.container,
      isFocused && styles.focused,
      disabled && styles.disabled,
      style,
    ]}>
      <Ionicons
        name="search"
        size={20}
        color={theme.colors.text.secondary}
        style={styles.searchIcon}
      />
      
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.text.secondary}
        style={[styles.input, inputStyle]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
        editable={!disabled}
        autoFocus={autoFocus}
        autoCorrect={false}
        autoCapitalize="none"
      />

      {showClearButton && (
        <Pressable
          onPress={handleClear}
          style={styles.clearButton}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons
            name="close-circle"
            size={18}
            color={theme.colors.text.secondary}
            style={styles.clearIcon}
          />
        </Pressable>
      )}
    </View>
  );
};
