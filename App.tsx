import { SafeAreaView, StatusBar, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import logo from './assets/gnuicon.png';

const width = Dimensions.get("screen").width

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Image style= {styles.logo} source={logo}/>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
    logo: {
      width: "100%",
      height: 782 / 800 * width
    }
})
