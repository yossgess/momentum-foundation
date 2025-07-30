import { ViewStyle, TextStyle } from 'react-native';

export interface ChatInputBarProps {
  value: string;
  onChange: (text: string) => void;
  onSend: (message: string) => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  maxLength?: number;
  multiline?: boolean;
  showEmojiButton?: boolean;
  showAttachButton?: boolean;
}
