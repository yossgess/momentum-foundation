import React from 'react';
import { View } from 'react-native';
import { Button } from '../../atoms/Button';
import { BottomActionBarProps } from './BottomActionBar.types';
import { createBottomActionBarStyles } from './BottomActionBar.styles';

export const BottomActionBar: React.FC<BottomActionBarProps> = ({
  primaryAction,
  secondaryAction,
  backgroundColor,
  style,
}) => {
  const styles = createBottomActionBarStyles();

  return (
    <View style={[
      styles.container,
      backgroundColor ? { backgroundColor } : null,
      style,
    ].filter(Boolean)}>
      {secondaryAction && (
        <Button
          variant="ghost"
          label={secondaryAction.label}
          onPress={secondaryAction.onPress}
          disabled={secondaryAction.disabled}
          loading={secondaryAction.loading}
          style={[styles.secondaryButton, secondaryAction.style].filter(Boolean) as any}
        />
      )}
      
      <Button
        variant="primary"
        label={primaryAction.label}
        onPress={primaryAction.onPress}
        disabled={primaryAction.disabled}
        loading={primaryAction.loading}
        style={[styles.primaryButton, primaryAction.style].filter(Boolean) as any}
        fullWidth={!secondaryAction}
      />
    </View>
  );
};
