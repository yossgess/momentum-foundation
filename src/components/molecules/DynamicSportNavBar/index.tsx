import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { DynamicSportNavBarProps, TabConfig } from './DynamicSportNavBar.types';
import { NavBarItem } from './NavBarItem';
import { createDynamicSportNavBarStyles } from './DynamicSportNavBar.styles';
import { theme } from '../../../theme';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import {
  FlashIcon,
  CalendarStarIcon,
  TennisCourtIcon,
  MessageDotsIcon,
  UserIcon,
} from '../../../shared/icons';

const TAB_CONFIGS: TabConfig[] = [
  {
    key: 'discover',
    label: 'discover',
    icon: FlashIcon,
    route: 'Discover',
  },
  {
    key: 'events',
    label: 'events',
    icon: CalendarStarIcon,
    route: 'Events',
  },
  {
    key: 'courts',
    label: 'courts',
    icon: TennisCourtIcon,
    route: 'Courts',
  },
  {
    key: 'chat',
    label: 'messages',
    icon: MessageDotsIcon,
    route: 'Chats',
  },
  {
    key: 'profile',
    label: 'profile',
    icon: UserIcon,
    route: 'Profile',
  },
];

export const DynamicSportNavBar: React.FC<DynamicSportNavBarProps> = ({
  activeTab,
  onTabPress,
  showLabels = true,
  locale = 'en',
  style,
}) => {
  const styles = createDynamicSportNavBarStyles();
  const { t } = useTranslation(locale);

  React.useEffect(() => {
    logger.info('[DynamicSportNavBar] Component mounted', { 
      activeTab, 
      showLabels, 
      locale 
    });

    return () => {
      logger.info('[DynamicSportNavBar] Component unmounted');
    };
  }, [activeTab, showLabels, locale]);

  const handleTabPress = (tabKey: string) => {
    logger.info('[DynamicSportNavBar] Tab navigation', { 
      from: activeTab, 
      to: tabKey 
    });
    onTabPress(tabKey);
  };

  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={[theme.colors.primary.main, 'transparent']}
        style={styles.gradientOverlay}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      
      <View style={styles.tabsContainer}>
        {TAB_CONFIGS.map((tab) => (
          <NavBarItem
            key={tab.key}
            icon={tab.icon}
            label={tab.label}
            isActive={activeTab === tab.key}
            onPress={() => handleTabPress(tab.key)}
            locale={locale}
          />
        ))}
      </View>
    </View>
  );
};
