import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Switch } from '../../atoms/Switch';
import { ListItemProps } from './ListItem.types';
import { createListItemStyles } from './ListItem.styles';
import { theme } from '../../../theme';

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  icon,
  image,
  rightElement,
  onPress,
  variant = 'default',
  disabled = false,
  style,
  titleStyle,
  subtitleStyle,
  showChevron = false,
  badge,
  switchProps,
}) => {
  const styles = createListItemStyles();

  const renderLeftElement = () => {
    if (image) {
      return (
        <View style={styles.leftContainer}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
      );
    }

    if (icon) {
      return (
        <View style={styles.leftContainer}>
          {icon}
        </View>
      );
    }

    return null;
  };

  const renderRightElement = () => {
    if (rightElement) {
      return <View style={styles.rightContainer}>{rightElement}</View>;
    }

    const elements = [];

    if (variant === 'with-badge' && badge) {
      elements.push(
        <View key="badge" style={[styles.badge, badge.color && { backgroundColor: badge.color }] as any}>
          <Text style={styles.badgeText}>
            {badge.count > 99 ? '99+' : badge.count.toString()}
          </Text>
        </View>
      );
    }

    if (variant === 'with-switch' && switchProps) {
      elements.push(
        <Switch
          key="switch"
          value={switchProps.value}
          onToggle={switchProps.onToggle}
          disabled={disabled}
        />
      );
    }

    if (showChevron && onPress) {
      elements.push(
        <Ionicons
          key="chevron"
          name="chevron-forward"
          size={20}
          color={theme.colors.text.secondary}
          style={styles.chevron}
        />
      );
    }

    if (elements.length > 0) {
      return <View style={styles.rightContainer}>{elements}</View>;
    }

    return null;
  };

  const content = (
    <>
      {renderLeftElement()}
      <View style={styles.contentContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
        )}
      </View>
      {renderRightElement()}
    </>
  );

  if (onPress && !disabled) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.container,
          pressed && styles.pressable,
          disabled && styles.disabled,
          style,
        ]}
      >
        {content}
      </Pressable>
    );
  }

  return (
    <View style={[styles.container, disabled && styles.disabled, style]}>
      {content}
    </View>
  );
};
