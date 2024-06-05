import React, { useRef, useState } from 'react';
import { StyleSheet, View, Platform, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import domToImage from 'dom-to-image';

import ImageViewer from '@/components/ImageViewer';
import ButtonView from '@/components/ButtonView';
import CircularButton from '@/components/CircularButton';
import IconButton from '@/components/IconButton';
import EmojiPickerModal from '@/components/EmojiPickerModal';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';
import { ImageSourcePropType } from 'react-native';

export default function Index() {
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [pickedEmojis, setPickedEmojis] = useState<ImageSourcePropType[]>([]);
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
            Alert.alert("You cancelled the image picker");
        }
    };

    const onReset = () => {
        setShowAppOptions(false);
        setSelectedImage('');
        setPickedEmojis([]);
    };

    const onAddSticker = () => {
        setModalVisible(true);
    };

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
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleEmojiSelect = (emoji: ImageSourcePropType) => {
        setPickedEmojis(prevEmojis => [...prevEmojis, emoji]);
    };

    if (status === null) {
        requestPermission();
    }

    return (
        <GestureHandlerRootView style={styles.background}>
            <View style={styles.imageContainer} ref={imageRef} collapsable={false}>
                <ImageViewer
                    placeHolderSource={require('@/assets/images/background-image.png')}
                    imageSource={selectedImage}
                />
                {pickedEmojis.map((emoji, index) => (
                    <EmojiSticker key={index} imageSize={40} stickerSource={emoji} />
                ))}
            </View>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon="refresh" onPress={onReset} text="Reset" />
                        <CircularButton onPress={onAddSticker} />
                        <IconButton icon="save-alt" onPress={onSaveImageAsync} text="Save" />
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    <ButtonView theme="primary" text="Choose a photo" onPress={pickImageAsync} />
                    <ButtonView text="Use this photo" onPress={() => setShowAppOptions(true)} />
                </View>
            )}
            <EmojiPickerModal isVisible={modalVisible} onClose={closeModal}>
                <EmojiList onSelect={handleEmojiSelect} />
            </EmojiPickerModal>
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
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
});
