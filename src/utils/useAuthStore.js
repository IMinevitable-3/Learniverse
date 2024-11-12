import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (status) => set({ isLoggedIn: status }),
    }),
    {
      name: "auth-storage", // Name for the persisted storage
      storage: createJSONStorage(() => AsyncStorage), // Use AsyncStorage for React Native
    }
  )
);

export default useAuthStore;
