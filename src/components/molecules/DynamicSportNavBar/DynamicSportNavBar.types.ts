import React from 'react';
import { ViewStyle } from 'react-native';
import { IconProps } from '../../../shared/icons/types';

export interface NavBarItemProps {
  icon: React.ComponentType<IconProps>;
  label: string;
  isActive: boolean;
  onPress: () => void;
  locale?: 'en' | 'fr';
}

export interface DynamicSportNavBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
  showLabels?: boolean;
  locale?: 'en' | 'fr';
  style?: ViewStyle;
}

export interface TabConfig {
  key: string;
  label: string;
  icon: React.ComponentType<IconProps>;
  route: string;
}
