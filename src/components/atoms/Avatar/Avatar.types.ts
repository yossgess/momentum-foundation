import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface AvatarProps {
  size?: AvatarSize;
  source?: { uri: string } | number;
  name?: string;
  onPress?: () => void;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
  showBorder?: boolean;
  borderColor?: string;
}
