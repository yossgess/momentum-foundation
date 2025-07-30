import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { SectionSelectorProps } from './SectionSelector.types';
import { createSectionSelectorStyles } from './SectionSelector.styles';

export const SectionSelector: React.FC<SectionSelectorProps> = ({
  options,
  selectedValue,
  onSelectionChange,
  style,
  buttonStyle,
  selectedButtonStyle,
  textStyle,
  selectedTextStyle,
  disabled = false,
}) => {
  const styles = createSectionSelectorStyles();

  const handlePress = (value: string) => {
    if (disabled) return;
    onSelectionChange(value);
  };

  const getButtonStyle = (isSelected: boolean) => {
    const baseStyle = [styles.button, buttonStyle];
    
    if (isSelected) {
      baseStyle.push(styles.selectedButton, selectedButtonStyle);
    }
    
    return baseStyle;
  };

  const getTextStyle = (isSelected: boolean) => {
    const baseStyle = [styles.text, textStyle];
    
    if (isSelected) {
      baseStyle.push(styles.selectedText, selectedTextStyle);
    }
    
    return baseStyle;
  };

  return (
    <View style={[styles.container, disabled && styles.disabled, style]}>
      {options.map((option) => {
        const isSelected = option.value === selectedValue;
        
        return (
          <Pressable
            key={option.value}
            onPress={() => handlePress(option.value)}
            style={getButtonStyle(isSelected)}
            disabled={disabled}
          >
            <Text style={getTextStyle(isSelected)}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
