import { Animated } from 'react-native';

export type ScaleAnimationSet = {
 scale: Animated.Value;
 handlePressIn: () => void;
 handlePressOut: () => void;
};

export const createScaleAnimation = (scale: Animated.Value): ScaleAnimationSet => {
 const handlePressIn = (): void => {
  Animated.spring(scale, {
   toValue: 1.04,
   friction: 3,
   tension: 100,
   useNativeDriver: true,
  }).start();
 };

 const handlePressOut = (): void => {
  Animated.spring(scale, {
   toValue: 1,
   friction: 3,
   tension: 100,
   useNativeDriver: true,
  }).start();
 };

 return {
  scale,
  handlePressIn,
  handlePressOut,
 };
};
