import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CoachCardProps } from './CoachCard.types';
import { createCoachCardStyles } from './CoachCard.styles';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { theme } from '../../../theme';

export const CoachCard: React.FC<CoachCardProps> = React.memo(({
  id,
  avatarImage,
  name,
  specialty,
  rating,
  price,
  sportIcon,
  onPress,
  locale = 'en',
  style,
}) => {
  const styles = createCoachCardStyles();
  const { t } = useTranslation(locale);

  const handlePress = () => {
    logger.info(`[CoachCard] ${name} tapped`, { coachId: id });
    onPress(id);
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={14}
          color={theme.colors.status.warning}
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Ionicons
          key="half"
          name="star-half"
          size={14}
          color={theme.colors.status.warning}
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Ionicons
          key={`empty-${i}`}
          name="star-outline"
          size={14}
          color={theme.colors.text.secondary}
        />
      );
    }

    return stars;
  };

  const renderSportBadge = () => {
    if (!sportIcon) return null;

    return (
      <View style={styles.sportBadge}>
        <Ionicons
          name={sportIcon as any}
          size={12}
          color={theme.colors.background.primary}
        />
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
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          {avatarImage ? (
            <Image source={{ uri: avatarImage }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons
                name="person"
                size={24}
                color={theme.colors.text.secondary}
              />
            </View>
          )}
          {renderSportBadge()}
        </View>

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.specialty} numberOfLines={1}>
            {specialty}
          </Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingStars}>
              {renderStars()}
            </View>
            <Text style={styles.ratingText}>
              {rating.toFixed(1)}
            </Text>
          </View>
        </View>
      </View>

      {price && (
        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
        </View>
      )}
    </Pressable>
  );
});

CoachCard.displayName = 'CoachCard';
