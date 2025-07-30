import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { LoaderProps } from './Loader.types';
import { createLoaderStyles } from './Loader.styles';
import { theme } from '../../../theme';

export const Loader: React.FC<LoaderProps> = ({
  variant = 'inline',
  size = 'medium',
  color = theme.colors.primary.main,
  isVisible = true,
  style,
  text,
}) => {
  const styles = createLoaderStyles();

  if (!isVisible) {
    return null;
  }

  const getContainerStyle = () => {
    switch (variant) {
      case 'full-screen':
        return [styles.fullScreenContainer, style];
      case 'button':
        return [styles.buttonContainer, styles[size], style];
      default:
        return [styles.inlineContainer, styles[size], style];
    }
  };

  const getActivityIndicatorSize = () => {
    switch (size) {
      case 'small':
        return 'small' as const;
      case 'large':
        return 'large' as const;
      default:
        return 'small' as const;
    }
  };

  return (
    <View style={getContainerStyle()}>
      <ActivityIndicator 
        size={getActivityIndicatorSize()} 
        color={color}
      />
      {text && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
    </View>
  );
};
