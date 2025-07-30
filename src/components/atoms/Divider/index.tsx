import React from 'react';
import { View, Text } from 'react-native';
import { DividerProps } from './Divider.types';
import { createDividerStyles } from './Divider.styles';

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  style,
  lineStyle,
  textStyle,
  color,
  thickness = 1,
}) => {
  const styles = createDividerStyles();

  const getLineStyle = () => {
    const baseStyle = [
      styles.line,
      orientation === 'horizontal' ? styles.horizontalLine : styles.verticalLine,
      lineStyle,
    ];

    if (color) {
      baseStyle.push({ backgroundColor: color });
    }

    if (thickness) {
      baseStyle.push(
        orientation === 'horizontal' 
          ? { height: thickness }
          : { width: thickness }
      );
    }

    return baseStyle;
  };

  if (label) {
    return (
      <View style={[
        styles.container,
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        style,
      ]}>
        <View style={getLineStyle()} />
        <View style={styles.labelContainer}>
          <Text style={[styles.label, textStyle]}>{label}</Text>
        </View>
        <View style={getLineStyle()} />
      </View>
    );
  }

  return (
    <View style={[
      styles.container,
      orientation === 'horizontal' ? styles.horizontal : styles.vertical,
      style,
    ]}>
      <View style={getLineStyle()} />
    </View>
  );
};
