import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import Loading from './components/Loading';
import Inicial from './components/Inicial';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import HomeScreen from './components/Home';
import PerformanceScreen from './components/Desempenho';
import ProfileScreen from './components/Profile';
import Sef from './components/Sef';
import Settings from './components/Settings';
import AddDispositivo from './components/AddDispositivo';
import PareamentoSef from './components/PareamentoSef';
import SefPareado from './components/SefPareado';
import FinalizarCadastroSef from './components/FinalizarCadastroSef';
import SefConcluido from './components/SefConcluido';
import Notificacao from './components/Notificacao';
import PareamentoIgnis from './components/PareamentoIgnis';
import IgnisPareado from './components/IgnisPareado';
import IgnisConcluido from './components/IgnisConcluido';
import FinalizarCadastroIgnis from './components/FinalizarCadastroIgnis';
import Ignis from './components/Ignis';
import SettingsIgnis from './components/SettingsIgnis';
import Privacidade from './components/Privacidade';
import TermosDeUso from './components/TermosDeUso';
import FaleConosco from './components/FaleConosco';
import AlterarSenha from './components/AlterarSenha';
import AlterarEmail from './components/AlterarEmail';
import InformacoesDispositvos from './components/InformacoesDispositivos';
import AlterarNome from './components/AlterarNome';
import ConfigurarNotificacoes from './components/ConfigurarNotificacoes';
import EditarNomeHydralize from './components/EditarNomeHydralize';
import EditarLocalizacaoHydralize from './components/EditarLocalizacaoHydralize';
import EditarNomeIgnis from './components/EditarNomeIgnis';
import EditarLocalizacaoIgnis from './components/EditarLocalizacaoIgnis';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="Sef" 
        component={Sef} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Hydralize",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => navigation.navigate('Settings')}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="settings-outline" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen 
        name="AddDispositivo" 
        component={AddDispositivo} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Adicionar",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        })}
      />

      <HomeStack.Screen 
        name="Settings" 
        component={Settings} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Configurações",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen 
        name="PareamentoSef" 
        component={PareamentoSef} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Pareamento",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        })}
      />
      <HomeStack.Screen 
        name="PareamentoIgnis" 
        component={PareamentoIgnis} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Pareamento",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        })}
      />

      <HomeStack.Screen 
        name="Notificacao" 
        component={Notificacao} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Notificações",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        })}
      />
       <HomeStack.Screen 
        name="SefPareado" 
        component={SefPareado} 
        options={({ navigation }) => ({
          headerShown: false,

        })}
      />
      <HomeStack.Screen 
        name="FinalizarCadastroSef" 
        component={FinalizarCadastroSef} 
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen 
        name="SefConcluido" 
        component={SefConcluido} 
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen 
        name="IgnisPareado" 
        component={IgnisPareado} 
        options={({ navigation }) => ({
          headerShown: false,

        })}
      />
      <HomeStack.Screen 
        name="FinalizarCadastroIgnis" 
        component={FinalizarCadastroIgnis} 
        options={({ navigation }) => ({
          headerShown: false,

        })}
      />
        <HomeStack.Screen
        name="Privacidade" 
        component={Privacidade} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Configurações",
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen 
        name="IgnisConcluido" 
        component={IgnisConcluido} 
        options={({ navigation }) => ({
          headerShown: false,

        })}
      />
      <HomeStack.Screen 
        name="Ignis" 
        component={Ignis} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Ignis",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerRight: () => (
            <TouchableOpacity 
              onPress={() => navigation.navigate('SettingsIgnis')}
              style={{ marginRight: 15 }}
            >
              <Ionicons name="settings-outline" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
        <HomeStack.Screen 
        name="SettingsIgnis" 
        component={SettingsIgnis} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Configurações",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen 
        name="EditarNomeHydralize" 
        component={EditarNomeHydralize} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Editar Nome",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen 
        name="EditarLocalizacaoHydralize" 
        component={EditarLocalizacaoHydralize} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Editar Localização",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
 
      <HomeStack.Screen 
        name="EditarNomeIgnis" 
        component={EditarNomeIgnis} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Editar Nome",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen 
        name="EditarLocalizacaoIgnis" 
        component={EditarLocalizacaoIgnis} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Editar Rede",
          headerStyle: {
            backgroundColor: '#f0f0f0',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="#676D75" />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name="InformacoesDispositivos"
        component={InformacoesDispositvos}
        options={{
          headerShown: true,
          headerTitle: "Informações dos Dispositivos",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Privacidade"
        component={Privacidade}
        options={{
          headerShown: true,
          headerTitle: "Políticas de Privacidade",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="TermosDeUso"
        component={TermosDeUso}
        options={{
          headerShown: true,
          headerTitle: "Termos de Uso",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="FaleConosco"
        component={FaleConosco}
        options={{
          headerShown: true,
          headerTitle: "Fale Conosco",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="AlterarSenha"
        component={AlterarSenha}
        options={{
          headerShown: true,
          headerTitle: "Alterar Senha",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="AlterarEmail"
        component={AlterarEmail}
        options={{
          headerShown: true,
          headerTitle: "Alterar Email",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="InformacoesDispositivos"
        component={InformacoesDispositvos}
        options={{
          headerShown: true,
          headerTitle: "Informações dos Dispositivos",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="ConfigurarNotificacoes"
        component={ConfigurarNotificacoes}
        options={{
          headerShown: true,
          headerTitle: "Notificações",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
      <ProfileStack.Screen
        name="AlterarNome"
        component={AlterarNome}
        options={{
          headerShown: true,
          headerTitle: "Alterar Nome",
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTitleStyle: {
            fontFamily: 'Inter-Regular',
            fontWeight: '600',
            fontSize: 18,
          },
        }}
      />
    </ProfileStack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0077BE',
        tabBarInactiveTintColor: '#484C52',
        tabBarStyle: {
          backgroundColor: '#e5e5e5',
          borderTopWidth: 0,
          height: 90,
          paddingTop:10
        },
      }}
    >
      <Tab.Screen
        name="HomeStack" 
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#B3DFFC' : 'transparent',
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Entypo
                name="home"
                size={24}
                color={focused ? '#0077BE' : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Desempenho"
        component={PerformanceScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#B3DFFC' : 'transparent',
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons
                name="stats-chart"
                size={24}
                color={focused ? '#0077BE' : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? '#B3DFFC' : 'transparent',
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons
                name="person"
                size={24}
                color={focused ? '#0077BE' : color}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Varela-Regular': require('./assets/Varela-Regular.ttf'),
        'Inter-Regular': require('./assets/Inter.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Privacidade" component={Privacidade} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}