import React from 'react';
import { View, Text, Image, Pressable, FlatList, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChallengeEyeProps, ChallengeUser } from './ChallengeEye.types';
import { createChallengeEyeStyles } from './ChallengeEye.styles';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { theme } from '../../../theme';
import { Loader } from '../../atoms/Loader';
import { Button } from '../../atoms/Button';

export const ChallengeEye: React.FC<ChallengeEyeProps> = React.memo(({
  challenges,
  isLoading = false,
  error,
  onViewProfile,
  onRetry,
  locale = 'en',
  style,
}) => {
  const styles = createChallengeEyeStyles();
  const { t } = useTranslation(locale);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  React.useEffect(() => {
    logger.componentMount('ChallengeEye', { challengeCount: challenges.length });
    return () => {
      logger.componentUnmount('ChallengeEye');
    };
  }, [challenges.length]);

  const handleViewProfile = (userId: string, userName: string) => {
    logger.info(`[ChallengeEye] Viewed challenged profile: ${userName}`, { userId });
    onViewProfile(userId);
  };

  const handleRefresh = async () => {
    if (onRetry) {
      setIsRefreshing(true);
      logger.info('[ChallengeEye] Refresh triggered');
      await onRetry();
      setIsRefreshing(false);
    }
  };

  const renderSportBadges = (sports: string[]) => {
    return sports.slice(0, 3).map((sport, index) => (
      <View key={index} style={styles.sportBadge}>
        <Text style={styles.sportText}>{sport}</Text>
      </View>
    ));
  };

  const renderChallengeItem = ({ item }: { item: ChallengeUser }) => (
    <Pressable
      style={({ pressed }) => [
        styles.challengeItem,
        pressed && styles.pressed,
      ]}
      onPress={() => handleViewProfile(item.id, item.name)}
    >
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          {item.profilePicture ? (
            <Image source={{ uri: item.profilePicture }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons
                name="person"
                size={32}
                color={theme.colors.text.secondary}
              />
            </View>
          )}
        </View>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.userDetails}>
          {item.age} • {item.location}
        </Text>
      </View>

      <View style={styles.sportsContainer}>
        {renderSportBadges(item.commonSports)}
      </View>
    </Pressable>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Ionicons
        name="heart-outline"
        size={64}
        color={theme.colors.text.secondary}
        style={styles.emptyIcon}
      />
      <Text style={styles.emptyTitle}>
        {t.challenges.empty.title}
      </Text>
      <Text style={styles.emptyMessage}>
        {t.challenges.empty.message}
      </Text>
    </View>
  );

  const renderErrorState = () => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{error}</Text>
      {onRetry && (
        <Button
          label={t.common.retry}
          onPress={onRetry}
          variant="primary"
        />
      )}
    </View>
  );

  if (isLoading) {
    return (
      <View style={[styles.container, style]}>
        <View style={styles.loadingContainer}>
          <Loader size="large" variant="full-screen" />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, style]}>
        {renderErrorState()}
      </View>
    );
  }

  if (challenges.length === 0) {
    return (
      <View style={[styles.container, style]}>
        {renderEmptyState()}
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={challenges}
        renderItem={renderChallengeItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        style={styles.gridContainer}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.primary.main}
            colors={[theme.colors.primary.main]}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

ChallengeEye.displayName = 'ChallengeEye';
