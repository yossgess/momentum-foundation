import React from 'react';
import { View } from 'react-native';
import { Button } from '../../atoms/Button';
import { IconButtonGroupProps } from './IconButtonGroup.types';
import { createIconButtonGroupStyles } from './IconButtonGroup.styles';

export const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  buttons,
  selectedIndex,
  onSelectionChange,
  variant = 'ghost',
  size = 'medium',
  containerStyle,
}) => {
  const styles = createIconButtonGroupStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      {buttons.map((button, index) => (
        <Button
          key={button.id || index}
          variant={selectedIndex === index ? 'primary' : variant}
          size={size}
          icon={button.icon}
          label={button.label}
          onPress={() => {
            button.onPress?.();
            onSelectionChange?.(index);
          }}
          style={[
            styles.button,
            index > 0 ? styles.buttonSpacing : null,
            button.style,
          ].filter(Boolean) as any}
          disabled={button.disabled}
        />
      ))}
    </View>
  );
};
