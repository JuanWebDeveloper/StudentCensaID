import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // Importa el gradiente

import { Colors } from '../styles/colors';
import { Spacing } from '../styles/spacing';
import { Typography } from '../styles/typography';

export default function FlipCardButton() {
 return (
  <View style={styles.buttonContainer}>
   <Pressable>
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.buttonPrimary, Colors.buttonSecondary]} style={styles.buttonContent}>
     <Ionicons name='sync' size={24} color='white' />
     <Text style={styles.buttonText}>Flip Card</Text>
    </LinearGradient>
   </Pressable>
  </View>
 );
}

const styles = StyleSheet.create({
 buttonContainer: {
  marginTop: Spacing.lg,
 },

 buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  paddingVertical: Spacing.md,
  paddingHorizontal: Spacing.lg,
 },
 buttonText: {
  ...Typography.button,
 },
});
