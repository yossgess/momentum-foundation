import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FilterButtonProps } from './FilterButton.types';
import { createFilterButtonStyles } from './FilterButton.styles';
import { theme } from '../../../theme';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';

export const FilterButton: React.FC<FilterButtonProps> = ({
  onPress,
  active = false,
  badgeCount,
  variant = 'icon-only',
  label = 'Filter',
  size = 'medium',
  disabled = false,
  style,
  locale = 'en',
}) => {
  const styles = createFilterButtonStyles();
  const { t } = useTranslation(locale);

  const handlePress = () => {
    logger.info('[FilterButton] Filter button pressed', { active, badgeCount, variant });
    onPress();
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 18;
      case 'large':
        return 24;
      default:
        return 20;
    }
  };

  const getIconColor = () => {
    return active ? theme.colors.background.primary : theme.colors.text.primary;
  };

  const isIconOnly = variant === 'icon-only';

  const containerStyle = [
    styles.container,
    styles[size],
    isIconOnly && styles.iconOnly,
    isIconOnly && size === 'small' && styles.iconOnlySmall,
    isIconOnly && size === 'large' && styles.iconOnlyLarge,
    active && styles.active,
    disabled && styles.disabled,
    style,
  ];

  const showBadge = badgeCount !== undefined && badgeCount > 0;

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        ...containerStyle,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Ionicons
        name="funnel"
        size={getIconSize()}
        color={getIconColor()}
        style={[
          styles.icon,
          !isIconOnly && styles.iconWithText,
        ]}
      />
      
      {!isIconOnly && (
        <Text style={[
          styles.text,
          active && styles.activeText,
        ]}>
          {t.common.filter}
        </Text>
      )}

      {showBadge && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>
            {badgeCount! > 99 ? '99+' : badgeCount!.toString()}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
