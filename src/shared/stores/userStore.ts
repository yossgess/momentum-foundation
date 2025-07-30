import { create } from 'zustand';
import { UserProfile } from './authStore';

interface UserState {
  profiles: UserProfile[];
  currentProfile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  
  setProfiles: (profiles: UserProfile[]) => void;
  setCurrentProfile: (profile: UserProfile | null) => void;
  addProfile: (profile: UserProfile) => void;
  updateProfile: (id: string, updates: Partial<UserProfile>) => void;
  removeProfile: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  profiles: [],
  currentProfile: null,
  isLoading: false,
  error: null,

  setProfiles: (profiles) => {
    set({ profiles });
  },

  setCurrentProfile: (currentProfile) => {
    set({ currentProfile });
  },

  addProfile: (profile) => {
    set((state) => ({
      profiles: [...state.profiles, profile],
    }));
  },

  updateProfile: (id, updates) => {
    set((state) => ({
      profiles: state.profiles.map((profile) =>
        profile.id === id ? { ...profile, ...updates } : profile
      ),
      currentProfile:
        state.currentProfile?.id === id
          ? { ...state.currentProfile, ...updates }
          : state.currentProfile,
    }));
  },

  removeProfile: (id) => {
    set((state) => ({
      profiles: state.profiles.filter((profile) => profile.id !== id),
      currentProfile:
        state.currentProfile?.id === id ? null : state.currentProfile,
    }));
  },

  setLoading: (isLoading) => {
    set({ isLoading });
  },

  setError: (error) => {
    set({ error });
  },

  clearError: () => {
    set({ error: null });
  },
}));
