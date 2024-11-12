import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UnderConstructionPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🚧</Text>
      <Text style={styles.title}>Under Construction</Text>
      <Text style={styles.message}>
        We're working hard to bring something amazing. Stay tuned!
      </Text>
      <Text style={styles.subMessage}>Estimated launch: Coming soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2D2D2D",
    padding: 20,
  },
  icon: {
    fontSize: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFEB3B",
    marginTop: 10,
  },
  message: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 10,
    textAlign: "center",
  },
  subMessage: {
    fontSize: 14,
    color: "#B0B0B0",
    marginTop: 10,
    textAlign: "center",
  },
});

export default UnderConstructionPage;
