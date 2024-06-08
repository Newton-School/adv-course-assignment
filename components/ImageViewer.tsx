import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ImageSourcePropType } from 'react-native';

export default function ImageViewer({ placeHolderSource, imageSource }: { placeHolderSource: ImageSourcePropType, imageSource: string }) {
  const imageSourceActual: ImageSourcePropType = imageSource ? { uri: imageSource } : placeHolderSource;
  return (
      <View style={styles.shadowContainer}>
        <Image
            source={imageSourceActual}
            style={styles.imageStyles}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    width: 320,
    height: 440,
    borderRadius: 18,
    shadowColor: '#00b894',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 15,
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  }
});
