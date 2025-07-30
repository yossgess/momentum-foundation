import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export interface UserProfile {
  id: string;
  userId: string;
  name: string;
  bio?: string;
  avatar?: string;
  sports: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  location?: {
    latitude: number;
    longitude: number;
    address: string;
  };
  preferences: {
    maxDistance: number;
    ageRange: [number, number];
    skillLevels: string[];
  };
  role: 'enthusiast' | 'coach';
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  user: User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  setUser: (user: User | null) => void;
  setUserProfile: (profile: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      userProfile: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user) => {
        set({ user, isAuthenticated: !!user });
      },

      setUserProfile: (userProfile) => {
        set({ userProfile });
      },

      setLoading: (isLoading) => {
        set({ isLoading });
      },

      setError: (error) => {
        set({ error });
      },

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          console.log('Login:', { email, password });
          
          const mockUser: User = {
            id: '1',
            email,
            name: 'Mock User',
          };
          
          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            error: error.message || 'Login failed',
            isLoading: false,
          });
          throw error;
        }
      },

      register: async (email: string, password: string, name: string) => {
        set({ isLoading: true, error: null });
        try {
          console.log('Register:', { email, password, name });
          
          const mockUser: User = {
            id: '1',
            email,
            name,
          };
          
          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            error: error.message || 'Registration failed',
            isLoading: false,
          });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          set({
            user: null,
            userProfile: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        } catch (error: any) {
          set({
            error: error.message || 'Logout failed',
            isLoading: false,
          });
        }
      },

      clearError: () => {
        set({ error: null });
      },

      initialize: async () => {
        set({ isLoading: true });
        try {
          console.log('Initializing auth...');
          set({ isLoading: false });
        } catch (error: any) {
          set({
            error: error.message || 'Initialization failed',
            isLoading: false,
          });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        userProfile: state.userProfile,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
