import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Settings } from "lucide-react-native"; // Importing necessary icon
import ArrowButton from "@/src/components/ArrowButton"; // Assuming this is the path to your ArrowButton component
import IconRow from "@/src/components/Footer"; // Same for IconRow

const Home = () => {
  // Call useRouter at the top level of the component
  const router = useRouter();

  // Define the handlePress function
  const handlePress = (route: string, content: string) => {
    router.push({
      pathname: `/(main)/[content]`,
      params: { content },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#030426] px-5">
      <View className="flex-1 my-10">
        <View className="flex-row justify-end items-center">
          <TouchableOpacity
            onPress={() => router.push("/(main)/UnderConstruction")}
          >
            <Settings color="#A020F0" size={36} />
          </TouchableOpacity>
        </View>

        <View className="flex justify-center items-center mt-5">
          <Text className="text-5xl text-purple-400 font-semibold">
            LEARNIVERSE
          </Text>
          <Text
            className="text-xl italic text-gray-600 mt-2"
            style={{ textAlign: "right", width: "100%" }}
          >
            ~Knowledge at your fingertips
          </Text>
        </View>

        <View className="flex gap-5 mt-10">
          <ArrowButton
            onPress={() => handlePress("/Formula-sheets", "Formula Sheets")}
            label="Formula sheets"
          />
          <ArrowButton
            onPress={() => handlePress("/Revision-Notes", "Revision Notes")}
            label="Revision Notes"
          />
          <ArrowButton
            onPress={() => handlePress("/Textbooks", "Textbooks")}
            label="Textbooks"
          />
        </View>

        {/* Position IconRow at the bottom of the screen */}
        <View className="absolute bottom-0 left-0 right-0 mb-5">
          <IconRow />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
