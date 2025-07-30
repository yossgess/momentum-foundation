import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '../shared/types/navigation';
import { useAuth } from '../shared/hooks/useAuth';
import { DiscoverScreen } from '../features/discovery/screens';
import { DynamicSportNavBar } from '../components/molecules/DynamicSportNavBar';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  const navigation = useNavigation();
  const route = useRoute();

  const handleTabPress = (tabKey: string) => {
    const routeMap: { [key: string]: keyof MainTabParamList } = {
      discover: 'Discover',
      events: 'Events',
      courts: 'Coaches', // Using Coaches as Courts placeholder
      chat: 'Chats',
      profile: 'Profile',
    };

    const routeName = routeMap[tabKey];
    if (routeName) {
      navigation.navigate(routeName as never);
    }
  };

  const getCurrentTab = () => {
    const currentRouteName = route.name;
    const tabMap: { [key: string]: string } = {
      Discover: 'discover',
      Events: 'events',
      Coaches: 'courts',
      Chats: 'chat',
      Profile: 'profile',
    };
    return tabMap[currentRouteName] || 'discover';
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => (
        <DynamicSportNavBar
          activeTab={getCurrentTab()}
          onTabPress={handleTabPress}
          showLabels={true}
          locale="en"
        />
      )}
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
