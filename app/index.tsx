import { useRef, useState } from "react";

import {
    ImageSourcePropType, Platform, StyleSheet, View, FlatList, Image, TouchableOpacity
} from "react-native";
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

const backgroundImages = [
    require("@/assets/images/background-image-1.png"),
    require("@/assets/images/background-image-2.png"),
    require("@/assets/images/background-image-3.png"),
    require("@/assets/images/background-image-4.png"),
    require("@/assets/images/background-image-5.png"),
];

export default function Index() {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(null);
    const [backgroundIndex, setBackgroundIndex] = useState<number>(0);
    const imageRef = useRef(null);


    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert("you cancelled the image picker");
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
                        quality: 1
                    });
                    let link = document.createElement('a');
                    link.download = 'image.jpeg';
                    link.href = dataUrl;
                    link.click();
                }
            } catch (e) {
                alert("An error occurred while saving the image");
                ;
            }


        }

    }
    const closeModal = () => {
        setModalVisible(false);
    }
    const renderBackgroundImage = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => setBackgroundIndex(index)}>
                <Image
                    source={item}
                    style={[
                        styles.backgroundThumbnail,
                        { opacity: index === backgroundIndex ? 1 : 0.5 },
                    ]}
                />
            </TouchableOpacity>
        );
    };

    if (status === null) {
        requestPermission();
    }

    //
    return (
        <GestureHandlerRootView
            style={styles.background}
        >
            <FlatList
                data={backgroundImages}
                renderItem={renderBackgroundImage}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.thumbnailList}
            />
            <View
                style={styles.imageContainer}
                ref={imageRef}
                collapsable={false}
            >
                <ImageViewer
                    placeHolderSource={backgroundImages[backgroundIndex]}
                    imageSource={selectedImage}
                />
                {pickedEmoji ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> : null}
            </View>
            {
                showAppOptions ? (
                    <View style={styles.optionsContainer}>
                        <View style={styles.optionsRow}>
                            <IconButton icon={"refresh"} onPress={onReset} text={"Reset"} />
                            <CircularButton onPress={onAddSticker} />
                            <IconButton icon={"save-alt"} onPress={onSaveImageAsync} text={"Save"} />
                        </View>
                    </View>
                ) : (
                    <View style={styles.footerContainer}>
                        <View style={styles.spacer} />
                        <ButtonView
                            theme={'primary'}
                            text={'Choose a photo'} onPress={pickImageAsync} />
                        <ButtonView text={'Use this photo'} onPress={
                            () => {
                                setShowAppOptions(true);
                            }
                        } />
                    </View>
                )
            }
            <EmojiPickerModal isVisible={modalVisible} onClose={closeModal}>
                <EmojiList onSelect={setPickedEmoji} onCLose={closeModal} />
            </EmojiPickerModal>
            <StatusBar style="inverted" />
        </GestureHandlerRootView>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#25292e',
        paddingTop: 50,
    },
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
        color: '#fff',
    },
    footerContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    spacer: {
        height: 50,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionsContainer: {
        bottom: 1,
        width: '100%',
        alignItems: 'center',
    },
    optionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    thumbnailList: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    backgroundThumbnail: {
        width: 80,
        height: 80,
        marginHorizontal: 5,
        borderRadius: 10,
    },
});
