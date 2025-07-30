import React from 'react';
import { Pressable, Text, View, Animated } from 'react-native';
import { NavBarItemProps } from './DynamicSportNavBar.types';
import { createNavBarItemStyles } from './DynamicSportNavBar.styles';
import { theme } from '../../../theme';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';

export const NavBarItem: React.FC<NavBarItemProps> = ({
  icon: IconComponent,
  label,
  isActive,
  onPress,
  locale = 'en',
}) => {
  const styles = createNavBarItemStyles();
  const { t } = useTranslation(locale);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const glowAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isActive) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1.1,
          useNativeDriver: true,
          tension: 150,
          friction: 8,
        }),
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 150,
          friction: 8,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [isActive, scaleAnim, glowAnim]);

  const handlePress = () => {
    logger.info(`[DynamicSportNavBar] Tab pressed`, { tab: label });
    
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: isActive ? 1.1 : 1,
        useNativeDriver: true,
        tension: 150,
        friction: 8,
      }),
    ]).start();

    onPress();
  };

  const iconColor = isActive ? theme.colors.primary.main : theme.colors.text.secondary;
  const textColor = isActive ? theme.colors.primary.main : theme.colors.text.secondary;

  return (
    <Pressable
      onPress={handlePress}
      style={styles.container}
      accessibilityRole="button"
      accessibilityLabel={t.navigation[label.toLowerCase() as keyof typeof t.navigation]}
    >
      <Animated.View
        style={[
          styles.iconContainer,
          {
            transform: [{ scale: scaleAnim }],
            shadowColor: theme.colors.primary.main,
            shadowOpacity: glowAnim,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 0 },
            elevation: isActive ? 8 : 0,
          },
        ]}
      >
        <IconComponent
          size={24}
          color={iconColor}
          active={isActive}
        />
        
        {isActive && (
          <Animated.View
            style={[
              styles.activeIndicator,
              {
                opacity: glowAnim,
                backgroundColor: theme.colors.primary.main,
              },
            ]}
          />
        )}
      </Animated.View>

      <Text style={[styles.label, { color: textColor }]}>
        {t.navigation[label.toLowerCase() as keyof typeof t.navigation]}
      </Text>
    </Pressable>
  );
};
