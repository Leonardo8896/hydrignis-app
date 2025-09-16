import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar  } from 'react-native';

export default function Politica() {
  return (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.margem}>
    <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16}}>1. Tipo de dados coletados</Text>
    <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Coletamos informações que você fornece diretamente, como nome,
     e-mail e dados de uso do aplicativo. Também podemos coletar dados automaticamente, como modelo do dispositivo,
      sistema operacional, localização aproximada e interações no app.</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:4}}>Esses dados são utilizados para
      oferecer uma melhor experiência, garantir a segurança e aprimorar nossos serviços continuamente.</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16, marginTop:30}}>2. Uso dos seus dados pessoais</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Os dados coletados são utilizados para fornecer
       suporte técnico, personalizar o conteúdo exibido, realizar análises de uso e enviar comunicações relevantes.</Text>
       <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:4}}>Não utilizamos seus dados para fins ilegais
      ou não autorizados. O uso é restrito às finalidades descritas nesta política.</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16, marginTop:30}}>3. Divulgação dos seus dados pessoais</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Não compartilhamos suas informações pessoais com
       terceiros, exceto quando necessário por exigência legal, proteção de direitos ou com parceiros confiáveis que nos auxiliam no
      funcionamento do app — sempre sob acordos de confidencialidade.</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:4}}>Você pode solicitar a exclusão ou revisão dos
       seus dados a qualquer momento entrando em contato com nossa equipe.</Text>
    </View>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  margem:{
    marginTop:0,
    marginLeft:15,
    marginRight:15
  }
});