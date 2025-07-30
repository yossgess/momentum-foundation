import { CourtCardData } from './CourtCard.types';

export const mockCourtData: CourtCardData[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    courtName: 'Cité Olympique 2',
    type: 'indoor',
    location: 'Tunis Centre',
    isFavorite: true,
  },
  {
    id: '2',
    courtName: 'Tennis Club Carthage',
    type: 'outdoor',
    location: 'Carthage',
    isFavorite: false,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    courtName: 'Sports Complex Ariana',
    type: 'synthetic',
    location: 'Ariana',
    isFavorite: true,
  },
];
