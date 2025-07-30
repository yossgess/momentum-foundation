import React from 'react';
import { Text } from 'react-native';
import { TypographyProps } from './Typography.types';
import { createTypographyStyles } from './Typography.styles';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  color,
  align,
  style,
  numberOfLines,
  ...textProps
}) => {
  const styles = createTypographyStyles();

  const getTextStyle = () => {
    const baseStyle = [styles[variant]];

    if (color) {
      baseStyle.push({ color } as any);
    }

    if (align) {
      baseStyle.push({ textAlign: align } as any);
    }

    if (style) {
      baseStyle.push(style as any);
    }

    return baseStyle as any;
  };

  return (
    <Text
      style={getTextStyle()}
      numberOfLines={numberOfLines}
      {...textProps}
    >
      {children}
    </Text>
  );
};
