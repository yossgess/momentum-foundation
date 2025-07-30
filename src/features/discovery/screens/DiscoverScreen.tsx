import React, { useState, useRef, useCallback } from 'react';
import {
  View,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { createDiscoverScreenStyles } from './DiscoverScreen.styles';
import { DiscoverScreenProps } from './DiscoverScreen.types';
import { theme } from '../../../theme';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { FilterButton } from '../../../components/molecules/FilterButton';
import { NotificationButton } from '../../../components/atoms/NotificationButton';
import { ImageCarousel } from '../../discover/components/ImageCarousel';
import { ChallengeButton } from '../../discover/components/ChallengeButton';
import { NopeButton } from '../../discover/components/NopeButton';
import { RevertButton } from '../components/RevertButton';
import { MatchModal } from '../../discover/components/MatchModal';
import { SportChip } from '../../../components/atoms/SportChip';
import { Typography } from '../../../components/atoms/Typography';
import { mockProfiles, ProfileData } from '../mockProfiles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


export const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ navigation }) => {
  const styles = createDiscoverScreenStyles();
  const { t } = useTranslation();
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState<ProfileData[]>(mockProfiles);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);
  const [profileHistory, setProfileHistory] = useState<number[]>([]);
  
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const currentProfile = profiles[currentProfileIndex];

  const animateProfileTransition = useCallback((direction: 'up' | 'down') => {
    const slideValue = direction === 'up' ? -Dimensions.get('window').height : Dimensions.get('window').height;
    
    Animated.sequence([
      Animated.spring(slideAnim, {
        toValue: slideValue,
        useNativeDriver: true,
        tension: 150,
        friction: 8,
      }),
      Animated.timing(slideAnim, {
        toValue: direction === 'up' ? Dimensions.get('window').height : -Dimensions.get('window').height,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 150,
        friction: 8,
      }),
    ]).start();
  }, [slideAnim]);

  const handleChallenge = useCallback(() => {
    if (!currentProfile) return;
    
    logger.info('ChallengeUser', { profileId: currentProfile.id });
    
    setShowMatchModal(true);
    setHasNewNotifications(true);
    
    setProfileHistory(prev => [...prev, currentProfileIndex]);
    
    setTimeout(() => {
      if (currentProfileIndex < profiles.length - 1) {
        setCurrentProfileIndex(prev => prev + 1);
        animateProfileTransition('up');
      }
    }, 1000);
  }, [currentProfile, currentProfileIndex, profiles.length, animateProfileTransition]);

  const handleNope = useCallback(() => {
    if (!currentProfile) return;
    
    logger.info('DismissUser', { profileId: currentProfile.id });
    
    setProfileHistory(prev => [...prev, currentProfileIndex]);
    
    if (currentProfileIndex < profiles.length - 1) {
      setCurrentProfileIndex(prev => prev + 1);
      animateProfileTransition('up');
    }
  }, [currentProfile, currentProfileIndex, profiles.length, animateProfileTransition]);

  const handleRevert = useCallback(() => {
    if (profileHistory.length > 0) {
      logger.info('RevertUser');
      const previousIndex = profileHistory[profileHistory.length - 1];
      setProfileHistory(prev => prev.slice(0, -1));
      setCurrentProfileIndex(previousIndex);
      animateProfileTransition('down');
    }
  }, [profileHistory, animateProfileTransition]);

  const handleFilterPress = useCallback(() => {
    logger.info('Filter button pressed');
    Alert.alert('Filter', 'Filter functionality coming soon!');
  }, []);

  const handleNotificationPress = useCallback(() => {
    logger.info('Notification button pressed');
    setHasNewNotifications(false);
    navigation.navigate('Messages');
  }, [navigation]);

  const handleStartChat = useCallback(() => {
    setShowMatchModal(false);
    navigation.navigate('Messages');
  }, [navigation]);

  const handleKeepSwiping = useCallback(() => {
    setShowMatchModal(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      logger.info('DiscoverScreen focused');
    }, [])
  );

  if (!currentProfile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <FilterButton onPress={handleFilterPress} />
          <Typography variant="h2" style={styles.title}>
            {t.discovery.title}
          </Typography>
          <NotificationButton 
            onPress={handleNotificationPress}
            hasNotification={hasNewNotifications}
          />
        </View>
        
        <View style={styles.emptyState}>
          <Typography variant="h3" style={styles.emptyTitle}>
            {t.discovery.noMoreProfiles}
          </Typography>
          <Typography variant="body" style={styles.emptyMessage}>
            {t.discovery.checkBackLater}
          </Typography>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FilterButton onPress={handleFilterPress} />
        <Typography variant="h2" style={styles.title}>
          {t.discovery.title}
        </Typography>
        <NotificationButton 
          onPress={handleNotificationPress}
          hasNotification={hasNewNotifications}
        />
      </View>

      <Animated.View
        style={[
          styles.profileCard,
          {
            transform: [
              { translateY: slideAnim },
              { scale: scaleAnim },
            ],
          },
        ]}
      >
        <View style={styles.imageSection}>
          <ImageCarousel images={currentProfile.images} />
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.nameAgeRow}>
            <Typography variant="h2" style={styles.name}>
              {currentProfile.name}
            </Typography>
            <Typography variant="h3" style={styles.age}>
              {currentProfile.age}
            </Typography>
          </View>

          <View style={styles.distanceContainer}>
            <Typography variant="caption" style={styles.distance}>
              {currentProfile.distance} km
            </Typography>
          </View>

          <View style={styles.sportsContainer}>
            {currentProfile.sports.map((sport, index) => (
              <SportChip key={index} sport={sport} />
            ))}
          </View>

          {currentProfile.bio && (
            <Typography variant="body" style={styles.bio}>
              {currentProfile.bio}
            </Typography>
          )}
        </View>
      </Animated.View>

      <View style={styles.actionButtons}>
        <NopeButton onPress={handleNope} />
        <RevertButton 
          onPress={handleRevert} 
          disabled={profileHistory.length === 0}
        />
        <ChallengeButton onPress={handleChallenge} />
      </View>

      <MatchModal
        visible={showMatchModal}
        currentUserImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
        matchedUserImage={currentProfile.images[0]}
        matchedUserName={currentProfile.name}
        onStartChat={handleStartChat}
        onKeepSwiping={handleKeepSwiping}
        onClose={() => setShowMatchModal(false)}
      />
    </SafeAreaView>
  );
};
