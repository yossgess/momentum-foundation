import React from 'react';
import { View, Text } from 'react-native';
import { SkillLevelBadgeProps } from './SkillLevelBadge.types';
import { createSkillLevelBadgeStyles } from './SkillLevelBadge.styles';

export const SkillLevelBadge: React.FC<SkillLevelBadgeProps> = ({
  level,
  size = 'medium',
  showLabel = true,
  style,
}) => {
  const styles = createSkillLevelBadgeStyles();

  return (
    <View style={[
      styles.container,
      styles[size],
      styles[level],
      style,
    ]}>
      <View style={[
        styles.dot,
        size === 'small' && styles.smallDot,
        size === 'large' && styles.largeDot,
      ]} />
      {showLabel && (
        <Text style={[
          styles.text,
          size === 'small' && styles.smallText,
          size === 'large' && styles.largeText,
        ]}>
          {level}
        </Text>
      )}
    </View>
  );
};
