import { ViewStyle } from 'react-native';

export type ChallengeButtonSize = 'medium' | 'large';

export interface ChallengeButtonProps {
  onPress: () => void;
  disabled?: boolean;
  size?: ChallengeButtonSize;
  style?: ViewStyle;
}
