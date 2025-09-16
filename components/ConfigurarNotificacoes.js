import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, TextInput, Switch  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export default function Politica() {
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberMe2, setRememberMe2] = useState(false);
  const [rememberMe3, setRememberMe3] = useState(false);
  const [rememberMe4, setRememberMe4] = useState(false);
  const [rememberMe5, setRememberMe5] = useState(false);
  const [rememberMe6, setRememberMe6] = useState(false);
  const [rememberMe7, setRememberMe7] = useState(false);
  const [rememberMe8, setRememberMe8] = useState(false);
  const [rememberMe9, setRememberMe9] = useState(false);
  const [rememberMe10, setRememberMe10] = useState(false);
  const [rememberMe11, setRememberMe11] = useState(false);

  return (
  <SafeAreaView style={styles.safeArea}>
    <Text style={{fontFamily:'Inter-regular', marginLeft:15, marginTop:20, color:'#333', fontSize:16, fontWeight:'bold'}}>Comum</Text>

    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:10}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Notificações Gerais</Text>
      <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Som</Text>
      <Switch
                value={rememberMe2}
                onValueChange={setRememberMe2}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Vibração</Text>
      <Switch
                value={rememberMe3}
                onValueChange={setRememberMe3}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>

    <View style={{height:2, marginTop:20, marginBottom:20, backgroundColor:'#EEE', marginLeft:15, marginRight:15, }}></View>

    <Text style={{fontFamily:'Inter-regular', marginLeft:15, color:'#333', fontSize:16, fontWeight:'bold'}}>App & Atualizações</Text>

    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:10}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Atualizações do aplicativo</Text>
      <Switch
                value={rememberMe4}
                onValueChange={setRememberMe4}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Relatórios</Text>
      <Switch
                value={rememberMe5}
                onValueChange={setRememberMe5}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>

    <View style={{height:2, marginTop:20, marginBottom:20, backgroundColor:'#EEE', marginLeft:15, marginRight:15, }}></View>

    <Text style={{fontFamily:'Inter-regular', marginLeft:15, color:'#333', fontSize:16, fontWeight:'bold'}}>Hydralize</Text>
    
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:10}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Baixa bateria</Text>
      <Switch
                value={rememberMe6}
                onValueChange={setRememberMe6}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Avisos sobre reservatórios</Text>
      <Switch
                value={rememberMe7}
                onValueChange={setRememberMe7}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Geração de energia</Text>
      <Switch
                value={rememberMe8}
                onValueChange={setRememberMe8}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>

    <View style={{height:2, marginTop:20, marginBottom:20, backgroundColor:'#EEE', marginLeft:15, marginRight:15, }}></View>

    <Text style={{fontFamily:'Inter-regular', marginLeft:15, color:'#333', fontSize:16, fontWeight:'bold'}}>Ignis Zero</Text>
    
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:10}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Alta presença de gases</Text>
      <Switch
                value={rememberMe9}
                onValueChange={setRememberMe9}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Variações de temperatura</Text>
      <Switch
                value={rememberMe10}
                onValueChange={setRememberMe10}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
    </View>
    <View style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, justifyContent:'space-between', marginTop:6}}>
      <Text style={{fontFamily:'Inter-regular', color:'#444', fontSize:14,}}>Presença de chamas</Text>
      <Switch
                value={rememberMe11}
                onValueChange={setRememberMe11}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
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

});