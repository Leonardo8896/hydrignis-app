import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, TextInput  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Politica() {
  return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={{fontFamily:'Inter-regular', marginLeft:15, marginTop:0, color:'#6C7278', fontSize:14}}>Nome atual</Text>
    <TextInput
      style={styles.input}
      placeholder="Hydralize 1 de Murilo"
      placeholderTextColor="#A0A0A0"
      keyboardType="email-address"
      autoCapitalize="none"
    />
    <Text style={{fontFamily:'Inter-regular', marginLeft:15, marginTop:6, color:'#6C7278', fontSize:14}}>Novo nome</Text>
    <TextInput
      style={styles.input}
      placeholder="Insira o novo nome"
      placeholderTextColor="#A0A0A0"
      keyboardType="email-address"
      autoCapitalize="none"
    />

    <TouchableOpacity style={styles.botao}><Text style={{fontFamily:'Inter-regular', fontSize:14, color:'white'}}>Salvar</Text></TouchableOpacity>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontFamily: 'Inter-regular',
    fontSize: 13,
    backgroundColor:'white',
    marginTop:8,
    marginLeft:15,
    marginRight:15
  },
  botao:{
    backgroundColor:'black',
    marginLeft:15,
    marginRight:15,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:10,
    paddingVertical:14,
    marginTop:6
  }
});