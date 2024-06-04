import { useState } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

export default function EmojiList({
  onSelect,
  onCLose,
  setIsModified,
}: {
  onSelect: (emoji: ImageSourcePropType) => void;
  onCLose: () => void;
  setIsModified: (value: boolean) => void;
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
      data={emojis}
      contentContainerStyle={styles.emojiListContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              setIsModified(true);
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
});
