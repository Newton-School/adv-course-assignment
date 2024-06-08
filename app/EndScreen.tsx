import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Confetti from 'react-confetti';
import { useNavigation } from 'expo-router';
const EndScreen = () => {
    const navigation = useNavigation();
    const handleRestart = () => {
        navigation.navigate('index');
    };

    return (
        <View style={styles.container}>
                <Confetti 
                    numberOfPieces={1000}
                    gravity={0.05}
                    initialVelocityY={40}
                    recycle={false}
                />
            <Text style={styles.thankYouText}>Thank You!</Text>
            <Text style={styles.messageText}>Your photo has been saved successfully.</Text>
            <TouchableOpacity style={styles.button} onPress={handleRestart}>
                <Text style={styles.buttonText}>Experience Again</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(37, 41, 46, 1.00)'
    },
    thankYouText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'rgba(255, 255, 255, 1.00)'
    },
    messageText: {
        fontSize: 18,
        marginBottom: 40,
        textAlign: 'center',
        paddingHorizontal: 20,
        color:'rgba(255, 255, 255, 1.00)'
    },
    button: {
        fontSize:16,
        backgroundColor:'#007bff',
        borderRadius:4,
        paddingVertical:10,
        paddingHorizontal:20
    },
    buttonText: {
        fontSize:18,
        color:'#fff'
    }
});

export default EndScreen;