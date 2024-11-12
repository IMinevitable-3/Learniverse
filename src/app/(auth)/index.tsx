import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/(auth)/login");
  };

  return (
    <View className="flex-1 bg-[#030426] justify-center items-center px-3">
      {/* <Image
        source={{ uri: "https://your-logo-url.png" }} 
        className="w-16 h-16 mb-4"
      /> */}
      <Text className="text-lg text-purple-400 font-semibold">LEARNIVERSE</Text>
      <Text className="text-6xl text-white font-semibold mt-10">Let's Get</Text>
      <Text className="text-5xl text-purple-400 font-semibold">Started!</Text>
      <TouchableOpacity onPress={handleSignIn} className="w-full mt-5 px-20">
        <LinearGradient
          colors={["#873BB4", "#6F28A5"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            width: "100%",
            height: 48,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="text-white text-lg font-bold mx-3">Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
