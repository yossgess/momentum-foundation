import { ViewStyle } from 'react-native';

export interface NavBarAction {
  id?: string;
  icon: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export interface NavBarProps {
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightActions?: NavBarAction[];
  backgroundColor?: string;
  titleColor?: string;
  style?: ViewStyle;
}
