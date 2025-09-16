import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, TextInput, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Politica() {
  return (
  <SafeAreaView style={styles.safeArea}>
  <ScrollView>
    <Text style={{fontFamily:'Inter-regular', marginLeft:15, marginTop:25, color:'#333', fontSize:16, fontWeight:600}}>Hydralize</Text>
    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:6}}>Placa Solar</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Modelo:...</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Potência Nominal: ... W</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tensão de Operação (Vmp): ... V</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Corrente de Operação (Imp): ... A</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Sistema
     de Armazenamento de Energia</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tipo de Bateria: ... (ex: Lítio, Gel, Chumbo-ácido)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Capacidade Total: ... mAh</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tensão Nominal: ... V</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'}> 
    Autonomia (tempo de operação sem sol): ... horas</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Sistema
     de Filtragem</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Vazão Média: ... L/h</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Etapas de Filtragem: ... (ex: pré-filtro, carvão ativado, etc.)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Eficiência de Purificação: ... %</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Controle e Automação</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Microcontrolador Utilizado: ... (ex: ESP32, Arduino Uno, etc.)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Sensores Conectados: ... (ex: sensor de fluxo, nível de água, turbidez)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Interface de Monitoramento: ... (ex: display LCD, app via Wi-Fi)</Text>
    
    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Sistema de Bombeamento</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Modelo da Bomba: ...</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tipo: ... (ex: submersa, diafragma)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Vazão Máxima da Bomba: ... L/h</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'}> 
    Tensão de Operação da Bomba: ... V</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Reservatório de Cloro</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Capacidade do Reservatório: ... ml</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Sistema de Dosagem: ... (ex: manual, automatizado)</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Dimensões e Peso</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Dimensões Totais (CxLxA): ... cm</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Peso do Sistema Completo: ... kg</Text>

    <Text style={{fontFamily:'Inter-regular', marginLeft:15, marginTop:25, color:'#333', fontSize:16, fontWeight:600}}>Ignis Zero</Text>
    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:6}}>Camera térmica</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Modelo da camera: ...</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Potência Nominal: ... W</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tensão de Operação (Vmp): ... V</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Corrente de Operação (Imp): ... A</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tempo de resposta: ... S</Text>
    
    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Controle e Automação</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Microcontrolador Utilizado: ... (ex: ESP32, Arduino Uno, etc.)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Sensores Conectados: ... (ex: sensor PPM)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Interface de Monitoramento: app via Wi-Fi</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Sistema de Bombeamento</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Modelo da Bomba: ...</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tipo: ... (ex: submersa, diafragma)</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Vazão Máxima da Bomba: ... L/h</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Tensão de Operação da Bomba: ... V</Text>

    <Text style={{fontSize:11, fontWeight:600, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:15, marginTop:14}}>Dimensões e Peso</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2}}>{'\u2022'} 
    Dimensões Totais (CxLxA): ... cm</Text>
    <Text style={{fontSize:11, fontFamily:'Inter-regular', color:'#7B7B7B', marginLeft:20, marginTop:2, marginBottom:20}}>{'\u2022'} 
    Peso do Sistema Completo: ... kg</Text>
  </ScrollView>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
});