import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar  } from 'react-native';

export default function Politica() {
  return (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.margem}>
      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16}}>1. Aceitação dos Termos</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Ao utilizar este aplicativo, você concorda com
      os presentes Termos de Uso. Caso não concorde, por favor, não utilize o aplicativo.</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16, marginTop:30}}>2. Uso do Aplicativo</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Você se compromete a utilizar este app apenas para
      fins legais e conforme as leis aplicáveis. É proibido usar o aplicativo para atividades fraudulentas, ofensivas ou que prejudiquem
      terceiros.</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16, marginTop:30}}>3. Coleta de Dados</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Podemos coletar informações para melhorar sua
       experiência. Ao continuar usando o app, você consente com a nossa política de privacidade..</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16,marginTop:30}}>4. Propriedade Intelectual</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Todos os textos, imagens, logotipos e funcionalidades
      são de propriedade do desenvolvedor ou licenciados para uso. É proibida a reprodução sem autorização.</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16, marginTop:30}}>5. Alterações nos Termos</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Reservamo-nos o direito de alterar estes termos a
      qualquer momento. As mudanças entrarão em vigor assim que publicadas nesta tela.</Text>

      <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:16, marginTop:30}}>6. Contato</Text>
      <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#444', marginTop:10}}>Se tiver dúvidas sobre estes Termos de Uso, entre
       em contato pelo e-mail: hydrignis@gmail.com</Text>
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