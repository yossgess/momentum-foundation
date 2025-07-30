import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { AvatarProps } from './Avatar.types';
import { createAvatarStyles } from './Avatar.styles';

export const Avatar: React.FC<AvatarProps> = ({
  size = 'medium',
  source,
  name,
  onPress,
  style,
  imageStyle,
  textStyle,
  showBorder = false,
  borderColor,
}) => {
  const styles = createAvatarStyles();

  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const getContainerStyle = () => {
    const baseStyle = [
      styles.container,
      styles[size],
      showBorder && styles.border,
      showBorder && borderColor && { borderColor },
      style,
    ];
    return baseStyle as any;
  };

  const getImageStyle = () => {
    return [styles.image, styles[size], imageStyle];
  };

  const getFallbackStyle = () => {
    return [styles.fallback, styles[size]];
  };

  const getTextStyle = () => {
    return [
      styles.fallbackText,
      styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
      textStyle,
    ];
  };

  const renderContent = () => {
    if (source) {
      return (
        <Image
          source={source}
          style={getImageStyle()}
          resizeMode="cover"
        />
      );
    }

    if (name) {
      return (
        <View style={getFallbackStyle()}>
          <Text style={getTextStyle()}>{getInitials(name)}</Text>
        </View>
      );
    }

    return <View style={getFallbackStyle()} />;
  };

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={getContainerStyle()}>
        {renderContent()}
      </Pressable>
    );
  }

  return (
    <View style={getContainerStyle()}>
      {renderContent()}
    </View>
  );
};
