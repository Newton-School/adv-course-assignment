import React, {useEffect, useRef, useState} from "react";
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domToImage from "dom-to-image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Preview from "@/components/Preview";
import ThankYou from "@/components/ThankYou";
import AboutUs from "@/components/AboutUs";
import ImageViewer from "@/components/ImageViewer";
import ButtonView from "@/components/ButtonView";
import CircularButton from "@/components/CircularButton";
import IconButton from "@/components/IconButton";
import EmojiPickerModal from "@/components/EmojiPickerModal";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
const defaultImages = [
    { uri: "../assets/images/background-image.png" },
    { uri: "../assets/images/background-image-2.jpeg" },
    { uri: "../assets/images/background-image-3.jpeg" },
    { uri: "../assets/images/background-image-4.jpeg" },
    { uri: "../assets/images/background-image-5.jpeg" },
    { uri: "../assets/images/background-image-6.jpeg" },
    { uri: "../assets/images/background-image-7.jpeg" },
];
export default function Index() {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState<string>(defaultImages[0].uri);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedEmojis, setSelectedEmojis] = useState<
        { source: ImageSourcePropType, x: number, y: number }[]
    >([]);
    const imageRef = useRef(null);
    const [showAboutUs, setShowAboutUs] = useState(true);
    const [showThankYou, setshowThankYou] = useState(false);



    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            toast.error("You cancelled the image picker");
        }
    };

    const onReset = () => {
        setShowAppOptions(false);
        setSelectedImage(defaultImages[0].uri);
        setSelectedEmojis([]);
        setShowAboutUs(false);
        setshowThankYou(false)
    };
    useEffect(() => {
        if (status === null) {
            requestPermission();
        }
    }, [status]);

    const onAddSticker = () => {
        setModalVisible(true);
    };

    const onSaveImageAsync = async () => {
        if (selectedEmojis.length === 0) {
            toast.error("Tum Aise Galti Kaise Kr Skte Ho....");
            return;
        }
        if (Platform.OS !== "web") {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });

                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    toast.success("Image saved successfully");
                }
                setshowThankYou(true);
            } catch (e) {
                toast.error("An error occurred while saving the image");
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
                    setshowThankYou(true)
                }
            } catch (e) {
                toast.error("An error occurred while saving the image");
            }
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    const onSelectEmoji = (emoji: ImageSourcePropType) => {
        const imageWidth = 320;
        const imageHeight = 440;
        const emojiSize = 40;
        const maxX = imageWidth - emojiSize;
        const maxY = imageHeight - emojiSize;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        setSelectedEmojis([...selectedEmojis, { source: emoji, x: randomX, y: randomY }]);
    };

    const addCustomEmoji = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            onSelectEmoji({ uri: result.assets[0].uri });
            closeModal();
        } else {
            toast.error("You cancelled the image picker");
        }
    };
    const handleSelectDefaultImage = (imageUri: string) => {
        setSelectedImage(imageUri);
        setShowAppOptions(true);
    };

    return (
        <>
            <ToastContainer />
            {showAboutUs ? (
                <AboutUs reset={onReset} />
            ) : showThankYou ? (<ThankYou reset={onReset}/>) : (
                <GestureHandlerRootView style={styles.background}>
                    <View style={styles.imageContainer} ref={imageRef} collapsable={false}>
                        <ImageViewer
                            placeHolderSource={require("@/assets/images/background-image.png")}
                            imageSource={selectedImage}
                        />
                        <Preview
                            images={defaultImages}
                            selectedImage={selectedImage}
                            onSelectImage={handleSelectDefaultImage}
                        />
                        {selectedEmojis.map((emoji, index) => (
                            <EmojiSticker
                                key={index}
                                imageSize={40}
                                stickerSource={emoji.source}
                                initialX={emoji.x}
                                initialY={emoji.y}
                            />
                        ))}
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
                                onPress={() => {
                                    setShowAppOptions(true);
                                }}
                            />
                        </View>
                    )}
                    <EmojiPickerModal isVisible={modalVisible} onClose={closeModal}>
                        <EmojiList onSelect={onSelectEmoji} onClose={closeModal} addCustomEmoji={addCustomEmoji} />
                    </EmojiPickerModal>
                    <StatusBar style="inverted" />
                </GestureHandlerRootView>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(3 7 18)",
    },
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
        color: "#00b894",
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
    imageContainer: {
        width: 320,
        height: 440,
        position: "relative",
        marginBottom: 200,
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80,
    },
    optionsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
    },
});
