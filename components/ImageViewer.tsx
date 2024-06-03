import {Image, StyleSheet} from "react-native";
import {ImageSourcePropType} from "react-native";

export default function ({placeHolderSource, imageSource}: {placeHolderSource: ImageSourcePropType, imageSource: string}) {
  const imageSourceActual: ImageSourcePropType = imageSource ? {uri: imageSource} : placeHolderSource;
  return (
    <Image
      source={imageSourceActual}
      style={styles.imageStyles}
    />
  );
}

const styles = StyleSheet.create({
  imageStyles: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})
