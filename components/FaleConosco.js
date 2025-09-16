import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Politica() {
  return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={{marginTop:0, marginLeft:'auto', marginRight:'auto', textAlign:'center', color:'#717171', width:'65%'}}>Alguma dúvida
     ou comentário? Envie-nos uma mensagem!</Text>

     <View style={styles.graybox}>
      <Text style={{color:'#636363', fontSize:20, fontFamily:'Inter-regular', fontWeight:600, marginBottom:20, textAlign:'center'}}>Informações de contato</Text>
      <Ionicons name="call" size={24} color="#6C7278" />
      <Text style={{color:'#6C7278', fontSize:12, marginTop:6, marginBottom:20}}>+55 11 96390-4355</Text>
      <Entypo name="mail" size={24} color="#6C7278" />
      <Text style={{color:'#6C7278', fontSize:12, marginTop:6, marginBottom:20}}>hydrignis@gmail.com</Text>
      <Entypo name="location-pin" size={24} color="#6C7278" />
      <Text style={{color:'#6C7278', fontSize:12, marginTop:6, marginBottom:15, width:'90%', textAlign:'center'}}>Praça Miguel
       Ortega, 135 - Parque Assuncao, Taboão da Serra - SP, 06754-160</Text>

       <View style={{marginTop:20, flexDirection:'row', alignItems:'center', width:'60%', justifyContent:'space-around'}}>
        <Image source={require('../assets/twitter.png')} style={styles.redesocial}/>
        <Image source={require('../assets/instagram.png')} style={styles.redesocial}/>
        <Image source={require('../assets/discord.png')} style={styles.redesocial}/>
       </View>
     </View>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  graybox:{
    backgroundColor:'#f3f0f0',
    width:'75%',
    marginLeft:'auto',
    marginRight:'auto',
    alignItems:'center',
    marginTop:30,
    paddingVertical:20,
    paddingHorizontal:30,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#CCC'
  },
  redesocial:{
    borderRadius:100,
    height:30,
    width:30
  }
});