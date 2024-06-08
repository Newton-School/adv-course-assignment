import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ImageSourcePropType } from 'react-native';

export default function ImageViewer({ placeHolderSource, imageSource }: { placeHolderSource: ImageSourcePropType, imageSource: string }) {
  return (
      <View style={styles.container}>
        <Image
            source={imageSource ? { uri: imageSource } : placeHolderSource}
            style={styles.imageStyles}
            resizeMode="cover"
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  imageStyles: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
