import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createChatBubbleStyles = () => {
  return StyleSheet.create({
    container: {
      marginVertical: theme.spacing[1],
      marginHorizontal: theme.spacing[4],
    },
    senderContainer: {
      alignItems: 'flex-end',
    },
    receiverContainer: {
      alignItems: 'flex-start',
    },
    bubble: {
      maxWidth: '80%',
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      borderRadius: theme.spacing[4],
    },
    senderBubble: {
      backgroundColor: theme.colors.primary.main,
      borderBottomRightRadius: theme.spacing[1],
    },
    receiverBubble: {
      backgroundColor: theme.colors.surface.secondary,
      borderBottomLeftRadius: theme.spacing[1],
    },
    message: {
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.normal,
      lineHeight: theme.typography.lineHeights.relaxed,
    },
    senderMessage: {
      color: theme.colors.background.primary,
    },
    receiverMessage: {
      color: theme.colors.text.primary,
    },
    metaContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing[1],
      paddingHorizontal: theme.spacing[1],
    },
    timestamp: {
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.tertiary,
    },
    statusContainer: {
      marginLeft: theme.spacing[1],
    },
    statusIcon: {
      width: 12,
      height: 12,
    },
  });
};
