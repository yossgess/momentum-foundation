import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SportChip } from '../../atoms/SportChip';
import { SportFilterChipsGroupProps, SportFilter } from './SportFilterChipsGroup.types';
import { createSportFilterChipsGroupStyles } from './SportFilterChipsGroup.styles';

export const SportFilterChipsGroup: React.FC<SportFilterChipsGroupProps> = ({
  filters,
  selectedFilters,
  onFilterToggle,
  showCounts = false,
  scrollable = true,
  style,
}) => {
  const styles = createSportFilterChipsGroupStyles();

  const renderChip = (filter: SportFilter) => {
    const isSelected = selectedFilters.includes(filter.id);
    
    return (
      <View key={filter.id} style={styles.chipContainer}>
        <SportChip
          sport={filter.name}
          icon={filter.icon}
          selected={isSelected}
          onPress={() => onFilterToggle(filter.id)}
        />
        {showCounts && filter.count !== undefined && (
          <Text style={styles.countText}>
            {filter.count} matches
          </Text>
        )}
      </View>
    );
  };

  if (scrollable) {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={[styles.container, style]}
      >
        {filters.map(renderChip)}
      </ScrollView>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {filters.map(renderChip)}
      </View>
    </View>
  );
};
