import React from 'react';
import { Text, Pressable, ActivityIndicator, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from './Button.types';
import { createButtonStyles } from './Button.styles';
import { theme } from '../../../theme';

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
  fullWidth = false,
}) => {
  const styles = createButtonStyles();

  const handlePress = () => {
    if (disabled || loading) return;
    onPress();
  };

  const getGradientColors = () => {
    switch (variant) {
      case 'primary':
        return theme.gradients.primary;
      case 'secondary':
        return theme.gradients.secondary;
      case 'accent':
        return [theme.colors.accent.main, theme.colors.accent.dark];
      default:
        return ['transparent', 'transparent'];
    }
  };

  const shouldUseGradient = ['primary', 'secondary', 'accent'].includes(variant);

  const buttonContent = (
    <View style={[
      styles.button,
      styles[variant],
      styles[size],
      fullWidth && styles.fullWidth,
      disabled && styles.disabled,
    ]}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator 
            size="small" 
            color={variant === 'outline' || variant === 'ghost' ? theme.colors.primary.main : theme.colors.text.primary} 
          />
          <Text style={[
            styles.text,
            styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
            styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
            { marginLeft: theme.spacing[2] },
            textStyle,
          ]}>
            {title}
          </Text>
        </View>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <View style={[styles.icon, styles.iconLeft]}>{icon}</View>
          )}
          <Text style={[
            styles.text,
            styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
            styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
            textStyle,
          ]}>
            {title}
          </Text>
          {icon && iconPosition === 'right' && (
            <View style={[styles.icon, styles.iconRight]}>{icon}</View>
          )}
        </>
      )}
    </View>
  );

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.container,
        fullWidth && styles.fullWidth,
        pressed && !disabled && !loading && styles.pressed,
        style,
      ]}
    >
      {shouldUseGradient ? (
        <LinearGradient
          colors={getGradientColors()}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.button,
            styles[size],
            fullWidth && styles.fullWidth,
            disabled && styles.disabled,
          ]}
        >
          {buttonContent.props.children}
        </LinearGradient>
      ) : (
        buttonContent
      )}
    </Pressable>
  );
};
