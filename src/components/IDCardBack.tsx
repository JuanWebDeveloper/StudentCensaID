// React Native core components
import { StyleSheet, Text, View, Image, Linking, Pressable, Animated } from 'react-native';
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
   <Text style={styles.contactHeader}>Información De Contacto</Text>

   <View style={styles.infoRow}>
    <Image source={require('../../assets/images/logoEmail.png')} style={styles.iconImage} />
    <Pressable onPressIn={handlePressInEmail} onPressOut={handlePressOutEmail} onPress={() => openEmailApp('juandeveloper19@gmail.com')}>
     {({ pressed }) => (
      <Animated.Text style={[styles.infoText, pressed && styles.linkPressed, { transform: [{ scale: scaleEmail }] }]}>
       juandeveloper19@gmail.com
      </Animated.Text>
     )}
    </Pressable>
   </View>

   <View style={styles.infoRow}>
    <Image source={require('../../assets/images/logoGitHub.png')} style={styles.iconImage} />
    <Pressable
     onPressIn={handlePressInGitHub}
     onPressOut={handlePressOutGitHub}
     onPress={() => Linking.openURL('https://github.com/JuanWebDeveloper')}
    >
     {({ pressed }) => (
      <>
       <Animated.Text style={[styles.infoText, pressed && styles.linkPressed, { transform: [{ scale: scaleGitHub }] }]}>
        github.com/JuanWebDeveloper
       </Animated.Text>
      </>
     )}
    </Pressable>
   </View>

   <View style={styles.qrContainer}>
    <Image source={require('../../assets/images/repositoriesQR.png')} style={styles.qrImage} />
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 card: {
  ...Shadows.card,
  backgroundColor: Colors.primary,
  borderRadius: 15,
  height: 500,
  justifyContent: 'space-between',
  padding: Spacing.md,
  width: 350,
  alignItems: 'center',
 },
 contactHeader: {
  ...Typography.subtitle,
  ...Shadows.highlight,
  backgroundColor: '#43C100',
  borderRadius: 10,
  color: '#fefefe',
  marginBottom: Spacing.md,
  padding: Spacing.md,
  textAlign: 'center',
 },
 iconImage: {
  height: 25,
  marginRight: Spacing.sm,
  width: 25,
 },
 infoRow: {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: Spacing.sm,
 },
 infoText: {
  ...Typography.text,
 },
 linkPressed: {
  color: '#43C100',
 },
 qrContainer: {
  alignItems: 'center',
  marginTop: Spacing.md,
 },
 qrImage: {
  height: 250,
  resizeMode: 'contain',
  width: 300,
 },
});
