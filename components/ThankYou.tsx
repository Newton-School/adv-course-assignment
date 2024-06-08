import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

interface ThankYouProps {
    reset?: () => void
}

const ThankYou = ({reset}: ThankYouProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.thankYouText}>Thank You For Believing in us</Text>
            <Image
                source={require('../assets/images/ThankYouPanda.jpeg')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={reset}>Experience Again</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(3 7 18)', // Change this color to suit your app theme
    },
    thankYouText: {
        fontSize: 34, // Adjust font size as needed
        fontWeight: 'bold',
        color: '#ffffff', // Change text color to suit your app theme
        marginBottom: 50,
    },
    image: {
        width: width * 0.8, // Adjust width as needed
        height: height * 0.4, // Adjust height as needed
        borderRadius: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#00b894',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 26,
    },
});

export default ThankYou;
