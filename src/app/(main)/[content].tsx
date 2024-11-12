import SpecificPage from "@/src/components/SpecificPage";
import { useLocalSearchParams } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ArrowButton from "@/src/components/ArrowButton";
import TextOnImage from "@/src/components/TextOnImage";
import bookImageMine from "@/src/constants/imagePath";
export default function DetailsScreen() {
  const { content } = useLocalSearchParams();
  const onPress = () => {};

  return (
    <SafeAreaView className="flex-1 bg-[#030426] px-5">
      <View className="flex-1 my-10">
        <View className="flex-row justify-start items-center">
          <TouchableOpacity onPress={() => router.replace("/(main)/")}>
            <ChevronLeft color="#A020F0" size={36} />
          </TouchableOpacity>
        </View>
        <View className="flex mt-6">
          <ArrowButton onPress={onPress} label={content} />
        </View>

        <View className="mt-6 flex-col justify-between items-center flex-1">
          <Image
            source={require("@/src/assets/images/favicon.png")}
            className="flex-1  mx-1 h-20 w-20"
            resizeMode="contain"
          />
          <Image
            source={require("@/src/assets/images/favicon.png")}
            className="flex-1 h-20 w-20 mx-1"
            resizeMode="contain"
          />
          <Image
            source={require("@/src/assets/images/favicon.png")}
            className="flex-1 h-20 w-20 mx-1"
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
