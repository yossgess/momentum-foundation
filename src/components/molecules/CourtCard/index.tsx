import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CourtCardProps } from './CourtCard.types';
import { createCourtCardStyles } from './CourtCard.styles';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { theme } from '../../../theme';

export const CourtCard: React.FC<CourtCardProps> = React.memo(({
  id,
  image,
  courtName,
  type,
  location,
  isFavorite = false,
  onPress,
  onFavoriteToggle,
  locale = 'en',
  style,
}) => {
  const styles = createCourtCardStyles();
  const { t } = useTranslation(locale);

  const handlePress = () => {
    logger.info(`[CourtCard] ${courtName} tapped`, { courtId: id });
    onPress(id);
  };

  const handleFavoriteToggle = () => {
    if (onFavoriteToggle) {
      const newFavoriteState = !isFavorite;
      logger.info(`[CourtCard] ${courtName} favorite toggled`, { 
        courtId: id, 
        isFavorite: newFavoriteState 
      });
      onFavoriteToggle(id, newFavoriteState);
    }
  };

  const getTypeText = () => {
    return t.cards.court[type] || type;
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
      onPress={handlePress}
    >
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Ionicons
              name="business-outline"
              size={32}
              color={theme.colors.text.secondary}
            />
          </View>
        )}
        
        {onFavoriteToggle && (
          <Pressable
            style={styles.favoriteButton}
            onPress={handleFavoriteToggle}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={16}
              color={isFavorite ? theme.colors.status.error : theme.colors.text.primary}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.courtName} numberOfLines={2}>
            {courtName}
          </Text>
          <View style={styles.typeTag}>
            <Text style={styles.typeText}>{getTypeText()}</Text>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <Ionicons
            name="location-outline"
            size={16}
            color={theme.colors.text.secondary}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText} numberOfLines={1}>
            {location}
          </Text>
        </View>
      </View>
    </Pressable>
  );
});

CourtCard.displayName = 'CourtCard';
