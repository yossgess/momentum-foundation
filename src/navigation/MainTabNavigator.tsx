import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../shared/types/navigation';
import { useAuth } from '../shared/hooks/useAuth';

const DiscoverScreen = () => null;
const EventsScreen = () => null;
const ChatsScreen = () => null;
const ProfileScreen = () => null;
const CoachesScreen = () => null;
const DashboardScreen = () => null;
const SessionsScreen = () => null;
const ClientsScreen = () => null;

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  const { userProfile } = useAuth();
  const isCoach = userProfile?.role === 'coach';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1C1E22',
          borderTopColor: '#2A2D33',
        },
        tabBarActiveTintColor: '#A8FF35',
        tabBarInactiveTintColor: '#A4A6AC',
      }}
    >
      {isCoach ? (
        <>
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Sessions" component={SessionsScreen} />
          <Tab.Screen name="Clients" component={ClientsScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </>
      ) : (
        <>
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Events" component={EventsScreen} />
          <Tab.Screen name="Coaches" component={CoachesScreen} />
          <Tab.Screen name="Chats" component={ChatsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
    </Tab.Navigator>
  );
};
