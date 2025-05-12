import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Colors } from '../styles/colors';
import { Typography } from '../styles/typography';
import { Shadows } from '../styles/shadows';
import { Spacing } from '../styles/spacing';

export default function MeatObserve() {
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
    <Text style={styles.disclaimer}>
     Este carnet estudiantil es de carácter personal e intransferible. Se prohíbe estrictamente cualquier alteración o uso no autorizado del mismo. La
     violación de estas disposiciones estará sujeta a las sanciones correspondientes.
    </Text>
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
  height: 505,
  justifyContent: 'center',
  paddingBottom: Spacing.lg,
  width: 650,
 },

 // Logo section styles
 censaLogo: {
  ...Shadows.highlight,
  alignItems: 'center',
  backgroundColor: '#43C10055',
  borderRadius: 15,
  display: 'flex',
  textAlign: 'center',
  width: '100%',
 },
 logoImages: {
  ...Shadows.logo,
  height: 150,
  width: 200,
 },

 // Basic data section styles
 basicData: {
  alignItems: 'center',
  backgroundColor: '#f8f9fa70',
  flexDirection: 'column',
  padding: Spacing.xs,
  width: '100%',
 },
 contentContainer: {
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: Spacing.md,
  width: '100%',
 },
 photo: {
  ...Shadows.photo,
  backgroundColor: '#43C10055',
  borderRadius: 55,
  height: 180,
  marginRight: Spacing.md,
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
  ...Shadows.textTextShadow,
  fontStyle: 'italic',
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
  ...Shadows.textTextShadow,
  fontSize: 12,
  fontStyle: 'italic',
  textAlign: 'center',
  lineHeight: 18,
 },
});
