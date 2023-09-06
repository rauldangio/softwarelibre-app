import { Inter_400Regular, Inter_800ExtraBold, useFonts } from '@expo-google-fonts/inter';
import { SafeAreaView, StatusBar, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import logo from './assets/logo.png';
import Softwarelibres from './pages/Softwarelibres';

const width = Dimensions.get("screen").width



export default function App() {
  const[fonteCarregada] = useFonts({
    "Inter": Inter_800ExtraBold
  })

  if (!fonteCarregada){
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Text></Text>
      <Image style= {styles.logo} source={logo}/>
      <Softwarelibres/>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
    logo: {
      width: "100%",
      height:435 / 659 * width
    }
})
