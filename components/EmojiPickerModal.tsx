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
                        <MaterialIcons name="close" style={styles.cross} size={22}/>
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
        width: '93%',
        backgroundColor: '#000',
        borderRadius:20,
        position: 'absolute',
        bottom: 0,
        margin:15,
    },
    titleContainer: {
        height: '22%',
        backgroundColor: '#000',
        borderRadius:20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#fff',
        fontSize: 22,
        lineHeight: 24,
        margin:"auto",
    },
    cross:{
        marginTop:8,
        color:"#fff",
        borderRadius:100,
        backgroundColor:"#3a3a3a",
        padding:3
    }
})
