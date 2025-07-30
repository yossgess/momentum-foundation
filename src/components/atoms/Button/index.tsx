import React from 'react';
import { Text, Pressable, ActivityIndicator, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from './Button.types';
import { createButtonStyles } from './Button.styles';
import { theme } from '../../../theme';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';

export const Button: React.FC<ButtonProps> = ({
  label,
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
  locale = 'en',
}) => {
  const styles = createButtonStyles();
  const { t } = useTranslation(locale);

  const handlePress = () => {
    if (disabled || loading) return;
    logger.info(`[Button] ${variant} button pressed`, { label, variant });
    onPress();
  };

  const getGradientColors = (): readonly [string, string] => {
    switch (variant) {
      case 'primary':
        return theme.gradients.primary as readonly [string, string];
      case 'secondary':
        return theme.gradients.secondary as readonly [string, string];
      case 'danger':
        return [theme.colors.status.error, theme.colors.status.error] as const;
      case 'iconButton':
        return ['transparent', 'transparent'] as const;
      default:
        return ['transparent', 'transparent'] as const;
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
            color={variant === 'ghost' ? theme.colors.primary.main : theme.colors.text.primary} 
          />
          <Text style={[
            styles.text,
            styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles],
            styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
            { marginLeft: theme.spacing[2] },
            textStyle,
          ]}>
            {label}
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
            {label}
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
