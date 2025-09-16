import React, {useState} from 'react';
import {  View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, ScrollView  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen({navigation}) {
  const [imagemPerfil, setImagemPerfil] = useState(null);

  const escolherImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Você precisa permitir acesso à galeria.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagemPerfil({ uri: resultado.assets[0].uri });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={{fontFamily:'Inter-regular', fontSize:20, fontWeight:'bold', marginLeft:15, marginTop:20}}>Perfil</Text>
      <View style={styles.header}>
      <TouchableOpacity onPress={escolherImagem}>
      <Image
          source={
            imagemPerfil
              ? imagemPerfil
              : require('../assets/iconeprofile.png')
          }
          style={styles.img}
        />
      </TouchableOpacity>
      <View style={styles.viewdetexto}>
      <Text style={styles.noite}>Boa Noite</Text>
      <Text style={styles.nameuser}>Murilo Haddad</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AlterarNome')}>
      <View style={{marginTop:15, marginLeft:6}}>
      <SimpleLineIcons name="pencil" size={16} color="#A2A2A2" />
      </View>
      </TouchableOpacity>
    </View>

    <Text style={styles.categorias}>Perfil</Text>
    <View style={styles.box}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <MaterialCommunityIcons name="email-outline" size={20} color="#241C1C" />
      <Text style={styles.textoicone}>Email</Text>

        <View style={{marginLeft:'auto', flexDirection:'row'}}>
          <Text style={{fontFamily:'Inter-regular', fontSize:12, color:'#555'}}>murilo.haddad@gmail.com</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AlterarEmail')}>
              <View style={{ marginLeft:10}}>
              <SimpleLineIcons name="pencil" size={12} color="#A2A2A2" />
          </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:16}}>
      <MaterialCommunityIcons name="key-outline" size={20} color="#676D75" />
      <Text style={styles.textoicone}>Senha</Text>
        <View style={{marginLeft:'auto', flexDirection:'row'}}>
          <Text style={{fontFamily:'Inter-regular', fontSize:16, color:'#555', fontWeight:'bold', letterSpacing:1.5}}>......</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AlterarSenha')}>
              <View style={{ marginLeft:10, marginTop:4}}>
              <SimpleLineIcons name="pencil" size={12} color="#A2A2A2" />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <Text style={styles.categorias}>Produtos</Text>
    <View style={styles.box}>
      <TouchableOpacity onPress={() => navigation.navigate('InformacoesDispositivos')}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Feather name="box" size={20} color="#3374FF" />
      <Text style={styles.textoicone}>Informações dos Dispositivos</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ConfigurarNotificacoes')}>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:16}}>
      <MaterialIcons name="notifications-none" size={20} color="#676D75" />
      <Text style={styles.textoicone}>Notificações</Text>
      </View>
      </TouchableOpacity>
    </View>

    <Text style={styles.categorias2}>Política</Text>

    <View style={styles.box}>
      <TouchableOpacity  
      onPress={() => {navigation.navigate('Privacidade')
      }}>
      <View style={{flexDirection:'row', alignItems:'center'}} >
      <FontAwesome name="book" size={20} color="#582FFF" />
      <Text style={styles.textoicone}>Políticas de Privacidade</Text>
      </View>
    </TouchableOpacity>

      <TouchableOpacity  
      onPress={() => {navigation.navigate('TermosDeUso')
      }}>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:16}}>
      <Feather name="book" size={20} color="#687590" />
      <Text style={styles.textoicone}>Termos de Uso</Text>
      </View>
      </TouchableOpacity>
    </View>

    <View style={styles.box2}>
      <TouchableOpacity  
        onPress={() => {navigation.navigate('FaleConosco')
        }}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Ionicons name="chatbubble-outline" size={20} color="#666" />
      <Text style={styles.textoicone}>Fale Conosco</Text>
      </View>
      </TouchableOpacity>
    </View>

    <View style={styles.box2}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
      <Ionicons name="exit-outline" size={20} color="#363538" />
      <Text style={styles.textoicone}>Sair</Text>
      </View>
      </TouchableOpacity>
    </View>

   </ScrollView>
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
    categorias:{
      fontFamily:'Inter-regular',
      color:'#7B7B7B',
      fontSize:13,
      marginLeft:15,
      marginTop:32,
    },
    box:{
      marginLeft:15,
      marginRight:15,
      paddingHorizontal:20,
      borderWidth:1,
      borderColor:'#B8B8B8',
      paddingVertical:20,
      borderRadius:10,
      marginTop:12
    },
    textoicone:{
      marginLeft:12,
      fontFamily:'Inter-regular'
    },
    categorias2:{
      fontFamily:'Inter-regular',
      color:'#7B7B7B',
      fontSize:13,
      marginLeft:15,
      marginTop:24,
    },
    box2:{
      marginLeft:15,
      marginRight:15,
      paddingHorizontal:20,
      borderWidth:1,
      borderColor:'#B8B8B8',
      paddingVertical:10,
      borderRadius:10,
      marginTop:12
    },
});