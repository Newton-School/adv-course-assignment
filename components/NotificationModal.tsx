import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function NotificationModel({isVisible,onClose,message}){
    return(
        <Modal isVisible={isVisible}>
            <View style={styles.modalContent}>
                <Text style={styles.modalText}>{message}</Text>
                <Button title='Close' onPress={onClose}></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        marginTop: 50,
        backgroundColor: 'white',
        padding: 20,
        width: 500,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
});

