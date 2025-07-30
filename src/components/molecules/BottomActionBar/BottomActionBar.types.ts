import { ViewStyle } from 'react-native';

export interface ActionBarButton {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export interface BottomActionBarProps {
  primaryAction: ActionBarButton;
  secondaryAction?: ActionBarButton;
  backgroundColor?: string;
  style?: ViewStyle;
}
