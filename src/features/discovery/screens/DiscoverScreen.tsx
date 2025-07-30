import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createDiscoverScreenStyles } from './DiscoverScreen.styles';
import { DiscoverScreenProps, ProfileData } from './DiscoverScreen.types';
import { theme } from '../../../theme';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { FilterButton } from '../../../components/molecules/FilterButton';
import { NotificationButton } from '../../../components/atoms/NotificationButton';
import { ImageCarousel } from '../../discover/components/ImageCarousel';
import { ChallengeButton } from '../../discover/components/ChallengeButton';
import { NopeButton } from '../../discover/components/NopeButton';
import { MatchModal } from '../../discover/components/MatchModal';
import { SportChip } from '../../../components/atoms/SportChip';
import { BottomActionBar } from '../../../components/molecules/BottomActionBar';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const MOCK_PROFILES: ProfileData[] = [
  {
    id: 'p001',
    name: 'Lina',
    age: 24,
    distance: 3.2,
    sports: ['Padel', 'Tennis'],
    images: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    ],
    bio: 'Love playing tennis and padel! Looking for regular playing partners.',
  },
  {
    id: 'p002',
    name: 'Adam',
    age: 29,
    distance: 5.8,
    sports: ['Running', 'Yoga'],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    ],
    bio: 'Marathon runner and yoga enthusiast. Let\'s train together!',
  },
  {
    id: 'p003',
    name: 'Sofia',
    age: 26,
    distance: 2.1,
    sports: ['Basketball', 'Swimming'],
    images: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    ],
    bio: 'Basketball player looking for pickup games and swimming buddies.',
  },
];

