import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

interface ThankYouScreenProps {
  onExperienceAgain: () => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({
  onExperienceAgain,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        explosionSpeed={400}
        fallSpeed={4000}
        fadeOut
      />
      <Text style={styles.thankYouText}>Thank You</Text>
      <Text style={styles.infoText}>
        Your image has been downloaded successfully
      </Text>
      <TouchableOpacity style={styles.button} onPress={onExperienceAgain}>
        <Text style={styles.buttonText}>Experience Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  thankYouText: {
    fontFamily: "space-mono-regular",
    fontSize: 28,
    lineHeight: 32,
    color: "#fff",
    marginBottom: 20,
  },
  infoText: {
    fontFamily: "space-mono-regular",
    fontSize: 18,
    lineHeight: 22,
    color: "#fff",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#61dafb",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "space-mono-regular",
    color: "#fff",
    fontSize: 18,
  },
});

export default ThankYouScreen;
