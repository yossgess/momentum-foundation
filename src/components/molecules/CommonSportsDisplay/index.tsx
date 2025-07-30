import React from 'react';
import { View, Text } from 'react-native';
import { SportChip } from '../../atoms/SportChip';
import { CommonSportsDisplayProps } from './CommonSportsDisplay.types';
import { createCommonSportsDisplayStyles } from './CommonSportsDisplay.styles';

export const CommonSportsDisplay: React.FC<CommonSportsDisplayProps> = ({
  commonSports,
  maxDisplay = 3,
  size = 'small',
  showLabel = true,
  style,
}) => {
  const styles = createCommonSportsDisplayStyles();

  const displayedSports = commonSports.slice(0, maxDisplay);
  const remainingCount = commonSports.length - maxDisplay;

  return (
    <View style={[styles.container, style]}>
      {showLabel && (
        <Text style={styles.label}>
          Common Sports ({commonSports.length})
        </Text>
      )}
      <View style={styles.sportsContainer}>
        {displayedSports.map((sport) => (
          <SportChip
            key={sport.id}
            sport={sport.name}
            icon={sport.icon}
            size={size}
            selected={true}
          />
        ))}
        {remainingCount > 0 && (
          <Text style={styles.moreText}>
            +{remainingCount} more
          </Text>
        )}
      </View>
    </View>
  );
};
