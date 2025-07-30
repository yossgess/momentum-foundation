import { ViewStyle, TextStyle, ImageSourcePropType } from 'react-native';

export type ListItemVariant = 'default' | 'with-switch' | 'with-badge';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  image?: ImageSourcePropType;
  rightElement?: React.ReactNode;
  onPress?: () => void;
  variant?: ListItemVariant;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  showChevron?: boolean;
  badge?: {
    count: number;
    color?: string;
  };
  switchProps?: {
    value: boolean;
    onToggle: (value: boolean) => void;
  };
}
