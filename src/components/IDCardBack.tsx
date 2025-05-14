// React Native core components
import { StyleSheet, Text, View, Image, Linking, Pressable, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

// 📦 Helpers
import { createScaleAnimation } from '../helpers/scaleAnimationHelper';
import { openEmailApp } from '../helpers/emailHelper';
// 🎨 Styles
import { Colors } from '../styles/colors';
import { Typography } from '../styles/typography';
import { Shadows } from '../styles/shadows';
import { Spacing } from '../styles/spacing';

export default function IDCardBack() {
 // Animated values used to scale each link individually on press
 const scaleEmail = new Animated.Value(1);
 const scaleGitHub = new Animated.Value(1);

 // Animation handlers that trigger zoom in/out effects for email and GitHub links
 const { handlePressIn: handlePressInEmail, handlePressOut: handlePressOutEmail } = createScaleAnimation(scaleEmail);
 const { handlePressIn: handlePressInGitHub, handlePressOut: handlePressOutGitHub } = createScaleAnimation(scaleGitHub);

 return (
  <View style={styles.card}>
   <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.buttonPrimary, Colors.buttonSecondary]} style={styles.contactHeader}>
    <Text style={styles.contactHeaderText}>Información De Contacto</Text>
   </LinearGradient>

   <View style={styles.infoRow}>
    <Pressable onPressIn={handlePressInEmail} onPressOut={handlePressOutEmail} onPress={() => openEmailApp('juandeveloper19@gmail.com')}>
     {({ pressed }) => (
      <Animated.View style={[styles.linkContent, { transform: [{ scale: scaleEmail }] }]}>
       <FontAwesome name='envelope' size={24} color={pressed ? '#38f9d7' : '#11998e'} style={styles.icon} />
       <Text style={[styles.infoText, pressed && styles.linkPressed]}>juandeveloper19@gmail.com</Text>
      </Animated.View>
     )}
    </Pressable>
   </View>

   <View style={styles.infoRow}>
    <Pressable
     onPressIn={handlePressInGitHub}
     onPressOut={handlePressOutGitHub}
     onPress={() => Linking.openURL('https://github.com/JuanWebDeveloper')}
    >
     {({ pressed }) => (
      <Animated.View style={[styles.linkContent, { transform: [{ scale: scaleGitHub }] }]}>
       <FontAwesome name='github' size={24} color={pressed ? '#38f9d7' : '#11998e'} style={styles.icon} />
       <Text style={[styles.infoText, pressed && styles.linkPressed]}>github.com/JuanWebDeveloper</Text>
      </Animated.View>
     )}
    </Pressable>
   </View>

   <View style={styles.qrContainer}>
    <Image source={require('../../assets/images/repositoriesQR.png')} style={styles.qrImage} />
    <Text style={styles.qrNote}>¡Explora El Perfil Técnico Del Estudiante En GitHub!</Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 card: {
  ...Shadows.card,
  alignItems: 'center',
  backgroundColor: Colors.primary,
  borderRadius: 15,
  height: 550,
  justifyContent: 'space-between',
  padding: Spacing.md,
  width: 350,
 },
 contactHeader: {
  ...Shadows.highlight,
  backgroundColor: '#43C100',
  borderRadius: 10,
  marginBottom: Spacing.lg,
  padding: Spacing.md,
 },
 contactHeaderText: {
  ...Typography.subtitle,

  color: '#fefefe',
  textAlign: 'center',
 },
 infoRow: {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: Spacing.lg,
 },
 linkContent: {
  alignItems: 'center',
  flexDirection: 'row',
 },
 icon: {
  marginRight: Spacing.sm,
 },
 infoText: {
  ...Typography.text,
  color: '#11998e',
  fontFamily: 'Montserrat-SemiBold',
 },
 linkPressed: {
  color: '#38f9d7',
 },
 qrContainer: {
  alignItems: 'center',
 },
 qrImage: {
  height: 250,
  resizeMode: 'contain',
  width: 300,
 },
 qrNote: {
  ...Typography.subtitle,
  ...Shadows.textTitleShadow,
  color: '#11998e',
  marginTop: Spacing.sm,
  textAlign: 'center',
 },
});