export const DiscoverScreen: React.FC<DiscoverScreenProps> = ({
  locale = 'en',
}) => {
  const styles = createDiscoverScreenStyles();
  const { t } = useTranslation(locale);
  const navigation = useNavigation();
  
  const [profiles, setProfiles] = useState<ProfileData[]>(MOCK_PROFILES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousProfiles, setPreviousProfiles] = useState<ProfileData[]>([]);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState<ProfileData | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);

  const cardAnimatedValue = useRef(new Animated.Value(0)).current;
  const scaleAnimatedValue = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    logger.info('[DiscoverScreen] Component mounted', { 
      profilesCount: profiles.length,
      currentIndex,
      locale 
    });

    return () => {
      logger.info('[DiscoverScreen] Component unmounted');
    };
  }, [profiles.length, currentIndex, locale]);

  const currentProfile = profiles[currentIndex];

  const animateCardTransition = (direction: 'up' | 'down') => {
    const toValue = direction === 'up' ? -screenHeight : screenHeight;
    
    Animated.parallel([
      Animated.timing(cardAnimatedValue, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimatedValue, {
        toValue: 0.95,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      cardAnimatedValue.setValue(direction === 'down' ? -screenHeight : screenHeight);
      scaleAnimatedValue.setValue(1);
      
      Animated.timing(cardAnimatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleChallenge = () => {
    if (!currentProfile) return;

    logger.info('[DiscoverScreen] Challenge user', { 
      profileId: currentProfile.id,
      profileName: currentProfile.name 
    });

    const isMutualMatch = Math.random() > 0.5;
    
    if (isMutualMatch) {
      setMatchedProfile(currentProfile);
      setShowMatchModal(true);
      setNotificationCount(prev => prev + 1);
      logger.info('[DiscoverScreen] Mutual match occurred', { 
        matchedUserId: currentProfile.id 
      });
    }

    setPreviousProfiles(prev => [currentProfile, ...prev]);
    animateCardTransition('up');
    setCurrentIndex(prev => prev + 1);
  };

  const handleNope = () => {
    if (!currentProfile) return;

    logger.info('[DiscoverScreen] Dismiss user', { 
      profileId: currentProfile.id,
      profileName: currentProfile.name 
    });

    setPreviousProfiles(prev => [currentProfile, ...prev]);
    animateCardTransition('up');
    setCurrentIndex(prev => prev + 1);
  };

  const handleRevert = () => {
    if (previousProfiles.length === 0) return;

    const previousProfile = previousProfiles[0];
    logger.info('[DiscoverScreen] Revert to previous user', { 
      previousProfileId: previousProfile.id,
      previousProfileName: previousProfile.name 
    });

    setPreviousProfiles(prev => prev.slice(1));
    setCurrentIndex(prev => prev - 1);
    animateCardTransition('down');
  };

  const handleOpenFilter = () => {
    logger.info('[DiscoverScreen] Open filter modal');
  };

  const handleOpenNotifications = () => {
    logger.info('[DiscoverScreen] Open notifications', { 
      notificationCount 
    });
    setNotificationCount(0);
  };

  const handleImageScroll = (imageIndex: number) => {
    if (!currentProfile) return;
    
    logger.info('[DiscoverScreen] Image scrolled', { 
      profileId: currentProfile.id,
      imageIndex 
    });
  };

  const handleMatchAccepted = () => {
    if (!matchedProfile) return;
    
    logger.info('[DiscoverScreen] Match accepted - send message', { 
      matchedUserId: matchedProfile.id 
    });
    setShowMatchModal(false);
  };

  const handleContinueSwiping = () => {
    logger.info('[DiscoverScreen] Continue swiping after match');
    setShowMatchModal(false);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    logger.info('[DiscoverScreen] Pull to refresh triggered');
    
    setTimeout(() => {
      setProfiles(MOCK_PROFILES);
      setCurrentIndex(0);
      setPreviousProfiles([]);
      setRefreshing(false);
      logger.info('[DiscoverScreen] Profiles refreshed');
    }, 1500);
  };

  if (!currentProfile) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.background.primary} />
        
        {/* Top Bar */}
        <View style={styles.topBar}>
          <FilterButton onPress={handleOpenFilter} />
          <Text style={styles.title}>{t.discovery.title}</Text>
          <NotificationButton 
            onPress={handleOpenNotifications}
            badgeCount={notificationCount}
          />
        </View>

        {/* Empty State */}
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>{t.discovery.noMoreProfiles}</Text>
          <Text style={styles.emptySubtitle}>{t.discovery.checkBackLater}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background.primary} />
      
      {/* Top Bar */}
      <View style={styles.topBar}>
        <FilterButton onPress={handleOpenFilter} />
        <Text style={styles.title}>{t.discovery.title}</Text>
        <NotificationButton 
          onPress={handleOpenNotifications}
          badgeCount={notificationCount}
        />
      </View>

      {/* Profile Card */}
      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={theme.colors.primary.main}
            colors={[theme.colors.primary.main]}
          />
        }
      >
        <Animated.View
          style={[
            styles.cardContainer,
            {
              transform: [
                { translateY: cardAnimatedValue },
                { scale: scaleAnimatedValue },
              ],
            },
          ]}
        >
          {/* Image Carousel */}
          <View style={styles.imageContainer}>
            <ImageCarousel
              images={currentProfile.images}
              onPress={handleImageScroll}
              style={styles.carousel}
            />
          </View>

          {/* Profile Info */}
          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>
                {currentProfile.name}, {currentProfile.age}
              </Text>
              <Text style={styles.distance}>
                {currentProfile.distance.toFixed(1)} km
              </Text>
            </View>

            {/* Sports Chips */}
            <View style={styles.sportsContainer}>
              {currentProfile.sports.map((sport, index) => (
                <SportChip
                  key={`${sport}-${index}`}
                  sport={sport}
                  size="small"
                  style={styles.sportChip}
                />
              ))}
            </View>

            {/* Bio */}
            {currentProfile.bio && (
              <Text style={styles.bio}>{currentProfile.bio}</Text>
            )}
          </View>
        </Animated.View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionBar}>
        <View style={styles.buttonsContainer}>
          <NopeButton
            onPress={handleNope}
            disabled={!currentProfile}
            style={styles.actionButton}
          />
          
          <View style={styles.revertButtonContainer}>
            <ChallengeButton
              onPress={handleRevert}
              disabled={previousProfiles.length === 0}
              size="medium"
              style={styles.revertButton}
            />
          </View>
          
          <ChallengeButton
            onPress={handleChallenge}
            disabled={!currentProfile}
            style={styles.actionButton}
          />
        </View>
      </View>

      {/* Match Modal */}
      {showMatchModal && matchedProfile && (
        <MatchModal
          visible={showMatchModal}
          currentUserImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
          matchedUserImage={matchedProfile.images[0]}
          matchedUserName={matchedProfile.name}
          onStartChat={handleMatchAccepted}
          onKeepSwiping={handleContinueSwiping}
          onClose={() => setShowMatchModal(false)}
        />
      )}
    </SafeAreaView>
  );
};
