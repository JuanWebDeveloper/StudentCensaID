import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(): React.ReactElement {
 return (
  <View style={styles.container}>
   <Text>Student Censa Meat Con Type</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});
