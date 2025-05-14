import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';
import IDCardFront from './src/components/IDCardFront';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();

 if (!fontsLoaded) return null;

 return (
  <View onLayout={onFontsReady} style={styles.container}>
   <IDCardFront />
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
