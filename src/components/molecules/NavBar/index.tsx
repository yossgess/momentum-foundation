import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavBarProps } from './NavBar.types';
import { createNavBarStyles } from './NavBar.styles';
import { theme } from '../../../theme';

export const NavBar: React.FC<NavBarProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightActions,
  backgroundColor,
  titleColor,
  style,
}) => {
  const styles = createNavBarStyles();

  return (
    <View style={[
      styles.container,
      backgroundColor ? { backgroundColor } : null,
      style,
    ].filter(Boolean)}>
      <View style={styles.leftSection}>
        {showBackButton && (
          <Pressable onPress={onBackPress} style={styles.backButton}>
            <Ionicons
              name="arrow-back"
              size={24}
              color={titleColor || theme.colors.text.primary}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.centerSection}>
        {title && (
          <Text style={[
            styles.title,
            titleColor ? { color: titleColor } : null,
          ].filter(Boolean)}>
            {title}
          </Text>
        )}
      </View>

      <View style={styles.rightSection}>
        {rightActions?.map((action, index) => (
          <Pressable
            key={action.id || index}
            onPress={action.onPress}
            style={[styles.actionButton, index > 0 && styles.actionSpacing]}
            disabled={action.disabled}
          >
            {action.icon}
          </Pressable>
        ))}
      </View>
    </View>
  );
};
