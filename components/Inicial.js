import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.center}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
        </View>
        <View style={styles.rowtitle}>
          <Text style={styles.title}>Bem-vindo a </Text>
          <Text style={styles.title2}>Hydr</Text>
          <Text style={styles.title}>ignis</Text>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="login" size={24} color="black" />
          <Text style={styles.buttonText}>Prosseguir para o login</Text>
          <Feather name="arrow-right" size={16} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Ionicons name="person-add" size={20} color="white" />
          <Text style={styles.signupButtonText}>Novo usuário? Cadastre-se</Text>
          <Feather name="arrow-right" size={16} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Privacidade")}>
          <Text style={styles.politica}>Políticas de Privacidade</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === "android" ? 16 : 0,
  },
  content: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    fontSize: 22,
    color: "#525252",
    fontWeight: 500,
    marginTop: 12,
    fontFamily: "Inter-regular",
  },
  loginButton: {
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 22,
  },
  signupButton: {
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#24272b",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 2,
    paddingLeft: 8,
  },
  buttonText: {
    color: "#000",
    fontSize: 17,
    fontFamily: "Inter-regular",
  },
  signupButtonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "Inter-regular",
  },
  logo: {
    height: 280,
    width: 280,
    marginBottom: 20,
  },
  center: {
    alignItems: "center",
  },
  politica: {
    textAlign: "center",
    marginTop: 50,
    color: "#0077BE",
    fontSize: 17,
    fontFamily: "Inter-regular",
    marginBottom: 10,
  },
  rowtitle: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    marginTop: -20,
  },
  title2: {
    fontSize: 22,
    color: "#0077BE",
    fontWeight: 500,
    marginTop: 12,
    fontFamily: "inter-regular",
  },
});

export default WelcomeScreen;
