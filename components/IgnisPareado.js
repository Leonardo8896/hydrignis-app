import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function PerformanceScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require('../assets/ignispareado.png')}
      style={styles.img}
      />
      <Text style={{fontFamily:'Inter-regular', fontWeight:'bold', fontSize:20, marginTop:24}}>Dispositivo Pareado!</Text>
      <Text style={{fontFamily:'Inter-regular', color:'#333333', width:250, marginTop:16, textAlign:'center'}}>Prosseguir para concluir a configuração do aparelho</Text>


      <TouchableOpacity onPress={() => navigation.navigate('FinalizarCadastroIgnis')}>
      <View style={styles.botao}>
      <Text style={{fontFamily:'Inter-regular', color:'white'}}>Prosseguir</Text>
      <Feather name="arrow-right" size={20} color="white" style={{marginLeft:8}}/>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
    img: {
    height: 168,
    width: 252,
  },
  botao:{
    backgroundColor:'#AD2831',
    paddingVertical:12,
    paddingHorizontal:40,
    borderRadius:30,
    flexDirection:'row',
    width:300,
    alignItems:'center',
    justifyContent:'center',
    marginTop:24
  }
});