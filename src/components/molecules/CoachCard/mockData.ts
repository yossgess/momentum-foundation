import { CoachCardData } from './CoachCard.types';

export const mockCoachData: CoachCardData[] = [
  {
    id: '1',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    name: 'Ahmed Ben Ali',
    specialty: 'Tennis Coach',
    rating: 4.8,
    price: '50 TND/hour',
    sportIcon: 'tennisball',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    specialty: 'Fitness Trainer',
    rating: 4.6,
    price: '40 TND/hour',
    sportIcon: 'fitness',
  },
  {
    id: '3',
    avatarImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    name: 'Mohamed Trabelsi',
    specialty: 'Football Coach',
    rating: 4.9,
    price: '60 TND/hour',
    sportIcon: 'football',
  },
];
