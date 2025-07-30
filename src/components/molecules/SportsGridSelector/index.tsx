import React from 'react';
import { View } from 'react-native';
import { SportChip } from '../../atoms/SportChip';
import { SportsGridSelectorProps } from './SportsGridSelector.types';
import { createSportsGridSelectorStyles } from './SportsGridSelector.styles';

export const SportsGridSelector: React.FC<SportsGridSelectorProps> = ({
  sports,
  selectedSports,
  onSportToggle,
  maxSelections,
  columns = 2,
  disabled = false,
  style,
}) => {
  const styles = createSportsGridSelectorStyles();

  const handleSportPress = (sportId: string) => {
    if (disabled) return;
    
    const isSelected = selectedSports.includes(sportId);
    
    if (!isSelected && maxSelections && selectedSports.length >= maxSelections) {
      return;
    }
    
    onSportToggle(sportId);
  };

  const getItemWidth = () => {
    if (columns === 1) return '100%';
    if (columns === 2) return '48%';
    if (columns === 3) return '31%';
    return '23%';
  };

  return (
    <View style={[styles.container, disabled && styles.disabled, style]}>
      <View style={styles.grid}>
        {sports.map((sport) => {
          const isSelected = selectedSports.includes(sport.id);
          const isDisabled = Boolean(disabled || (!isSelected && maxSelections && selectedSports.length >= maxSelections));
          
          return (
            <SportChip
              key={sport.id}
              sport={sport.name}
              icon={sport.icon}
              selected={isSelected}
              disabled={isDisabled}
              onPress={() => handleSportPress(sport.id)}
              style={{
                ...styles.sportItem,
                width: getItemWidth()
              }}
            />
          );
        })}
      </View>
    </View>
  );
};
