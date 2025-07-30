import { supabase } from '../../config/supabase';
import { useAuth } from './useAuth';

export const useSupabase = () => {
  const { setUser, setError } = useAuth();

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.name,
          avatar: data.user.user_metadata?.avatar_url,
        });
      }

      return { data, error: null };
    } catch (error: any) {
      setError(error.message);
      return { data: null, error };
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error: any) {
      setError(error.message);
      return { data: null, error };
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setUser(null);
      return { error: null };
    } catch (error: any) {
      setError(error.message);
      return { error };
    }
  };

  const getSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      return { data, error };
    } catch (error: any) {
      setError(error.message);
      return { data: null, error };
    }
  };

  return {
    supabase,
    signIn,
    signUp,
    signOut,
    getSession,
  };
};
