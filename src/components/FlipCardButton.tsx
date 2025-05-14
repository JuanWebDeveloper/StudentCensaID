import React from 'react';
import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../styles/colors';
import { Spacing } from '../styles/spacing';
import { Typography } from '../styles/typography';

interface Props {
 onPress: () => void;
}

export default function FlipCardButton({ onPress }: Props) {
 const scale = new Animated.Value(1);

 const handlePressIn = () => {
  Animated.spring(scale, {
   toValue: 1.1,
   useNativeDriver: true,
  }).start();
 };

 const handlePressOut = () => {
  Animated.spring(scale, {
   toValue: 1,
   useNativeDriver: true,
  }).start();
 };

 return (
  <Animated.View style={[styles.buttonContainer, { transform: [{ scale }] }]}>
   <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.buttonPrimary, Colors.buttonSecondary]} style={styles.buttonContent}>
     <Ionicons name='sync' size={24} color='white' />
     <Text style={styles.buttonText}>Flip Card</Text>
    </LinearGradient>
   </Pressable>
  </Animated.View>
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
