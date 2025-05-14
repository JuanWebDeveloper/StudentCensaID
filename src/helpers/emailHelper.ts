import { Alert, Linking } from 'react-native';

export const openEmailApp = async (email: string): Promise<void> => {
 const url = `mailto:${email}`;
 const canOpen = await Linking.canOpenURL(url);

 canOpen
  ? Linking.openURL(url)
  : Alert.alert('No se puede abrir el correo', 'No se encontró una aplicación de correo configurada en este dispositivo.');
};
