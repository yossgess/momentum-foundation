export interface ProfileData {
  id: string;
  name: string;
  age: number;
  distance: number;
  sports: string[];
  images: string[];
  bio?: string;
}

export const mockProfiles: ProfileData[] = [
  {
    id: "p001",
    name: "Sofia",
    age: 26,
    distance: 2.1,
    sports: ["Padel", "Yoga"],
    images: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    ],
    bio: "Love staying active and meeting new people through sports!"
  },
  {
    id: "p002",
    name: "David",
    age: 30,
    distance: 5.4,
    sports: ["Running", "Crossfit"],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    ],
    bio: "Fitness enthusiast looking for workout partners and challenges!"
  },
  {
    id: "p003",
    name: "Emma",
    age: 24,
    distance: 1.8,
    sports: ["Tennis", "Swimming"],
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
    ],
    bio: "Tennis player seeking competitive matches and fun!"
  },
  {
    id: "p004",
    name: "Alex",
    age: 28,
    distance: 3.2,
    sports: ["Basketball", "Football"],
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400"
    ],
    bio: "Team sports lover, always up for a good game!"
  },
  {
    id: "p005",
    name: "Maya",
    age: 27,
    distance: 4.1,
    sports: ["Volleyball", "Pilates"],
    images: [
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
    ],
    bio: "Volleyball enthusiast and wellness advocate!"
  }
];
