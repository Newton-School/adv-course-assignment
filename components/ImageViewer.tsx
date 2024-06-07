import { Image, StyleSheet, View } from "react-native";
import { ImageSourcePropType } from "react-native";

export default function ImageViewer({
  placeHolderSource,
  imageSource,
}: {
  placeHolderSource: ImageSourcePropType;
  imageSource: string;
}) {
  const imageSourceActual: ImageSourcePropType = imageSource
    ? { uri: imageSource }
    : placeHolderSource;

  return (
    <View style={styles.imageWrapper}>
      <Image
        source={imageSourceActual}
        style={styles.imageStyles}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 320,
    height: 440,
    borderRadius: 18,
    overflow: "hidden",
  },
  imageStyles: {
    width: "100%",
    height: "100%",
  },
});
