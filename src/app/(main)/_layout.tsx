import React from "react";
import { Stack } from "expo-router";

const MainStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="UnderConstruction" />
      <Stack.Screen name="[content]" />
    </Stack>
  );
};

export default MainStack;
