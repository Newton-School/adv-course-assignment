import {Pressable, StyleSheet, View} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircularButton({onPress}: { onPress: () => void }) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable
                onPress={onPress}
                style={styles.button}
            >
                <MaterialIcons
                    name={"add"}
                    size={38}
                    color="#25292e"
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#00b894',
        borderRadius: 42,
        padding: 3
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#fff'
    },
});
