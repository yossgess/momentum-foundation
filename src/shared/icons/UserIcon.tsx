import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IconProps } from './types';

export const UserIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#A4A6AC', 
  active = false 
}) => {
  return (
    <Ionicons
      name={active ? 'person' : 'person-outline'}
      size={size}
      color={color}
      style={{
        transform: active ? [{ scale: 1.1 }] : [{ scale: 1 }],
      }}
    />
  );
};
