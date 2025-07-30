import { useAuthStore } from '../stores/authStore';

export const useAuth = () => {
  const {
    user,
    userProfile,
    isAuthenticated,
    isLoading,
    error,
    setUser,
    setUserProfile,
    setLoading,
    setError,
    login,
    register,
    logout,
    clearError,
    initialize,
  } = useAuthStore();

  return {
    user,
    userProfile,
    isAuthenticated,
    isLoading,
    error,
    setUser,
    setUserProfile,
    setLoading,
    setError,
    login,
    register,
    logout,
    clearError,
    initialize,
  };
};
