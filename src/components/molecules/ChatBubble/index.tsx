import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChatBubbleProps } from './ChatBubble.types';
import { createChatBubbleStyles } from './ChatBubble.styles';
import { theme } from '../../../theme';

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  timestamp,
  isSender,
  status = 'sent',
  style,
  messageStyle,
  timestampStyle,
  showTimestamp = true,
  showStatus = true,
}) => {
  const styles = createChatBubbleStyles();

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'sending':
        return <Ionicons name="time-outline" size={12} color={theme.colors.text.tertiary} />;
      case 'sent':
        return <Ionicons name="checkmark" size={12} color={theme.colors.text.tertiary} />;
      case 'delivered':
        return <Ionicons name="checkmark-done" size={12} color={theme.colors.text.tertiary} />;
      case 'read':
        return <Ionicons name="checkmark-done" size={12} color={theme.colors.primary.main} />;
      default:
        return null;
    }
  };

  return (
    <View style={[
      styles.container,
      isSender ? styles.senderContainer : styles.receiverContainer,
      style,
    ]}>
      <View style={[
        styles.bubble,
        isSender ? styles.senderBubble : styles.receiverBubble,
      ]}>
        <Text style={[
          styles.message,
          isSender ? styles.senderMessage : styles.receiverMessage,
          messageStyle,
        ]}>
          {message}
        </Text>
      </View>
      
      {(showTimestamp || (showStatus && isSender)) && (
        <View style={styles.metaContainer}>
          {showTimestamp && (
            <Text style={[styles.timestamp, timestampStyle]}>
              {formatTimestamp(timestamp)}
            </Text>
          )}
          
          {showStatus && isSender && (
            <View style={styles.statusContainer}>
              {getStatusIcon()}
            </View>
          )}
        </View>
      )}
    </View>
  );
};
