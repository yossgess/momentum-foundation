import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SkillLevelBadge } from '../../atoms/SkillLevelBadge';
import { SportPreferencesSummaryProps } from './SportPreferencesSummary.types';
import { createSportPreferencesSummaryStyles } from './SportPreferencesSummary.styles';
import { theme } from '../../../theme';

export const SportPreferencesSummary: React.FC<SportPreferencesSummaryProps> = ({
  preferences,
  maxDisplay = 5,
  onEdit,
  style,
}) => {
  const styles = createSportPreferencesSummaryStyles();

  const displayedPreferences = preferences.slice(0, maxDisplay);
  const remainingCount = preferences.length - maxDisplay;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>Sport Preferences</Text>
        {onEdit && (
          <Pressable onPress={onEdit} style={styles.editButton}>
            <Ionicons
              name="pencil"
              size={20}
              color={theme.colors.text.secondary}
            />
          </Pressable>
        )}
      </View>

      {displayedPreferences.map((preference, index) => (
        <View key={preference.sport.id} style={styles.preferenceItem}>
          <View style={styles.sportInfo}>
            {preference.sport.icon && (
              <Ionicons
                name={preference.sport.icon as any}
                size={20}
                color={theme.colors.text.primary}
                style={styles.sportIcon}
              />
            )}
            <Text style={styles.sportName}>{preference.sport.name}</Text>
          </View>
          <SkillLevelBadge level={preference.skillLevel} size="small" />
        </View>
      ))}

      {remainingCount > 0 && (
        <Text style={styles.moreText}>
          +{remainingCount} more sports
        </Text>
      )}
    </View>
  );
};
