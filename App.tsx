// App.tsx

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import IDCardFront from './src/components/IDCardFront';
import IDCardBack from './src/components/IDCardBack';
import FlipCardButton from './src/components/FlipCardButton';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();

 if (!fontsLoaded) return null;

 return (
  <ScrollView onLayout={onFontsReady} contentContainerStyle={styles.container}>
   <View>
    <IDCardFront />
    <IDCardBack />
   </View>

   <FlipCardButton />
  </ScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.secondary,
  alignItems: 'center',
  justifyContent: 'center',
 },
});
