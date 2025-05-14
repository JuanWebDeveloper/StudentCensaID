// App.tsx

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import IDCardFront from './src/components/IDCardFront';
import IDCardBack from './src/components/IDCardBack';
import FlipCardButton from './src/components/FlipCardButton';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';
import { Spacing } from './src/styles/spacing';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();

 if (!fontsLoaded) return null;

 return (
  <ScrollView onLayout={onFontsReady} contentContainerStyle={styles.scrollContainer}>
   <View style={styles.cardWrapper}>
    <View style={styles.card}>
     <IDCardFront />
    </View>
    <View style={styles.card}>
     <IDCardBack />
    </View>
   </View>

   <FlipCardButton />
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
  height: 500,
  marginBottom: Spacing.xs,
 },
 card: {
  backfaceVisibility: 'hidden',
  position: 'absolute',
  width: '100%',
  height: '100%',
 },
});
