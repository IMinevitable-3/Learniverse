import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

type TextOnImageProps = {
  imageSource: ImageSourcePropType; // Correct typing for image sources
  text: string;
};

const TextOnImage: React.FC<TextOnImageProps> = ({ imageSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 120, // Adjust size as needed
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TextOnImage;
