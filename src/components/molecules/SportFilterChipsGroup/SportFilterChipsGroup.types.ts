import { ViewStyle } from 'react-native';

export interface SportFilter {
  id: string;
  name: string;
  icon?: string;
  count?: number;
}

export interface SportFilterChipsGroupProps {
  filters: SportFilter[];
  selectedFilters: string[];
  onFilterToggle: (filterId: string) => void;
  showCounts?: boolean;
  scrollable?: boolean;
  style?: ViewStyle;
}
