import React from 'react';
import { Text, View, Image, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { PhotoSelectorProps } from './PhotoSelector.types';
import { createPhotoSelectorStyles } from './PhotoSelector.styles';
import { theme } from '../../../theme';

export const PhotoSelector: React.FC<PhotoSelectorProps> = ({
  onImageSelect,
  selectedImage,
  placeholder = 'Tap to select photo',
  style,
  imageStyle,
  disabled = false,
  allowCamera = true,
  allowGallery = true,
}) => {
  const styles = createPhotoSelectorStyles();

  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant camera roll permissions to select photos.');
      return false;
    }
    return true;
  };

  const showImagePicker = () => {
    if (disabled) return;

    const options = [];
    
    if (allowCamera) {
      options.push({ text: 'Camera', onPress: openCamera });
    }
    
    if (allowGallery) {
      options.push({ text: 'Gallery', onPress: openGallery });
    }
    
    options.push({ text: 'Cancel', style: 'cancel' as 'cancel' });

    Alert.alert('Select Photo', 'Choose an option', options);
  };

  const openCamera = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      onImageSelect(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      onImageSelect(result.assets[0].uri);
    }
  };

  const getContainerStyle = () => {
    const baseStyle = [
      styles.container,
      selectedImage && styles.selectedContainer,
      disabled && styles.disabled,
      style,
    ];
    return baseStyle as any;
  };

  const renderContent = () => {
    if (selectedImage) {
      return (
        <Image
          source={{ uri: selectedImage }}
          style={[styles.image, imageStyle]}
          resizeMode="cover"
        />
      );
    }

    return (
      <View style={styles.placeholder}>
        <Ionicons
          name="camera-outline"
          size={32}
          color={theme.colors.text.secondary}
          style={styles.icon}
        />
        <Text style={styles.text}>{placeholder}</Text>
      </View>
    );
  };

  return (
    <Pressable onPress={showImagePicker} style={getContainerStyle()}>
      {renderContent()}
    </Pressable>
  );
};
