import { useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmojiList({
  onSelect,
  onCLose,
  userImages,
  onAddUserImage,
}: {
  onSelect: (emoji: ImageSourcePropType) => void;
  onCLose: () => void;
  userImages: ImageSourcePropType[];
  onAddUserImage: (image: ImageSourcePropType) => void;
}) {
  const [emojis] = useState([
    require("../assets/emoji1.png"),
    require("../assets/emoji2.png"),
    require("../assets/emoji3.png"),
    require("../assets/emoji4.png"),
    require("../assets/emoji5.png"),
    require("../assets/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={[...emojis, ...userImages, null]}
      contentContainerStyle={styles.emojiListContainer}
      renderItem={({ item, index }) => {
        if (item === null) {
          return (
            <Pressable onPress={onAddUserImage} style={styles.addIconContainer}>
              <Ionicons name="add" size={24} color="black" />
            </Pressable>
          );
        }
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCLose();
            }}
            key={index}
          >
            <Image source={item} style={styles.emoji} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  emojiListContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  emoji: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  addIconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
});
