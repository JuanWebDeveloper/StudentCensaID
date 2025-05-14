import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, View, ScrollView } from 'react-native';

import IDCardFront from './src/components/IDCardFront';
import IDCardBack from './src/components/IDCardBack';
import FlipCardButton from './src/components/FlipCardButton';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();
 const [flipped, setFlipped] = useState(false);
 const rotateAnim = useRef(new Animated.Value(0)).current;

 const flipCard = () => {
  Animated.spring(rotateAnim, {
   toValue: flipped ? 0 : 180,
   friction: 8,
   tension: 10,
   useNativeDriver: true,
  }).start(() => setFlipped(!flipped));
 };

 const frontInterpolate = rotateAnim.interpolate({
  inputRange: [0, 180],
  outputRange: ['0deg', '180deg'],
 });

 const backInterpolate = rotateAnim.interpolate({
  inputRange: [0, 180],
  outputRange: ['180deg', '360deg'],
 });

 if (!fontsLoaded) return null;

 return (
  <ScrollView onLayout={onFontsReady} contentContainerStyle={styles.scrollContainer}>
   <View style={styles.cardWrapper}>
    <Animated.View style={[styles.card, { transform: [{ rotateY: frontInterpolate }] }]}>
     <IDCardFront />
    </Animated.View>

    <Animated.View style={[styles.card, styles.cardBack, { transform: [{ rotateY: backInterpolate }] }]}>
     <IDCardBack />
    </Animated.View>
   </View>

   <FlipCardButton onPress={flipCard} />
  </ScrollView>
 );
}

const styles = StyleSheet.create({
 scrollContainer: {
  flexGrow: 1,
  backgroundColor: Colors.secondary,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 40,
 },
 cardWrapper: {
  position: 'relative',
  width: 350,
  height: 550,
  marginBottom: 30,
 },
 card: {
  backfaceVisibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
 },
 cardBack: {
  transform: [{ rotateY: '180deg' }],
 },
});
