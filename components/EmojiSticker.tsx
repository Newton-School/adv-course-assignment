import {ImageSourcePropType, Pressable, StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiSticker({
  imageSize,
  stickerSource,
  imageBoundaries,
  onRemove,
}: {
  imageSize: number;
  stickerSource: ImageSourcePropType;
  imageBoundaries: { width: number; height: number };
  onRemove: () => void;
}) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
    if (scaleImage.value === imageSize) {
      scaleImage.value = imageSize * 2;
    } else {
      scaleImage.value = imageSize;
    }
  });

  const maxTranslateX = imageBoundaries.width - scaleImage.value;
  const maxTranslateY = imageBoundaries.height - scaleImage.value;

  const panGesture = Gesture.Pan().onChange((event) => {
    translateX.value = Math.max(0, Math.min(maxTranslateX, translateX.value + event.changeX));
    translateY.value = Math.max(0, Math.min(maxTranslateY, translateY.value + event.changeY));
    })
  const imageStyles = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
  });
  const viewStyles = useAnimatedStyle(() => {
    return {
      transform: [
                {translateX: translateX.value},
                {translateY: translateY.value}
            ]
        }
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
        <Pressable
          style={styles.removeButton}
          onPress={onRemove}
          hitSlop={20}
        >
          <MaterialIcons name="close" size={14} color="#fff" />
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  emojiStickerContainer: {
    top: -442,
  },
  removeButton: {
    position: 'absolute',
    top: -16,
    right: 260,
    backgroundColor: '#ff3333',
    borderRadius: 12,
    padding: 4,
  },
});