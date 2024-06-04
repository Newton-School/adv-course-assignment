import {Modal, Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


export default function EmojiPickerModal({isVisible, onClose, children}:
                                             { isVisible: boolean, onClose: () => void, children: React.ReactNode }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Pick an Emoji</Text>
                    <Pressable
                        onPress={onClose}
                    >
                        <MaterialIcons name="close" color="#ffd700" size={22} style={{ marginVertical: 5 }}/>
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '16%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 500,
        marginVertical: 4,
        color: '#ffd700',
        fontSize: 18,
        lineHeight: 24,
    }
})
