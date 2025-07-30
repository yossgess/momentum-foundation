import React from 'react';
import { Text, View } from 'react-native';
import { IconBadgeProps } from './IconBadge.types';
import { createIconBadgeStyles } from './IconBadge.styles';

export const IconBadge: React.FC<IconBadgeProps> = ({
  count = 0,
  maxCount = 99,
  size = 'medium',
  variant = 'primary',
  showZero = false,
  style,
  textStyle,
  children,
}) => {
  const styles = createIconBadgeStyles();

  const shouldShowBadge = count > 0 || (count === 0 && showZero);

  const getDisplayCount = () => {
    if (count > maxCount) {
      return `${maxCount}+`;
    }
    return count.toString();
  };

  const getBadgeStyle = () => {
    return [
      styles.badge,
      styles[variant],
      styles[size],
      style,
    ];
  };

  const getTextStyle = () => {
    return [
      styles.text,
      styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
      styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
      textStyle,
    ];
  };

  return (
    <View style={styles.container}>
      {children}
      {shouldShowBadge && (
        <View style={getBadgeStyle()}>
          <Text style={getTextStyle()}>{getDisplayCount()}</Text>
        </View>
      )}
    </View>
  );
};
