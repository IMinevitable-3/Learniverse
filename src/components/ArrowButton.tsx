import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";

interface ArrowButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  label: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  onPress,
  label = "Next",
}) => {
  const labelFontSize = 16; // Adjust as needed
  const buttonHeight = labelFontSize * 2.5; // Adjusting button height based on font size
  const arrowSize = buttonHeight / 2; // Arrow size relative to button height

  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative flex items-center justify-center bg-purple-800"
      style={{ width: 200, height: buttonHeight }}
    >
      {/* Left Arrow Pointer */}
      <View
        className="absolute left-0 bottom-0"
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: arrowSize,
          borderTopWidth: arrowSize,
          borderTopColor: "transparent",
          borderBottomWidth: arrowSize,
          borderBottomColor: "transparent",
          borderLeftColor: "#030426",
        }}
      />

      {/* Right Arrow Pointer */}
      <View
        className="absolute right-[-20px] bottom-0"
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: arrowSize,
          borderTopWidth: arrowSize,
          borderTopColor: "transparent",
          borderBottomWidth: arrowSize,
          borderBottomColor: "transparent",
          borderLeftColor: "#6b21a8",
        }}
      />

      {/* Main Button Body */}
      <Text
        className="text-white font-semibold"
        style={{ fontSize: labelFontSize }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ArrowButton;
