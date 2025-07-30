import { ViewStyle } from 'react-native';

export interface Sport {
  id: string;
  name: string;
  icon?: string;
}

export interface SportsGridSelectorProps {
  sports: Sport[];
  selectedSports: string[];
  onSportToggle: (sportId: string) => void;
  maxSelections?: number;
  columns?: number;
  disabled?: boolean;
  style?: ViewStyle;
}
