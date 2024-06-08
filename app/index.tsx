import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Platform, Alert } from "react-native";
import { ImageSourcePropType } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from "react-native-view-shot";
import domToImage from 'dom-to-image';

import ImageViewer from "@/components/ImageViewer";
import ButtonView from "@/components/ButtonView";
import CircularButton from "@/components/CircularButton";
import IconButton from "@/components/IconButton";
import EmojiPickerModal from "@/components/EmojiPickerModal";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

export default function Index() {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(null);
    const imageRef = useRef(null);
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        setImageUrl('https://picsum.photos/440/320');
    }, []);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            Alert.alert("You cancelled the image picker");
        }
    };

    const onReset = () => {
        setShowAppOptions(false);
        setSelectedImage('');
        setPickedEmoji(null);
    }

    const onAddSticker = () => {
        setModalVisible(true);
    }

    const onSaveImageAsync = async () => {
        if (Platform.OS !== 'web') {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });

                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    Alert.alert("Image saved successfully");
                }
            } catch (e) {
                Alert.alert("An error occurred while saving the image");
            }
        } else {
            try {
                if (imageRef.current) {
                    const dataUrl = await domToImage.toJpeg(imageRef.current, {
                        width: 320,
                        height: 440,
                        quality: 1
                    });
                    let link = document.createElement('a');
                    link.download = 'image.jpeg';
                    link.href = dataUrl;
                    link.click();
                }
            } catch (e) {
                Alert.alert("An error occurred while saving the image");
            }
        }
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const changeRandomImage = () => {
        setImageUrl(`https://picsum.photos/440/320?random=${Math.random()}`);
    }

    if (status === null) {
        requestPermission();
    }

    return (
        <GestureHandlerRootView style={styles.background}>
            <View style={styles.imageContainer} ref={imageRef} collapsable={false}>
                <ImageViewer
                    placeHolderSource={require('@/assets/images/background-image.png')}
                    imageSource={selectedImage || imageUrl}
                />
                {pickedEmoji ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/> : null}
            </View>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon={"refresh"} onPress={onReset} text={"Reset"}/>
                        <CircularButton onPress={onAddSticker}/>
                        <IconButton icon={"save-alt"} onPress={onSaveImageAsync} text={"Save"}/>
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    <View style={styles.footerRow}>
                        <ButtonView theme={'primary'} text={'Choose a photo'} onPress={pickImageAsync} Name={"From Local"}/>
                        <ButtonView theme={'primary'} text={'Random'} onPress={changeRandomImage} Name={"Random"}/>
                    </View>
                    <ButtonView theme={"secondary"} text={'Use this photo'} onPress={() => setShowAppOptions(true) }/>
                </View>
            )}
            <EmojiPickerModal isVisible={modalVisible} onClose={closeModal}>
                <EmojiList onSelect={setPickedEmoji} onCLose={closeModal}/>
            </EmojiPickerModal>
            <StatusBar style="inverted"/>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
        color: '#fff',
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center'
    },
    footerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80
    },
    optionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    }
});
