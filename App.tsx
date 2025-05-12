import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';
import MeatObserve from './src/components/MeatObserve';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();

 if (!fontsLoaded) return null;

 return (
  <View onLayout={onFontsReady} style={styles.container}>
   <MeatObserve />
  </View>
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
