import React, { useState } from 'react';
import { Text, View, Pressable, Platform } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { DateTimePickerProps } from './DateTimePicker.types';
import { createDateTimePickerStyles } from './DateTimePicker.styles';
import { theme } from '../../../theme';

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  mode = 'date',
  value,
  onDateChange,
  label,
  placeholder,
  error,
  disabled = false,
  required = false,
  minimumDate,
  maximumDate,
  containerStyle,
  inputStyle,
  labelStyle,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const styles = createDateTimePickerStyles();

  const formatDate = (date: Date) => {
    if (mode === 'time') {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (mode === 'datetime') {
      return date.toLocaleString();
    } else {
      return date.toLocaleDateString();
    }
  };

  const getIcon = () => {
    switch (mode) {
      case 'time':
        return 'time-outline';
      case 'datetime':
        return 'calendar-outline';
      default:
        return 'calendar-outline';
    }
  };

  const handlePress = () => {
    if (disabled) return;
    setShowPicker(true);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      onDateChange(selectedDate);
    }
  };

  const getInputContainerStyle = () => {
    const baseStyle = [styles.inputContainer, inputStyle];

    if (error) {
      baseStyle.push(styles.error);
    }

    if (disabled) {
      baseStyle.push(styles.disabled);
    }

    return baseStyle;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          {required && <Text style={styles.required}>*</Text>}
        </View>
      )}

      <Pressable onPress={handlePress} style={getInputContainerStyle()}>
        <Text style={[styles.input, value ? {} : styles.placeholder]}>
          {value ? formatDate(value) : placeholder || 'Select date'}
        </Text>
        <Ionicons
          name={getIcon() as any}
          size={20}
          color={theme.colors.text.secondary}
          style={styles.icon}
        />
      </Pressable>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {showPicker && (
        <RNDateTimePicker
          value={value || new Date()}
          mode={mode}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      )}
    </View>
  );
};
