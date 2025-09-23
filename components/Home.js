
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';

export default function HomeScreen({navigation}) {
  const [sefPowerOn, setSefPowerOn] = useState(true);
  const [ignisPowerOn, setIgnisPowerOn] = useState(true);

  const toggleSefPower = () => {
    setSefPowerOn(!sefPowerOn);
  };

  const toggleIgnisPower = () => {
    setIgnisPowerOn(!ignisPowerOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/iconeprofile.png')}
          style={styles.img}
        />
        <View style={styles.viewdetexto}>
          <Text style={styles.noite}>Boa Noite</Text>
          <Text style={styles.nameuser}>Murilo Haddad</Text>
        </View>
        <View style={styles.rightheader}>
          <TouchableOpacity onPress={() => navigation.navigate('AddDispositivo')}>
            <View style={{ backgroundColor: 'white', borderRadius: 24, borderWidth: 1, borderColor: '#e4e4e4',
             width: 40, height: 40,
            justifyContent:'center', alignItems: 'center', marginRight:8 }}>
              <Feather name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notificacao')}>
            <View style={{ backgroundColor: 'white', borderRadius: 24, borderWidth: 1, borderColor: '#e4e4e4',
             width: 40, height: 40, justifyContent:
           'center', alignItems: 'center' }}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.tituloconteudo}>Dispositivos</Text>

      <View style={[styles.whitecard, !sefPowerOn && styles.disabledCard]}>
        <TouchableOpacity onPress={() => navigation.navigate('Sef')}>
          <View style={styles.topcard}>
            <View style={styles.rowtopcard}>
              <MaterialCommunityIcons name="water" size={24} color={sefPowerOn ? "#0077BE" : "#cccccc"} />
              <Text style={[styles.nomedispositivo, !sefPowerOn && styles.disabledText]}>Hydralize 1 de Murilo</Text>
            </View>
            <TouchableOpacity onPress={(e) => { e.stopPropagation(); toggleSefPower(); }}>
              <View style={[styles.powerButton, !sefPowerOn && styles.powerButtonOff]}>
                <MaterialCommunityIcons name="power" size={18} color={sefPowerOn ? "#006ED3" : "#cccccc"} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomCard}>
            <Image source={require('../assets/hydralize.png')} style={styles.hydralize}/>
            <View style={[styles.verticalLine, !sefPowerOn && {backgroundColor: '#e8e8e8'}]}/>
            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <MaterialCommunityIcons name="signal-variant" size={20} color={sefPowerOn ? "black" : "#cccccc"} />
                <Text style={[styles.textoconexao, !sefPowerOn && styles.disabledText]}>Conectado</Text>
              </View>

              <View style={styles.infoRow}>
                <MaterialIcons name="place" size={20} color={sefPowerOn ? "black" : "#cccccc"} />
                <Text style={[styles.textoconexao, !sefPowerOn && styles.disabledText]}>Piso 3</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.textStatsAparelho, !sefPowerOn && styles.disabledText]}>Status do aparelho:</Text>
              <Text style={[styles.textStats, !sefPowerOn && styles.disabledText]}>{sefPowerOn ? 'Ligado' :
               'Desligado'}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

  
      <View style={[styles.whitecard, !ignisPowerOn && styles.disabledCard]}>
      <TouchableOpacity onPress={() => navigation.navigate('Ignis')}>
        <View style={styles.topcard}>
          <View style={styles.rowtopcard}>
            <MaterialCommunityIcons name="fire" size={24} color={ignisPowerOn ? "#AD2831" : "#cccccc"} />
            <Text style={[styles.nomedispositivo, !ignisPowerOn && styles.disabledText]}>Ignis 1 de Murilo</Text>
          </View>
          <TouchableOpacity onPress={toggleIgnisPower}>
            <View style={[styles.powerButton, !ignisPowerOn && styles.powerButtonOff]}>
              <MaterialCommunityIcons name="power" size={18} color={ignisPowerOn ? "#006ED3" : "#cccccc"} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomCard}>
          <Image source={require('../assets/Ignis.png')} style={styles.hydralize}/>
          <View style={[styles.verticalLine, !ignisPowerOn && {backgroundColor: '#e8e8e8'}]}/>

          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="signal-variant" size={20} color={ignisPowerOn ? "black" : "#cccccc"} />
              <Text style={[styles.textoconexao, !ignisPowerOn && styles.disabledText]}>Conectado</Text>
            </View>

            <View style={styles.infoRow}>
              <MaterialIcons name="place" size={20} color={ignisPowerOn ? "black" : "#cccccc"} />
              <Text style={[styles.textoconexao, !ignisPowerOn && styles.disabledText]}>Piso 3</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.textStatsAparelho, !ignisPowerOn && styles.disabledText]}>Status do ambiente:</Text>
            <Text style={[styles.textStats, !ignisPowerOn && styles.disabledText]}>{ignisPowerOn
             ? 'Seguro' : 'Desligado'}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      
      <Image source={require('../assets/relax.png')} style={styles.imagerelax}/>
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
    img:{
      height:50,
      width:50,
      borderRadius:50,
    },
    header:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:15,
      marginRight:15,
      marginTop:15
    },
    noite:{
      fontFamily: 'Inter-regular',
      color:'#7B7B7B',
      fontSize:12
    },
    nameuser:{
      fontSize:18,
      fontFamily: 'Inter-regular',
    },
    viewdetexto:{
      marginLeft:8
    },
    rightheader:{
      marginLeft:'auto',
      display:'flex',
      width:80,
      justifyContent:'space-around',
      flexDirection:'row'
    },
    tituloconteudo:{
      fontFamily: 'Inter-regular',
      fontWeight:600,
      fontSize:18,
      marginLeft:15,
      marginTop:20
    },
    imagerelax:{
      marginLeft:'auto',
      marginRight:'auto',
      height:144,
      width:255,
      marginTop:'auto',
      marginBottom:24
    },
    whitecard:{
      marginLeft:15,
      marginRight:15,
      backgroundColor:'white',
      paddingHorizontal:16,
      borderWidth:1,
      borderColor:'#B8B8B8',
      paddingVertical:12,
      borderRadius:10,
      marginTop:12
    },
    rowtopcard:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    },
    nomedispositivo:{
      fontFamily:'Inter-Regular',
      fontSize:15,
      marginLeft:4
    },
    bottomCard: {
      flexDirection: 'row',
      marginTop: 14
    },
    verticalLine: {
      width: 2,
      backgroundColor: '#d8d8d8',
      marginRight: 12
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'space-between'
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8
    },
    powerButton: {
      backgroundColor: 'white',
      width: 40,
      height: 40,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#bbbbbb',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 3
    },
    textoconexao: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      marginLeft: 6
    },
    topcard:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    textStatsAparelho:{
      fontFamily: 'Inter-Regular',
      fontSize:13,
      marginTop:6,
    },
    textStats:{
      textAlign:'center',
      fontFamily: 'Inter-Regular',
      fontWeight:600,
      fontSize:13,
      marginTop:4,
    },
     disabledCard: {
      backgroundColor: '#f8f8f8',
      borderColor: '#d8d8d8',
    },
    disabledText: {
      color: '#aaaaaa',
    },
    powerButtonOff: {
      backgroundColor: '#f0f0f0',
      shadowColor: '#dddddd',
    },
    hydralize:{
      height:55,
      width:55,
      marginRight:5
    }
});