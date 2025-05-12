import React from 'react';
import { Text, View, Image } from 'react-native';

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
