import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EventCardProps } from './EventCard.types';
import { createEventCardStyles } from './EventCard.styles';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { theme } from '../../../theme';

export const EventCard: React.FC<EventCardProps> = React.memo(({
  id,
  image,
  title,
  dateTime,
  location,
  price,
  sportType,
  sportIcon,
  participantCount,
  maxParticipants,
  onPress,
  locale = 'en',
  style,
}) => {
  const styles = createEventCardStyles();
  const { t } = useTranslation(locale);

  const handlePress = () => {
    logger.info(`[EventCard] ${title} tapped`, { eventId: id });
    onPress(id);
  };

  const renderSportPill = () => {
    if (!sportType) return null;

    return (
      <View style={styles.sportPill}>
        {sportIcon && (
          <Ionicons
            name={sportIcon as any}
            size={12}
            color={theme.colors.background.primary}
            style={styles.sportIcon}
          />
        )}
        <Text style={styles.sportText}>{sportType}</Text>
      </View>
    );
  };

  const renderParticipantBadge = () => {
    if (participantCount === undefined || maxParticipants === undefined) return null;

    return (
      <View style={styles.participantBadge}>
        <Ionicons
          name="people"
          size={12}
          color={theme.colors.background.primary}
        />
        <Text style={styles.participantText}>
          {participantCount}/{maxParticipants} {t.cards.event.participants}
        </Text>
      </View>
    );
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
              name="image-outline"
              size={32}
              color={theme.colors.text.secondary}
            />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          {renderSportPill()}
        </View>

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Ionicons
              name="calendar-outline"
              size={16}
              color={theme.colors.text.secondary}
              style={styles.detailIcon}
            />
            <Text style={styles.detailText}>{dateTime}</Text>
          </View>

          <View style={styles.detailRow}>
            <Ionicons
              name="location-outline"
              size={16}
              color={theme.colors.text.secondary}
              style={styles.detailIcon}
            />
            <Text style={styles.detailText}>{location}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          {price && <Text style={styles.price}>{price}</Text>}
          {renderParticipantBadge()}
        </View>
      </View>
    </Pressable>
  );
});

EventCard.displayName = 'EventCard';
