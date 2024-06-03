import {Pressable, StyleSheet, Text, View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {getBackgroundColor} from "@expo/metro-runtime/build/error-overlay/UI/LogBoxStyle";

export default function ButtonView({text, onPress, theme}: {text: string, onPress: () => void, theme?: string}) {
    if(theme === 'primary') {
        return (
            <View style={[styles.btnContainer, {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18}]}>
                <Pressable
                    style={[styles.button, {backgroundColor: '#fff'}]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={24}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.text, { color: "#25292e"}]}>{text}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View style={styles.btnContainer}>
            <Pressable
                style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
   btnContainer: {
       width: 320,
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
        fontSize: 18,
        fontWeight: '500'
    },
    buttonIcon: {
        paddingRight: 8
    }
});
