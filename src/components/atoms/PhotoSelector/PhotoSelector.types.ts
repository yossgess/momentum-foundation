import { ViewStyle, ImageStyle } from 'react-native';

export interface PhotoSelectorProps {
  onImageSelect: (uri: string) => void;
  selectedImage?: string;
  placeholder?: string;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  disabled?: boolean;
  allowCamera?: boolean;
  allowGallery?: boolean;
}
