import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, SafeAreaView, Image } from 'react-native';

export default function PerformanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require('../assets/notificacao.png')} style={styles.img}/>

      <Text style={{fontFamily:'Inter-regular', fontSize:20, marginTop:24}}>Oops! Nenhuma notificação ainda</Text>

      <Text style={{fontFamily:'Inter-regular', fontSize:15, color:'#AAAAAA', width:300, marginTop:15, textAlign:'center'}}>Você ainda não possui notificações. Avisaremos 
      quando houver atualizações!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width:219,
    height:153,
  }
});