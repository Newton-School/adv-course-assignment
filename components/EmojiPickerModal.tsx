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
                        <div style={styles.circle}>
                            <MaterialIcons name="close" color="#17252a" size={25}/>
                        </div>
                        
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    circle:{
        display: 'flex', 
        width: 25,
        height: 25,
        borderRadius: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#feffff', 
        padding: 5,
        marginTop: 4,


    },

    modalContainer: {
        height: '30%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
        
    },
    titleContainer: {
        height: '20%',
        backgroundColor: '#3aafa9',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 1000,
        marginVertical: 10,
        color: '#17252a',
        fontSize: 18,
        lineHeight: 24,
    }
})
