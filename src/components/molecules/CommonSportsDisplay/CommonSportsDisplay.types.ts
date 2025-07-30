import { ViewStyle } from 'react-native';

export interface CommonSport {
  id: string;
  name: string;
  icon?: string;
}

export interface CommonSportsDisplayProps {
  commonSports: CommonSport[];
  maxDisplay?: number;
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
  style?: ViewStyle;
}
