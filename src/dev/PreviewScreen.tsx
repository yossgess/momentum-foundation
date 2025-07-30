import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Button,
  InputField,
  Avatar,
  IconBadge,
  SectionSelector,
  PhotoSelector,
  Divider,
  Typography,
  Loader,
  Switch,
  Tag,
  SportChip,
  SkillLevelBadge,
  NotificationButton,
  SettingsButton,
  EditProfileButton,
  ChatButton,
  DistanceRangeSelector,
  AgeRangeSelector,
} from '../components/atoms';

import {
  FormField,
  NavBar,
  BottomActionBar,
  Toast,
  EmptyState,
  ListItem,
  ChatBubble,
  SportsGridSelector,
  CommonSportsDisplay,
  SportPreferencesSummary,
  SportFilterChipsGroup,
  SearchBar,
  FilterButton,
  EventCard,
  CoachCard,
  CourtCard,
  ChallengeEye,
} from '../components/molecules';

import {
  BottomSheetModal,
  ChatInputBar,
} from '../components/organisms';

import { mockEvents, mockCoaches, mockCourts, mockChallenges, mockSports, mockMessages } from './mockData';
import { theme } from '../theme';
import { useToast } from '../shared/hooks/useToast';

type PreviewSection = 'atoms' | 'molecules' | 'organisms' | 'cards' | 'sports' | 'forms';

