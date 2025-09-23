import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function PerformanceScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whitecard}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <MaterialCommunityIcons name="loading" size={20} color="#B8B8B8" />
        <Text style={styles.loading}>Procurando por dispositivos...</Text>
        </View>
      </View>

      <View style={styles.whitecard2}>
      <Text style={styles.title}>Dispositivos</Text>
  
      <TouchableOpacity onPress={() => navigation.navigate('PareamentoSef')}>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:16}}>
      <MaterialCommunityIcons name="water" size={24} color="#1D1F24" />
      <Text style={styles.namedispositivo}>Hydralize 1</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PareamentoIgnis')}>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
      <MaterialCommunityIcons name="fire" size={24} color="#1D1F24" />
      <Text style={styles.namedispositivo}>Ignis 1</Text>
      </View>
      </TouchableOpacity>
      </View>

      <Text style={{fontFamily:'Inter-regular', textAlign:'center',marginTop:'auto',
      marginBottom:20, textDecorationLine: 'underline', color:'#241c1c', fontSize:13}}>Está com problemas? Consulte o manual</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0
  },
  whitecard:{
    marginLeft:15,
    marginRight:15,
    backgroundColor:'white',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'#B8B8B8',
    paddingTop:12,
    paddingBottom:12,
    borderRadius:10,
  },
  loading:{
    color:'#333333',
    fontFamily:'Inter-regular',
    marginLeft:14,
    width:150,
    fontSize:12
  },
  title:{
    fontWeight:600,
    fontFamily:'Inter-regular',
    fontSize:16,
    color:'#333333'
  },
  namedispositivo:{
    fontFamily:'Inter-regular',
    fontSize:14,
    marginLeft:4,
    color:'#1d1f24'
  },
    whitecard2:{
    marginLeft:15,
    marginRight:15,
    backgroundColor:'white',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'#B8B8B8',
    paddingTop:12,
    paddingBottom:12,
    borderRadius:10,
    marginTop:24
  },
});