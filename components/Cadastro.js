import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Switch, StatusBar,
 Platform, ScrollView } from 'react-native';

export default function App({navigation}) {
  const [activeTab, setActiveTab] = useState('cadastro');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.rowheader}>
            <Image source={require('../assets/logo2.png')} style={styles.logo}/>
            <Text style={styles.titlelogo}>Hydrignis</Text>
          </View>
          <Text style={styles.start}>Comece já!</Text>
          <Text style={styles.substart}>Crie uma conta ou entre para explorar o aplicativo</Text>
        </View>
        
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[
              styles.tabButton, 
              activeTab === 'login' ? styles.activeTab : styles.inactiveTab
            ]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'login' ? styles.activeText : styles.inactiveText
            ]}>
              Login
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.tabButton, 
              activeTab === 'cadastro' ? styles.activeTab : styles.inactiveTab
            ]}
            onPress={() => setActiveTab('cadastro')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'cadastro' ? styles.activeText : styles.inactiveText
            ]}>
              Cadastro
            </Text>
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <View style={styles.formContainer}>

          <Text style={styles.inputLabel}>Nome</Text>
           <TextInput
             style={styles.input}
             placeholder="Digite seu nome"
             autoCapitalize="none"
           />
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#A0A0A0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <View style={styles.rememberContainer}>
            <View style={styles.switchContainer}>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: "#E0E0E0", true: "#07070A" }}
                thumbColor={rememberMe ? "#FFFFFF" : "#F5F5F5"}
              />
              <Text style={styles.rememberText}>Lembrar-me</Text>
            </View>
            
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('MainTabs')}>
            <Text style={styles.submitButtonText}>
              {activeTab === 'login' ? 'Entrar' : 'Cadastrar'}
            </Text>
          </TouchableOpacity>

          {/* Divisor */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Botões de login social */}
          <TouchableOpacity style={styles.socialButton}>
            <Image 
              source={require('../assets/google.png')} // Substitua pelo caminho correto do ícone
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Continuar com Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, {marginTop: 12}]}>
            <Image 
              source={require('../assets/facebook.png')} // Substitua pelo caminho correto do ícone
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Continuar com Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07070A',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    height: 25,
    width: 25,
  },
  header: {
    backgroundColor: '#07070A',
    padding: 20,
    paddingBottom: 30,
    paddingTop:40
  },
  titlelogo: {
    color: 'white',
    fontFamily: 'Inter-regular',
    fontSize: 15,
    marginLeft: 8,
  },
  rowheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:8
  },
  start: {
    color: 'white',
    fontFamily: 'inter-regular',
    marginTop: 4,
    fontWeight: '600',
    fontSize: 22,
    marginLeft: 7
  },
  substart: {
    color: 'white',
    fontFamily: 'Inter-regular',
    marginTop: 5,
    marginLeft: 7,
    fontSize: 10
  },
  tabsContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop:20,
    borderRadius:10,
    padding: 3,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
  },
  inactiveTab: {
    backgroundColor: '#EFF0F6', 
  },
  tabText: {
    fontFamily: 'Inter-regular',
    fontSize: 13,
  },
  activeText: {
    color: '#232447',
  },
  inactiveText: {
    color: '#7D7D91',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputLabel: {
    fontFamily: 'Inter-regular',
    fontSize: 12,
    color: '#07070A',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: 'Inter-regular',
    fontSize: 13,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontFamily: 'Inter-regular',
    fontSize: 12,
    color: '#07070A',
    marginLeft: 8,
  },
  forgotPassword: {
    fontFamily: 'Inter-regular',
    fontSize: 12,
    color: '#07070A',
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#AD2831',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontFamily: 'Inter-regular',
    fontSize: 14,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    width: 40,
    textAlign: 'center',
    fontFamily: 'Inter-regular',
    fontSize: 12,
    color: '#7D7D91',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    justifyContent: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontFamily: 'Inter-regular',
    fontSize: 14,
    color: '#07070A',
    fontWeight: '500',
  },
});