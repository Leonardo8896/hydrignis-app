import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function PerformanceScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/concluido.png')}
        style={styles.img}
      />
      <Text style={{textAlign:'center', fontFamily:'Inter-regular', fontSize:20, marginTop:14, fontWeight:'bold'}}>Cadastro concluido!</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:14, color:'#333333', width:270, textAlign:'center', marginTop:10}}>Confira e acompanhe seu aparelho na página home</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={{color:'white', fontSize:13, fontFamily:'Inter-regular'}}>Finalizar Cadastro</Text>
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
  img:{
    height:188,
    width:145
  },
  botao:{
    backgroundColor:'#0077BE',
    paddingVertical:15,
    paddingHorizontal:40,
    borderRadius:30,
    flexDirection:'row',
    width:300,
    alignItems:'center',
    justifyContent:'center',
    marginTop:18,
    marginLeft:'auto',
    marginRight:'auto'
  }
});