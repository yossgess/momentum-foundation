import { ViewStyle } from 'react-native';

export interface FilterItem {
  id: string;
  label: string;
}

export interface FiltersChipGroupProps {
  filters: FilterItem[];
  selectedFilters: string[];
  onFilterToggle: (filterId: string) => void;
  style?: ViewStyle;
}
