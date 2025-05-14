import { Text, View, Image, StyleSheet } from 'react-native';

import { Colors } from '../styles/colors';
import { Typography } from '../styles/typography';
import { Shadows } from '../styles/shadows';
import { Spacing } from '../styles/spacing';

export default function IDCardBack() {
 return (
  <View style={styles.card}>
   <Text style={styles.contactHeader}>Información De Contacto</Text>

   <View style={styles.infoRow}>
    <Image source={require('../../assets/images/logoEmail.png')} style={styles.iconImage} />
    <Text style={styles.infoText}>juandeveloper19@gmail.com</Text>
   </View>

   <View style={styles.infoRow}>
    <Image source={require('../../assets/images/logoGitHub.png')} style={styles.iconImage} />
    <Text style={styles.infoText}>github.com/JuanWebDeveloper</Text>
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
