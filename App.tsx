import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from './src/styles/colors';
import { Typography } from './src/styles/typography';

export default function App(): React.ReactElement {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>Student Censa Meat Con Types </Text>
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
 text: {
  ...Typography.title,
 },
});
