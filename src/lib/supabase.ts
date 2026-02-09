import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = "https://bntatxbwyheajskyrtuh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudGF0eGJ3eWhlYWpza3lydHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NjU0ODAsImV4cCI6MjA4NDI0MTQ4MH0.-NURd66S1cSOMSXt-C65FqdJWtnre9Jva55nJY5siwo";

// Memory fallback storage for environments where localStorage is not available
const memoryStorage: Record<string, string> = {};

const createSafeStorage = () => {
  const isLocalStorageAvailable = () => {
    try {
      const test = '__storage_test__';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  };

  if (isLocalStorageAvailable()) {
    return window.localStorage;
  }

  // Fallback to memory storage
  return {
    getItem: (key: string) => memoryStorage[key] || null,
    setItem: (key: string, value: string) => {
      memoryStorage[key] = value;
    },
    removeItem: (key: string) => {
      delete memoryStorage[key];
    },
  };
};

export const supabaseClient = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: createSafeStorage(),
    persistSession: true,
    autoRefreshToken: true,
  }
});