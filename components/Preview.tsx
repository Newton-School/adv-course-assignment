import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ImagePreviewBarProps {
    images: { uri: string }[];
    selectedImage: string;
    onSelectImage: (imageUri: string) => void;
}

const ImagePreviewBar: React.FC<ImagePreviewBarProps> = ({
                                                             images,
                                                             selectedImage,
                                                             onSelectImage,
                                                         }) => {
    return (
        <View style={styles.previewBar}>
            {images.map((image, index) => (
                <TouchableOpacity key={index} onPress={() => onSelectImage(image.uri)}>
                    <Image
                        source={{ uri: image.uri }}
                        style={[
                            styles.previewImage,
                            selectedImage === image.uri ? styles.selected : styles.deselected,
                        ]}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    previewBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    previewImage: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    selected: {
        opacity: 1,
        borderColor: "#FFD700",
        borderWidth: 2,
    },
    deselected: {
        opacity: 0.5,
        borderColor: "transparent",
        borderWidth: 2,
    },
});

export default ImagePreviewBar;
