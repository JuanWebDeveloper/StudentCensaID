import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Colors } from '../styles/colors';
import { Typography } from '../styles/typography';
import { Shadows } from '../styles/shadows';
import { Spacing } from '../styles/spacing';

export default function IDCardFront() {
 return (
  <View style={styles.card}>
   <View style={styles.censaLogo}>
    <Image source={require('../../assets/images/logotipoCensa.png')} style={styles.logoImages} />
   </View>
   <View style={styles.basicData}>
    <View style={styles.contentContainer}>
     <Image source={require('../../assets/images/photo.png')} style={styles.photo} />
     <View style={styles.textContainer}>
      <Text style={styles.name}>Juan Vargas</Text>
      <Text style={[styles.matriculation]}>Matrícula: 202412345</Text>
      <Text style={[styles.program]}>Análisis y Desarrollo de Software</Text>
     </View>
    </View>
   </View>
   <View style={styles.additionalData}>
    <Text style={styles.validUntil}>Válido hasta: Dic 2025</Text>
    <Text style={styles.disclaimer}>Este carnet estudiantil es de carácter personal e intransferible.</Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 // Card base style
 card: {
  ...Shadows.card,
  alignItems: 'center',
  backgroundColor: Colors.primary,
  borderRadius: 15,
  height: 550,
  justifyContent: 'center',
  paddingBottom: Spacing.lg,
  width: 350,
 },

 // Logo section styles
 censaLogo: {
  alignItems: 'center',
  borderRadius: 15,
  width: '90%',
  height: 70,
  marginBottom: Spacing.sm,
 },
 logoImages: {
  height: '100%',
  width: 250,
 },

 // Basic data section styles
 basicData: {
  backgroundColor: '#f8f9fa70',
  padding: Spacing.xs,
  width: '100%',
 },
 contentContainer: {
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: Spacing.md,
  width: '100%',
 },
 photo: {
  ...Shadows.photo,
  backgroundColor: '#11998e',
  borderRadius: 55,
  height: 180,
  marginBottom: Spacing.md,
  width: 180,
 },
 textContainer: {
  marginLeft: Spacing.md,
 },
 name: {
  ...Typography.title,
  ...Shadows.textTitleShadow,
  marginBottom: Spacing.sm,
  textAlign: 'center',
 },
 matriculation: {
  ...Typography.subtitle,
  ...Shadows.textSubtitleShadow,
  textAlign: 'center',
 },
 program: {
  ...Typography.text,
  fontStyle: 'italic',
  marginTop: Spacing.sm,
  textAlign: 'center',
 },

 // Additional data section styles
 additionalData: {
  backgroundColor: '#e9ecef',
  flexDirection: 'column',
  padding: 10,
 },
 validUntil: {
  ...Typography.subtitle,
  ...Shadows.textSubtitleShadow,
  marginBlock: Spacing.sm,
  textAlign: 'center',
 },
 disclaimer: {
  ...Typography.text,
  fontSize: 12,
  fontStyle: 'italic',
  textAlign: 'center',
  lineHeight: 18,
 },
});
