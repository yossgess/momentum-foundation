import { ViewStyle } from 'react-native';
import { Sport } from '../SportsGridSelector/SportsGridSelector.types';
import { SkillLevel } from '../../atoms/SkillLevelBadge/SkillLevelBadge.types';

export interface SportPreference {
  sport: Sport;
  skillLevel: SkillLevel;
}

export interface SportPreferencesSummaryProps {
  preferences: SportPreference[];
  maxDisplay?: number;
  onEdit?: () => void;
  style?: ViewStyle;
}
