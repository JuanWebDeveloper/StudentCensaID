import { useCallback } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Evita que la splash screen se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export function useAppFonts(): [boolean, () => Promise<void>] {
 // Carga las fuentes de Montserrat
 const [fontsLoaded] = Font.useFonts({
  'Montserrat-Bold': require('../../assets/font/Montserrat-Bold.ttf'),
  'Montserrat-SemiBold': require('../../assets/font/Montserrat-SemiBold.ttf'),
  'Montserrat-Regular': require('../../assets/font/Montserrat-Regular.ttf'),
 });

 // Oculta la splash screen cuando las fuentes estén cargadas
 const onFontsReady = useCallback(async () => {
  if (fontsLoaded) {
   await SplashScreen.hideAsync();
  }
 }, [fontsLoaded]);

 return [fontsLoaded, onFontsReady];
}
