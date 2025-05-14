import { useCallback } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export function useAppFonts(): [boolean, () => Promise<void>] {
 // Load Montserrat fonts
 const [fontsLoaded] = Font.useFonts({
  'Montserrat-Bold': require('../../assets/font/Montserrat-Bold.ttf'),
  'Montserrat-SemiBold': require('../../assets/font/Montserrat-SemiBold.ttf'),
  'Montserrat-Regular': require('../../assets/font/Montserrat-Regular.ttf'),
 });

 // Hide the splash screen when fonts are loaded
 const onFontsReady = useCallback(async () => {
  if (fontsLoaded) {
   await SplashScreen.hideAsync();
  }
 }, [fontsLoaded]);

 return [fontsLoaded, onFontsReady];
}
