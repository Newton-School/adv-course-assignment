import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function EmojiSticker({ imageSize, stickerSource, initialX, initialY }: {
    imageSize: number,
    stickerSource: ImageSourcePropType,
    initialX: number,
    initialY: number,
}) {
    const scaleImage = useSharedValue(imageSize);
    const translateX = useSharedValue(initialX);
    const translateY = useSharedValue(initialY);
    const containerWidth = 320;  // Width of the image container
    const containerHeight = 440; // Height of the image container

    const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
        if (scaleImage.value === imageSize) {
            scaleImage.value = imageSize * 2;
        } else {
            scaleImage.value = imageSize;
        }
    });

    const panGesture = Gesture.Pan().onChange((event) => {
        const newTranslateX = translateX.value + event.changeX;
        const newTranslateY = translateY.value + event.changeY;
        const maxX = containerWidth - scaleImage.value;
        const maxY = containerHeight - scaleImage.value;

        translateX.value = Math.max(0, Math.min(maxX, newTranslateX));
        translateY.value = Math.max(0, Math.min(maxY, newTranslateY));
    });

    const imageStyles = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    const viewStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    });

    return (
        <GestureDetector gesture={panGesture}>
            <Animated.View style={[viewStyles, styles.emojiStickerContainer]}>
                <GestureDetector gesture={doubleTap}>
                    <Animated.Image
                        source={stickerSource}
                        resizeMode="contain"
                        style={[{
                            width: imageSize,
                            height: imageSize
                        }, imageStyles]}
                    />
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    emojiStickerContainer: {
        position: 'absolute',
    }
});