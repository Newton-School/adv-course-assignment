import {Pressable, StyleSheet, Text, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ButtonView({text, onPress, theme , Name}: {text: string, onPress: () => void, theme?: string, Name?:string}) {

    if(theme === 'primary') {
        return (
            <View style={[styles.btnContainer, styles.primaryContainer]}>
                <Pressable
                    style={[styles.button, styles.primaryButton]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name={Name === "From Local" ? "picture-o" : "random"}
                        size={24}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.text, styles.primaryText]}>{text}</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={[styles.btnContainer , styles.secondaryContainer]}>
            <Pressable
                style={[styles.button , styles.secondaryButton]}
                onPress={onPress}
            >
                <Text style={[styles.text, styles.primaryText]}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 160,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '800'
    },
    buttonIcon: {
        paddingRight: 8
    },
    primaryContainer: {
        borderWidth: 1,
        borderColor: '#ffd33d',
        borderRadius: 18,
    },
    primaryButton: {
        backgroundColor: '#fff',
    },
    primaryText: {
        color: "#25292e"
    },
    secondaryContainer: {
        borderWidth: 1,
        borderColor: '#ffd33d',
        borderRadius: 18,
    },
    secondaryButton: {
        backgroundColor: '#fff',
    }
});
