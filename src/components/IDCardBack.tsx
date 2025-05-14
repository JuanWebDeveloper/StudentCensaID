import { Text, View, Image } from 'react-native';

export default function IDCardBack() {
 return (
  <View>
   <Text>Información De Contacto</Text>

   <View>
    <Image source={require('../../assets/images/logoEmail.png')} />
    <Text>juandeveloper19@gmail.com</Text>
   </View>

   <View>
    <Image source={require('../../assets/images/logoGitHub.png')} />
    <Text>github.com/JuanWebDeveloper</Text>
   </View>

   <View>
    <Image source={require('../../assets/images/repositoriesQR.png')} />
   </View>
  </View>
 );
}
