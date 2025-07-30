import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Auth: undefined;
  ModeSelection: undefined;
  Onboarding: undefined;
  Main: undefined;
  UserProfile: { userId: string };
  EventDetails: { eventId: string };
  ChatView: { chatId: string };
  GameInvitation: { invitationId: string };
  CreateEvent: undefined;
  Filters: undefined;
  Settings: undefined;
  Notifications: undefined;
};

export type MainTabParamList = {
  Discover: undefined;
  Events: undefined;
  Chats: undefined;
  Profile: undefined;
  Coaches: undefined;
  Dashboard: undefined;
  Sessions: undefined;
  Clients: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
