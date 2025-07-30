import { ViewStyle, TextStyle } from 'react-native';

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export interface ChatBubbleProps {
  message: string;
  timestamp: Date;
  isSender: boolean;
  status?: MessageStatus;
  style?: ViewStyle;
  messageStyle?: TextStyle;
  timestampStyle?: TextStyle;
  showTimestamp?: boolean;
  showStatus?: boolean;
}
