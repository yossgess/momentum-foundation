import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../shared/types/navigation';
import { useAuth } from '../shared/hooks/useAuth';

const AuthScreen = () => null;
const ModeSelectionScreen = () => null;
const OnboardingScreen = () => null;
const MainTabNavigator = () => null;
const UserProfileScreen = () => null;
const EventDetailsScreen = () => null;
const ChatViewScreen = () => null;
const GameInvitationScreen = () => null;
const CreateEventScreen = () => null;
const FiltersScreen = () => null;
const SettingsScreen = () => null;
const NotificationsScreen = () => null;

const Stack = createNativeStackNavigator<RootStackParamList>();

const linking = {
  prefixes: ['momentum://', 'https://momentum.app'],
  config: {
    screens: {
      Main: 'main',
      UserProfile: 'user/:userId',
      EventDetails: 'event/:eventId',
      ChatView: 'chat/:chatId',
      GameInvitation: 'invite/:invitationId',
      CreateEvent: 'create-event',
      Filters: 'filters',
      Settings: 'settings',
      Notifications: 'notifications',
    },
  },
};

export const AppNavigator: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null; // TODO: Add loading screen
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="ModeSelection" component={ModeSelectionScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen
              name="UserProfile"
              component={UserProfileScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="EventDetails"
              component={EventDetailsScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="ChatView"
              component={ChatViewScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="GameInvitation"
              component={GameInvitationScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="CreateEvent"
              component={CreateEventScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="Filters"
              component={FiltersScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ presentation: 'modal' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
