import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPickerModal({
  isVisible,
  onClose,
  children,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={["#b0c4de", "#f0e68c"]} 
          style={styles.titleContainer}
        >
          <Text style={styles.title}>Pick an Emoji</Text>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </LinearGradient>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "20%",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  title: {
    color: "#25292e",
    fontSize: 22, 
    fontWeight: "700", 
    lineHeight: 30, 
    paddingHorizontal: 10,
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.4,
  },
  closeButton: {
    backgroundColor: "#25292e", 
    borderRadius: 20,
    padding: 5,
  },
});
