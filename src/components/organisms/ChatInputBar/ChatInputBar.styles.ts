import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const createChatInputBarStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      backgroundColor: theme.colors.surface.primary,
      borderTopWidth: 1,
      borderTopColor: theme.colors.border.primary,
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      backgroundColor: theme.colors.surface.secondary,
      borderRadius: theme.spacing[6],
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      marginHorizontal: theme.spacing[2],
      maxHeight: 100,
    },
    input: {
      flex: 1,
      fontSize: theme.typography.fontSizes.base,
      fontWeight: theme.typography.fontWeights.normal,
      color: theme.colors.text.primary,
      paddingVertical: theme.spacing[1],
      textAlignVertical: 'center',
    },
    actionButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    attachButton: {
      backgroundColor: theme.colors.surface.secondary,
    },
    emojiButton: {
      backgroundColor: 'transparent',
      marginRight: theme.spacing[1],
    },
    sendButton: {
      backgroundColor: theme.colors.primary.main,
    },
    sendButtonDisabled: {
      backgroundColor: theme.colors.surface.secondary,
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
