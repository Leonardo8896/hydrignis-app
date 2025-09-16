import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function FinalizarCadastroSef({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image source={require('../assets/logo2.png')} style={styles.logo}/>
      <Text style={styles.titlelogo}>Hydrignis</Text>
      </View>
      </View>

      <View style={styles.margem}>
      <Text style={{fontSize:12, color:'#333333', fontFamily:'Inter-regular'}}>Produto</Text>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:14}}>
      <MaterialCommunityIcons name="fire" size={24} color="#AD2831" />
      <Text style={{fontFamily:'Inter-regular', fontSize:14, color:'#1d1f24', marginLeft:2}}>Ignis Zero</Text>
      </View>

      <Text style={{color:'#333333', fontFamily:'Inter-regular', fontSize:12, marginTop:16}}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nomeie seu aparelho"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      
      <Text style={{color:'#333333', fontFamily:'Inter-regular', fontSize:12, marginTop:6}}>Localização</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira onde seu aparelho ficará"
        placeholderTextColor="#A0A0A0"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('IgnisConcluido')}>
        <Text style={{color:'white', fontSize:13, fontFamily:'Inter-regular'}}>Finalizar Cadastro</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0,
  },
  header:{
    backgroundColor:'#0D0D1B',
    padding: 20,
    paddingVertical:30
  },
  logo: {
    height: 30,
    width: 30,
  },
  titlelogo: {
    color: 'white',
    fontFamily: 'Inter-regular',
    fontSize: 16,
    marginLeft: 5,
  },
  margem:{
    marginTop:24,
    marginLeft:20,
    marginRight:20
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: 'Inter-regular',
    fontSize: 13,
    backgroundColor:'white',
    marginTop:5
  },
  botao:{
    backgroundColor:'#AD2831',
    paddingVertical:15,
    paddingHorizontal:40,
    borderRadius:30,
    flexDirection:'row',
    width:300,
    alignItems:'center',
    justifyContent:'center',
    marginTop:12,
    marginLeft:'auto',
    marginRight:'auto'
  }
});