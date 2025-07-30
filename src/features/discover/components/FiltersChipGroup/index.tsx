import React from 'react';
import { ScrollView, View } from 'react-native';
import { Chip } from '../../../../components/atoms/Chip';
import { FiltersChipGroupProps } from './FiltersChipGroup.types';
import { createFiltersChipGroupStyles } from './FiltersChipGroup.styles';

export const FiltersChipGroup: React.FC<FiltersChipGroupProps> = ({
  filters,
  selectedFilters,
  onFilterToggle,
  style,
}) => {
  const styles = createFiltersChipGroupStyles();

  const isSelected = (filterId: string) => {
    return selectedFilters.includes(filterId);
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filters.map((filter) => (
          <Chip
            key={filter.id}
            label={filter.label}
            variant={isSelected(filter.id) ? 'filled' : 'outlined'}
            size="medium"
            onPress={() => onFilterToggle(filter.id)}
            style={styles.chip}
          />
        ))}
      </ScrollView>
    </View>
  );
};
