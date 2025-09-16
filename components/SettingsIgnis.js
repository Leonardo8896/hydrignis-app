import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.whitecard}>
      <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:2}}
      onPress={() => navigation.navigate('EditarNomeIgnis')}>
      <View>
      <Text style={styles.action}>Editar o nome</Text>
      <Text style={styles.name}>Ignis 1 de Murilo</Text>
      </View>
      <Entypo name="chevron-small-right" size={24} color="#484C52" />
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:2}} onPress={() => navigation.navigate('EditarLocalizacaoIgnis')}>
      <View>
      <Text style={styles.action}>Localização</Text>
      <Text style={styles.name}>Piso 3</Text>
      </View>
      <Entypo name="chevron-small-right" size={24} color="#484C52" />
      </TouchableOpacity>
    </View>

    <View style={styles.whitecard3}>

      <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:2}}
      onPress={() => navigation.navigate('InformacoesDispositivos')}>
      <View>
      <Text style={styles.action}>Informações do dispositivo</Text>
      </View>
      <Entypo name="chevron-small-right" size={24} color="#484C52" />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.whitecard2} onPress={() => navigation.navigate('Home')}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Ionicons name="trash-outline" size={20} color="#AD2831" />
      <Text style={styles.textdelete}>Excluir dispositivo</Text>
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
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  whitecard:{
    marginLeft:15,
    marginRight:15,
    backgroundColor:'white',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'#B8B8B8',
    paddingVertical:16,
    borderRadius:10,
  },
  action:{
    fontFamily:'Inter-regular',
    fontSize:15
  },
  name:{
    fontFamily:'Inter-regular',
    fontSize:11,
    color:'#AD2831',
    marginTop:5,
    fontWeight:600
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#D8D8D8',
    marginVertical: 15
  },
  textdelete:{
    color:'#AD2831',
    marginLeft:6,
    fontSize:14,
    fontFamily:'Inter-regular'
  },
  whitecard2:{
    marginLeft:15,
    marginRight:15,
    backgroundColor:'white',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'#B8B8B8',
    paddingVertical:12,
    borderRadius:10,
    marginTop:12
  },
  whitecard3:{
    marginLeft:15,
    marginRight:15,
    backgroundColor:'white',
    paddingHorizontal:20,
    borderWidth:1,
    borderColor:'#B8B8B8',
    paddingVertical:16,
    borderRadius:10,
    marginTop:12
  },
});