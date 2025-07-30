export interface MatchModalProps {
  visible: boolean;
  currentUserImage: string;
  matchedUserImage: string;
  matchedUserName: string;
  onStartChat: () => void;
  onKeepSwiping: () => void;
  onClose: () => void;
}
