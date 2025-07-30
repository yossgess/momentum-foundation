import { ViewStyle } from 'react-native';
import { ButtonVariant } from '../../atoms/Button/Button.types';

export interface ConfirmationModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmVariant?: ButtonVariant;
  loading?: boolean;
  style?: ViewStyle;
}
