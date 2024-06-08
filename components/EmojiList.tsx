import React, { useState } from 'react';
import { FlatList, Image, ImageSourcePropType, Platform, Pressable, StyleSheet, View, Button } from "react-native";

export default function EmojiList({ onSelect, onClose, addCustomEmoji }: {
    onSelect: (emoji: ImageSourcePropType) => void,
    onClose: () => void,
    addCustomEmoji: () => void
}) {
    const [emojis] = useState([
        require('../assets/emoji1.png'),
        require('../assets/emoji2.png'),
        require('../assets/emoji3.png'),
        require('../assets/emoji4.png'),
        require('../assets/emoji5.png'),
        require('../assets/emoji6.png'),
    ]);
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web'}
                data={emojis}
                contentContainerStyle={styles.emojiListContainer}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable
                            onPress={() => {
                                onSelect(item);
                                onClose();
                            }}
                            key={index}
                        >
                            <Image
                                source={item}
                                style={styles.emoji}
                            />
                        </Pressable>
                    )
                }}
            />
            <Button title="Add Custom Emoji" onPress={addCustomEmoji} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111827',
    },
    emojiListContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emoji: {
        maxWidth: 90,
        maxHeight: 90,
        marginRight: 20
    },

});
