import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../styles/colors';
import { Spacing } from '../styles/spacing';
import { Typography } from '../styles/typography';

export default function FlipCardButton() {
 return (
  <View style={styles.buttonContainer}>
   <Pressable style={styles.button}>
    <Ionicons name='sync' size={24} color='white' />
    <Text style={styles.text}>Flip Card</Text>
   </Pressable>
  </View>
 );
}

const styles = StyleSheet.create({
 buttonContainer: {
  marginTop: Spacing.lg,
 },
 button: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: Colors.buttonPrimary,
  padding: Spacing.md,
  borderRadius: 10,
 },
 text: {
  ...Typography.button,
  color: 'white',
  marginLeft: Spacing.sm,
 },
});
