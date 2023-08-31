import { SafeAreaView, StatusBar, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import chrome from '../../assets/chrome.png';
import lwolf from '../../assets/librewolf.png';
import windows from '../../assets/windows.png';
import ubuntu from '../../assets/ubuntu.png';
import photoshop from '../../assets/photoshop.png';
import gimp from '../../assets/gimp.png';

export default function(){
    return (
      <View >
        <View>
          <Text> Veja alguns softwares que você pode trocar para software livre!</Text>
        </View>

        <View style={style.centered}>
          <Text>Navegador</Text>
          <View style={style.imagens}>
            <Image style={style.imagem} source={chrome}/>
            <Image style={style.imagem} source={lwolf}/>
          </View>
        </View>


        <View style={style.centered}>
          <Text>Sistema Operacional</Text>
          <View style={style.imagens}>
            <Image style={style.imagem} source={windows}/>
            <Image style={style.imagem} source={ubuntu}/>
          </View>
        </View>

        <View style={style.centered}>
          <Text>Editores de Imagem</Text>
          <View style={style.imagens}>
            <Image style={style.imagem} source={photoshop}/>
            <Image style={style.imagem} source={gimp}/>
          </View>
        </View>

      </View>
    )
}

const style = StyleSheet.create({

  imagem:{
    width: 32,
    height: 32,
  //  marginLeft: 40,
//    marginRight: 40,
  },
  imagens: {
    flexDirection: 'row',
    backgroundColor: "#ffc2c2",
    paddingLeft: 20,
    paddingRight: 20,

  },
  centered:{
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20
  }

})
