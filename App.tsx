import React from 'react';
import { StyleSheet, View } from 'react-native';

import IDCardFront from './src/components/IDCardFront';
import IDCardBack from './src/components/IDCardBack';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();

 if (!fontsLoaded) return null;

 return (
  <View onLayout={onFontsReady} style={styles.container}>
   {/* <IDCardFront /> */}
   <IDCardBack />
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
