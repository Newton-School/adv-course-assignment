import React, { useRef, useState, useEffect } from "react";
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domToImage from "dom-to-image";

import ImageViewer from "@/components/ImageViewer";
import ButtonView from "@/components/ButtonView";
import CircularButton from "@/components/CircularButton";
import IconButton from "@/components/IconButton";
import EmojiPickerModal from "@/components/EmojiPickerModal";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import ImagePreviewBar from "@/components/ImagePreviewBar";

const defaultImages = [
  { uri: "../assets/images/background-image.png" },
  { uri: "../assets/images/background-image-2.jpg" },
  { uri: "../assets/images/background-image-3.jpg" },
  { uri: "../assets/images/background-image-4.jpg" },
];

export default function Index() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string>(
    defaultImages[0].uri
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(
    null
  );
  const imageRef = useRef(null);

  useEffect(() => {
    if (status === null) {
      requestPermission();
    }
  }, [status]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You cancelled the image picker");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(defaultImages[0].uri);
    setPickedEmoji(null);
  };

  const onAddSticker = () => {
    setModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Image saved successfully");
        }
      } catch (e) {
        alert("An error occurred while saving the image");
      }
    } else {
      try {
        if (imageRef.current) {
          const dataUrl = await domToImage.toJpeg(imageRef.current, {
            width: 320,
            height: 440,
            quality: 1,
          });
          let link = document.createElement("a");
          link.download = "image.jpeg";
          link.href = dataUrl;
          link.click();
        }
      } catch (e) {
        alert("An error occurred while saving the image");
      }
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelectDefaultImage = (imageUri: string) => {
    setSelectedImage(imageUri);
    setShowAppOptions(true);
  };

  return (
    <GestureHandlerRootView style={styles.background}>
      <ImagePreviewBar
        images={defaultImages}
        selectedImage={selectedImage}
        onSelectImage={handleSelectDefaultImage}
      />
      <View style={styles.imageContainer} ref={imageRef} collapsable={false}>
        <ImageViewer
          placeHolderSource={require("@/assets/images/background-image.png")}
          imageSource={selectedImage}
        />
        {pickedEmoji ? (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        ) : null}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={"refresh"} onPress={onReset} text={"Reset"} />
            <CircularButton onPress={onAddSticker} />
            <IconButton
              icon={"save-alt"}
              onPress={onSaveImageAsync}
              text={"Save"}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <ButtonView
            theme={"primary"}
            text={"Choose a photo"}
            onPress={pickImageAsync}
          />
          <ButtonView
            text={"Use this photo"}
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPickerModal isVisible={modalVisible} onClose={closeModal}>
        <EmojiList onSelect={setPickedEmoji} onClose={closeModal} />
      </EmojiPickerModal>
      <StatusBar style="inverted" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    color: "#fff",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 20,
  },
  optionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
});
