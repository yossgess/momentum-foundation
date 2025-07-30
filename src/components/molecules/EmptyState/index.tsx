import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../atoms/Button';
import { EmptyStateProps } from './EmptyState.types';
import { createEmptyStateStyles } from './EmptyState.styles';

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  style,
  titleStyle,
  descriptionStyle,
}) => {
  const styles = createEmptyStateStyles();

  return (
    <View style={[styles.container, style]}>
      {icon && (
        <View style={styles.iconContainer}>
          {icon}
        </View>
      )}
      
      <Text style={[styles.title, titleStyle]}>
        {title}
      </Text>
      
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}
      
      {actionLabel && onAction && (
        <Button
          variant="primary"
          label={actionLabel}
          onPress={onAction}
          style={styles.actionButton}
        />
      )}
    </View>
  );
};
