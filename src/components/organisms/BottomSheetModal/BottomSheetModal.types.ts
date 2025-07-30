import { ViewStyle } from 'react-native';

export interface BottomSheetModalProps {
  title?: string;
  snapPoints?: string[];
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  style?: ViewStyle;
  enablePanDownToClose?: boolean;
  backdropOpacity?: number;
}
