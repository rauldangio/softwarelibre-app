import { SafeAreaView, StatusBar, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import chrome from '../../assets/chrome.png';
import lwolf from '../../assets/librewolf.png';
import windows from '../../assets/windows.png';
import ubuntu from '../../assets/ubuntu.png';
import photoshop from '../../assets/photoshop.png';
import gimp from '../../assets/gimp.png';

export default function(){
    return (
      <View style={style.container} >
        <View>
          <Text style={style.texto}> Veja alguns softwares que você pode trocar para software livre!</Text>
        </View>

        <View style={style.centered}>
          <Text style={style.tituloImagem}>Navegador</Text>
          <View style={style.imagens}>
            <Image style={style.imagem} source={chrome}/>
            <Image style={style.imagem} source={lwolf}/>
          </View>
        </View>


        <View style={style.centered}>
          <Text style={style.tituloImagem}>Sistema Operacional</Text>
          <View style={style.imagens}>
            <Image style={style.imagem} source={windows}/>
            <Image style={style.imagem} source={ubuntu}/>
          </View>
        </View>

        <View style={style.centered}>
          <Text style={style.tituloImagem}>Editores de Imagem</Text>
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
    width: 60,
    height: 60,

  },
  imagens: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 70
  },
  centered:{
    width: 280,
    marginTop: 20
  },
  tituloImagem: {
    textAlign: 'center',
    fontFamily: "Inter",
    fontSize: 16
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
  },
  texto: {
    fontFamily: "Inter",
    fontSize: 18,
    textAlign: "center"
  }
})
