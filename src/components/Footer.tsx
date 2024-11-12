import React from "react";
import { View, TouchableOpacity } from "react-native";
import { House, Video, FileSearch2 } from "lucide-react-native";

interface IconButtonProps {
  onPress: () => void;
  IconComponent: React.ComponentType<any>;
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, IconComponent }) => (
  <TouchableOpacity onPress={onPress} className="p-2">
    <IconComponent size={32} color="#6B21A8" />
  </TouchableOpacity>
);

const IconRow: React.FC = () => {
  return (
    <View className="flex-row justify-between mx-5">
      <View>
        <IconButton
          onPress={() => console.log("Home clicked")}
          IconComponent={House}
        />
      </View>
      <View>
        <IconButton
          onPress={() => console.log("Video clicked")}
          IconComponent={Video}
        />
      </View>

      <View>
        <IconButton
          onPress={() => console.log("Search clicked")}
          IconComponent={FileSearch2}
        />
      </View>
    </View>
  );
};

export default IconRow;
