import * as SecureStore from "expo-secure-store";

async function saveToken(token) {
  try {
    await SecureStore.setItemAsync("JWT_token", token);
    console.log("Token salvo com sucesso.");
  } catch (error) {
    console.error("Erro ao salvar o token:", error);
  }
}

async function saveItem(key, value) {
  try {
    await SecureStore.setItemAsync(key, value, {
      keychainAccessible: SecureStore.ALWAYS_THIS_DEVICE_ONLY, // iOS
    });
  } catch (e) {
    console.error("Erro ao salvar:", e);
  }
}

async function getItem(key) {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.error("Erro ao ler:", e);
    return null;
  }
}

async function getToken() {
  try {
    const token = await SecureStore.getItemAsync("JWT_token");
    return token;
  } catch (error) {
    console.error("Erro ao obter o token:", error);
    return null;
  }
}

async function deleteToken() {
  try {
    await SecureStore.deleteItemAsync("JWT_token");
    console.log("Token deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar o token:", error);
  }
}

async function deleteItem(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.error("Erro ao deletar:", e);
  }
}

const TokenService = {
  saveToken,
  getToken,
  deleteToken,
  saveItem,
  getItem,
  deleteItem
};

export default TokenService;
