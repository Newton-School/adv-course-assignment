import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import ButtonView from "./ButtonView";

export default function ThankYouScreen({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.container}>
      <ConfettiCannon count={150} origin={{ x: 0, y: 0 }} fadeOut={true} />
      <ConfettiCannon count={150} origin={{ x: 1600, y: 0 }} fadeOut={true} />
      <Text style={styles.thankyou}>Thank You!!!</Text>
      <Text style={styles.text}>Your picture has been saved successfully!</Text>
      <ButtonView
        theme={"primary"}
        text={"Here we go Again!"}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  thankyou: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
});
