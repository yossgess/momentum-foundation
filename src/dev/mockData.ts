export const mockEvents = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400',
    title: 'Tennis Morning Match',
    dateTime: '15 Aug - 09:00',
    location: 'Marsa Beach',
    price: '25 TND',
    sportType: 'Tennis',
    participants: '4/6',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    title: 'Basketball Tournament',
    dateTime: '18 Aug - 16:00',
    location: 'City Sports Center',
    price: '15 TND',
    sportType: 'Basketball',
    participants: '8/10',
  },
];

export const mockCoaches = [
  {
    id: '1',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    name: 'Ahmed Ben Ali',
    specialty: 'Tennis Coach',
    rating: 4.8,
    price: '50 TND/hour',
    sport: 'Tennis',
  },
  {
    id: '2',
    avatarImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200',
    name: 'Sarah Johnson',
    specialty: 'Fitness Trainer',
    rating: 4.9,
    price: '40 TND/hour',
    sport: 'Fitness',
  },
];

export const mockCourts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400',
    courtName: 'Cité Olympique 2',
    type: 'indoor' as const,
    location: 'Tunis Centre',
    price: '30 TND/hour',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    courtName: 'Sports Complex Arena',
    type: 'outdoor' as const,
    location: 'La Marsa',
    price: '20 TND/hour',
  },
];

export const mockChallenges = [
  {
    id: '1',
    name: 'Alex Johnson',
    age: 28,
    location: 'Tunis',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    commonSports: ['Tennis', 'Football', 'Basketball'],
  },
  {
    id: '2',
    name: 'Sarah Ben Ahmed',
    age: 25,
    location: 'La Marsa',
    profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200',
    commonSports: ['Swimming', 'Volleyball'],
  },
  {
    id: '3',
    name: 'Mohamed Triki',
    age: 32,
    location: 'Sousse',
    profilePicture: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    commonSports: ['Football', 'Running'],
  },
  {
    id: '4',
    name: 'Leila Mansouri',
    age: 29,
    location: 'Sfax',
    profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    commonSports: ['Tennis', 'Yoga', 'Pilates'],
  },
];

export const mockSports = [
  { id: '1', name: 'Football', icon: 'football' },
  { id: '2', name: 'Tennis', icon: 'tennis-ball' },
  { id: '3', name: 'Basketball', icon: 'basketball' },
  { id: '4', name: 'Swimming', icon: 'water' },
  { id: '5', name: 'Running', icon: 'run' },
  { id: '6', name: 'Volleyball', icon: 'volleyball' },
  { id: '7', name: 'Badminton', icon: 'badminton' },
  { id: '8', name: 'Cycling', icon: 'bicycle' },
  { id: '9', name: 'Yoga', icon: 'body' },
  { id: '10', name: 'Fitness', icon: 'fitness' }
];

export const mockMessages = [
  {
    id: '1',
    message: 'Hey! Ready for our tennis match tomorrow?',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    isSender: false,
    status: 'read' as const,
  },
  {
    id: '2',
    message: 'Absolutely! See you at 9 AM at the court.',
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    isSender: true,
    status: 'delivered' as const,
  },
];
