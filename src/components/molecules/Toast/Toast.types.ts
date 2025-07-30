import { ViewStyle } from 'react-native';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top' | 'bottom';

export interface ToastProps {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  icon?: React.ReactNode;
  visible?: boolean;
  onHide?: () => void;
  style?: ViewStyle;
}

export interface ToastConfig {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  icon?: React.ReactNode;
}
