import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useAppFonts } from './src/hooks/useAppFonts';
import { Colors } from './src/styles/colors';
import { Typography } from './src/styles/typography';

export default function App() {
 const [fontsLoaded, onFontsReady] = useAppFonts();

 if (!fontsLoaded) return null;

 return (
  <View onLayout={onFontsReady} style={styles.container}>
   <Text style={styles.title}>Texto con fuente global Montserrat</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
 },
 title: { ...Typography.title },
});