export default function PreviewScreen() {
  const [activeSection, setActiveSection] = useState<PreviewSection>('atoms');
  const [searchValue, setSearchValue] = useState('');
  const [selectedSports, setSelectedSports] = useState<string[]>(['2', '1']);
  const [distanceValue, setDistanceValue] = useState(25);
  const [ageRange, setAgeRange] = useState<[number, number]>([20, 35]);
  const [switchValue, setSwitchValue] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  
  const { showToast } = useToast();

  const sections: { key: PreviewSection; label: string }[] = [
    { key: 'atoms', label: 'Atoms' },
    { key: 'molecules', label: 'Molecules' },
    { key: 'organisms', label: 'Organisms' },
    { key: 'cards', label: 'Cards' },
    { key: 'sports', label: 'Sports' },
    { key: 'forms', label: 'Forms' },
  ];

  const handlePress = (component: string) => {
    console.log(`[PreviewScreen] ${component} pressed`);
    showToast({ message: `${component} pressed!`, type: 'info' });
  };

  const renderAtoms = () => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>Atoms</Typography>
      
      <View style={styles.componentGroup}>
        <Typography variant="h2">Buttons</Typography>
        <View style={styles.row}>
          <Button label="Primary" variant="primary" onPress={() => handlePress('Primary Button')} />
          <Button label="Secondary" variant="secondary" onPress={() => handlePress('Secondary Button')} />
        </View>
        <View style={styles.row}>
          <Button label="Ghost" variant="ghost" onPress={() => handlePress('Ghost Button')} />
          <Button label="Danger" variant="danger" onPress={() => handlePress('Danger Button')} />
        </View>
        <Button label="Loading..." variant="primary" loading onPress={() => {}} />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Utility Buttons</Typography>
        <View style={styles.row}>
          <NotificationButton onPress={() => handlePress('Notification')} badgeCount={3} />
          <SettingsButton onPress={() => handlePress('Settings')} />
          <EditProfileButton onPress={() => handlePress('Edit Profile')} />
          <ChatButton onPress={() => handlePress('Chat')} unreadCount={5} />
        </View>
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Avatar & Badges</Typography>
        <View style={styles.row}>
          <Avatar 
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' }}
            size="small"
          />
          <Avatar 
            source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200' }}
            size="medium"
          />
          <Avatar 
            source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200' }}
            size="large"
          />
        </View>
        <View style={styles.row}>
          <IconBadge count={5} />
          <IconBadge count={99} />
          <IconBadge count={999} />
        </View>
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Tags & Chips</Typography>
        <View style={styles.row}>
          <Tag label="Beginner" variant="default" />
          <Tag label="Selected" variant="selected" />
          <Tag label="Outlined" variant="outlined" />
        </View>
        <View style={styles.row}>
          <SportChip sport="Tennis" selected />
          <SportChip sport="Football" />
          <SkillLevelBadge level="intermediate" />
        </View>
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Controls</Typography>
        <View style={styles.row}>
          <Switch value={switchValue} onToggle={setSwitchValue} label="Notifications" />
        </View>
        <SectionSelector
          options={[
            { label: 'Coaches', value: 'coaches' },
            { label: 'Courts', value: 'courts' }
          ]}
          selectedValue="coaches"
          onSelectionChange={() => handlePress('Section Selector')}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Range Selectors</Typography>
        <DistanceRangeSelector
          initialValue={distanceValue}
          onChange={setDistanceValue}
          min={0}
          max={100}
        />
        <AgeRangeSelector
          initialRange={ageRange}
          onChange={setAgeRange}
          min={18}
          max={60}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Loader</Typography>
        <View style={styles.row}>
          <Loader size="small" variant="inline" />
          <Loader size="medium" variant="inline" />
          <Loader size="large" variant="inline" />
        </View>
      </View>
    </View>
  );

  const renderMolecules = () => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>Molecules</Typography>
      
      <View style={styles.componentGroup}>
        <Typography variant="h2">Navigation</Typography>
        <NavBar
          title="Preview Screen"
          showBackButton
          onBackPress={() => handlePress('Back')}
          rightActions={[{
            icon: <SettingsButton onPress={() => handlePress('Settings')} />,
            onPress: () => handlePress('Settings')
          }]}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Search & Filter</Typography>
        <SearchBar
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Search components..."
          onClear={() => setSearchValue('')}
          onSubmit={() => handlePress('Search')}
        />
        <View style={styles.row}>
          <FilterButton onPress={() => handlePress('Filter')} active badgeCount={3} />
          <FilterButton onPress={() => handlePress('Filter')} variant="icon-text" label="Filters" />
        </View>
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">List Items</Typography>
        <ListItem
          title="Tennis Match"
          subtitle="Tomorrow at 9:00 AM"
          icon="tennis-ball"
          onPress={() => handlePress('List Item')}
        />
        <ListItem
          title="New Message"
          subtitle="Hey, ready for the game?"
          rightElement={<IconBadge count={1} />}
          onPress={() => handlePress('Message Item')}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Chat Bubbles</Typography>
        {mockMessages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg.message}
            timestamp={msg.timestamp}
            isSender={msg.isSender}
            status={msg.status as 'read' | 'delivered'}
          />
        ))}
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Empty State</Typography>
        <EmptyState
          icon="search-outline"
          title="No Results Found"
          description="Try adjusting your search criteria"
          actionLabel="Reset Filters"
          onAction={() => handlePress('Reset')}
        />
      </View>
    </View>
  );

  const renderOrganisms = () => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>Organisms</Typography>
      
      <View style={styles.componentGroup}>
        <Typography variant="h2">Chat Input</Typography>
        <ChatInputBar
          value={chatMessage}
          onChange={setChatMessage}
          onSend={() => {
            handlePress('Send Message');
            setChatMessage('');
          }}
          onAttach={() => handlePress('Attach')}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Bottom Sheet</Typography>
        <Button
          label="Show Bottom Sheet"
          onPress={() => setShowBottomSheet(true)}
          variant="primary"
        />
        <BottomSheetModal
          visible={showBottomSheet}
          onClose={() => setShowBottomSheet(false)}
          title="Filter Options"
          snapPoints={['50%']}
        >
          <View style={{ padding: theme.spacing[4] }}>
            <Typography variant="body">Bottom sheet content goes here</Typography>
            <Button
              label="Close"
              onPress={() => setShowBottomSheet(false)}
              variant="ghost"
              style={{ marginTop: theme.spacing[4] }}
            />
          </View>
        </BottomSheetModal>
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Bottom Action Bar</Typography>
        <BottomActionBar
          primaryAction={{
            label: 'Challenge',
            onPress: () => handlePress('Challenge'),
          }}
          secondaryAction={{
            label: 'Skip',
            onPress: () => handlePress('Skip'),
          }}
        />
      </View>
    </View>
  );

  const renderCards = () => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>Business Cards</Typography>
      
      <View style={styles.componentGroup}>
        <Typography variant="h2">Event Cards</Typography>
        {mockEvents.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            onPress={() => handlePress(`Event: ${event.title}`)}
          />
        ))}
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Coach Cards</Typography>
        {mockCoaches.map((coach) => (
          <CoachCard
            key={coach.id}
            {...coach}
            onPress={() => handlePress(`Coach: ${coach.name}`)}
          />
        ))}
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Court Cards</Typography>
        {mockCourts.map((court) => (
          <CourtCard
            key={court.id}
            {...court}
            onPress={() => handlePress(`Court: ${court.courtName}`)}
          />
        ))}
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Challenge Eye</Typography>
        <ChallengeEye
          challenges={mockChallenges}
          onViewProfile={(userId) => handlePress(`View Profile: ${userId}`)}
          onRetry={() => handlePress('Retry Challenges')}
        />
      </View>
    </View>
  );

  const renderSports = () => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>Sports Components</Typography>
      
      <View style={styles.componentGroup}>
        <Typography variant="h2">Sports Grid Selector</Typography>
        <SportsGridSelector
          sports={mockSports}
          selectedSports={selectedSports}
          onSportToggle={(sportId) => {
            setSelectedSports(prev => 
              prev.includes(sportId) 
                ? prev.filter(id => id !== sportId)
                : [...prev, sportId]
            );
          }}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Common Sports Display</Typography>
        <CommonSportsDisplay
          commonSports={[
            { id: '2', name: 'Tennis', icon: 'tennis-ball' },
            { id: '1', name: 'Football', icon: 'football' },
            { id: '3', name: 'Basketball', icon: 'basketball' }
          ]}
          maxDisplay={3}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Sport Preferences Summary</Typography>
        <SportPreferencesSummary
          preferences={[
            { sport: { id: '2', name: 'Tennis' }, skillLevel: 'intermediate' },
            { sport: { id: '1', name: 'Football' }, skillLevel: 'beginner' }
          ]}
          onEdit={() => handlePress('Edit Sports')}
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Sport Filter Chips</Typography>
        <SportFilterChipsGroup
          filters={mockSports.slice(0, 5).map(sport => ({ ...sport, count: Math.floor(Math.random() * 50) + 1 }))}
          selectedFilters={selectedSports}
          onFilterToggle={(filterId) => {
            setSelectedSports(prev => 
              prev.includes(filterId) 
                ? prev.filter(id => id !== filterId)
                : [...prev, filterId]
            );
          }}
        />
      </View>
    </View>
  );

  const renderForms = () => (
    <View style={styles.section}>
      <Typography variant="h2" style={styles.sectionTitle}>Form Components</Typography>
      
      <View style={styles.componentGroup}>
        <Typography variant="h2">Input Fields</Typography>
        <InputField
          label="Email"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter your email"
          variant="default"
        />
        <InputField
          label="Password"
          value=""
          onChangeText={() => {}}
          placeholder="Enter password"
          variant="password"
        />
        <InputField
          label="Phone Number"
          value=""
          onChangeText={() => {}}
          placeholder="Enter phone number"
          variant="numeric"
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Form Field</Typography>
        <FormField
          label="Full Name"
          value=""
          onChangeText={() => {}}
          placeholder="Enter your full name"
          helperText="This will be displayed on your profile"
        />
        <FormField
          label="Bio"
          value=""
          onChangeText={() => {}}
          placeholder="Tell us about yourself"
          helperText="Bio is required"
        />
      </View>

      <View style={styles.componentGroup}>
        <Typography variant="h2">Photo Selector</Typography>
        <PhotoSelector
          onImageSelect={() => handlePress('Image Selected')}
          placeholder="Add Profile Photo"
        />
      </View>
    </View>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'atoms':
        return renderAtoms();
      case 'molecules':
        return renderMolecules();
      case 'organisms':
        return renderOrganisms();
      case 'cards':
        return renderCards();
      case 'sports':
        return renderSports();
      case 'forms':
        return renderForms();
      default:
        return renderAtoms();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Typography variant="h1" style={styles.title}>Component Preview</Typography>
        <Typography variant="caption" style={styles.subtitle}>
          Momentum UI Components Showcase
        </Typography>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        {sections.map((section) => (
          <Pressable
            key={section.key}
            style={[
              styles.tab,
              activeSection === section.key && styles.activeTab,
            ]}
            onPress={() => setActiveSection(section.key)}
          >
            <Text style={[
              styles.tabText,
              activeSection === section.key && styles.activeTabText,
            ]}>
              {section.label}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderContent()}
        <View style={{ height: 100 }} />
      </ScrollView>

      <Toast message="" type="info" visible={false} onHide={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.primary,
  },
  header: {
    padding: theme.spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.primary,
  },
  title: {
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginTop: theme.spacing[1],
  },
  tabContainer: {
    flexGrow: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border.primary,
  },
  tab: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    marginHorizontal: theme.spacing[1],
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary.main,
  },
  tabText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.text.secondary,
  },
  activeTabText: {
    color: theme.colors.primary.main,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: theme.spacing[4],
  },
  sectionTitle: {
    color: theme.colors.text.primary,
    marginBottom: theme.spacing[6],
  },
  componentGroup: {
    marginBottom: theme.spacing[8],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
    marginVertical: theme.spacing[2],
    flexWrap: 'wrap',
  },
});
