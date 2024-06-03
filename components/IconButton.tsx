import {Pressable, StyleSheet, Text} from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({icon, onPress, text}: {
    icon: keyof typeof MaterialIcons.glyphMap,
    onPress: () => void,
    text: string,
    theme?: string
}) {
    return (
        <Pressable
            style={styles.iconButton}
            onPress={onPress}
        >
            <MaterialIcons name={icon} size={24} color="#fff"/>
            <Text style={styles.iconButtonLabel}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12
    }
})
