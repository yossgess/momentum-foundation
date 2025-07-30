import { EventCardData } from './EventCard.types';

export const mockEventData: EventCardData[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400',
    title: 'Tennis Morning Match',
    dateTime: '15 Aug - 09:00',
    location: 'Marsa Beach',
    price: '25 TND',
    sportType: 'Tennis',
    sportIcon: 'tennisball',
    participantCount: 4,
    maxParticipants: 6,
  },
  {
    id: '2',
    title: 'Football Training Session',
    dateTime: '16 Aug - 18:30',
    location: 'Stade Olympique',
    price: '15 TND',
    sportType: 'Football',
    sportIcon: 'football',
    participantCount: 8,
    maxParticipants: 12,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    title: 'Basketball Pickup Game',
    dateTime: '17 Aug - 20:00',
    location: 'City Sports Center',
    sportType: 'Basketball',
    sportIcon: 'basketball',
    participantCount: 6,
    maxParticipants: 10,
  },
];
