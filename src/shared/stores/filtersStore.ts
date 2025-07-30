import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface FilterState {
  distance: number;
  ageRange: [number, number];
  skillLevels: string[];
  sports: string[];
  availability: {
    days: string[];
    timeSlots: string[];
  };
  location: {
    latitude?: number;
    longitude?: number;
    radius: number;
  };
}

interface FiltersState {
  filters: FilterState;
  isActive: boolean;
  
  updateFilters: (updates: Partial<FilterState>) => void;
  resetFilters: () => void;
  setActive: (active: boolean) => void;
  updateDistance: (distance: number) => void;
  updateAgeRange: (ageRange: [number, number]) => void;
  updateSkillLevels: (skillLevels: string[]) => void;
  updateSports: (sports: string[]) => void;
  updateAvailability: (availability: Partial<FilterState['availability']>) => void;
  updateLocation: (location: Partial<FilterState['location']>) => void;
}

const defaultFilters: FilterState = {
  distance: 25,
  ageRange: [18, 65],
  skillLevels: ['beginner', 'intermediate', 'advanced', 'expert'],
  sports: [],
  availability: {
    days: [],
    timeSlots: [],
  },
  location: {
    radius: 25,
  },
};

export const useFiltersStore = create<FiltersState>()(
  persist(
    (set, get) => ({
      filters: defaultFilters,
      isActive: false,

      updateFilters: (updates) => {
        set((state) => ({
          filters: { ...state.filters, ...updates },
        }));
      },

      resetFilters: () => {
        set({
          filters: defaultFilters,
          isActive: false,
        });
      },

      setActive: (isActive) => {
        set({ isActive });
      },

      updateDistance: (distance) => {
        set((state) => ({
          filters: { ...state.filters, distance },
        }));
      },

      updateAgeRange: (ageRange) => {
        set((state) => ({
          filters: { ...state.filters, ageRange },
        }));
      },

      updateSkillLevels: (skillLevels) => {
        set((state) => ({
          filters: { ...state.filters, skillLevels },
        }));
      },

      updateSports: (sports) => {
        set((state) => ({
          filters: { ...state.filters, sports },
        }));
      },

      updateAvailability: (availability) => {
        set((state) => ({
          filters: {
            ...state.filters,
            availability: { ...state.filters.availability, ...availability },
          },
        }));
      },

      updateLocation: (location) => {
        set((state) => ({
          filters: {
            ...state.filters,
            location: { ...state.filters.location, ...location },
          },
        }));
      },
    }),
    {
      name: 'filters-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
