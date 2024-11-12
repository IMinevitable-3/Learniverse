import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter";
import useAuthStore from "../utils/useAuthStore";
import "../../global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({ Inter_300Light });
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      // Wait briefly for `isLoggedIn` to stabilize
      setTimeout(() => {
        SplashScreen.hideAsync();
        setIsReady(true); // Mark ready only after fonts and state load
        setLoading(false);
      }, 1000); // 100 ms delay to wait for async state
    }
  }, [fontsLoaded, isLoggedIn]);

  if (loading || !fontsLoaded || !isReady) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="(main)" />
      ) : (
        <Stack.Screen name="(auth)" />
      )}
    </Stack>
  );
};

export default RootLayout;
