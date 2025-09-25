import * as SecureStore from 'expo-secure-store';

export async function saveToken(token) {
    try {
        await SecureStore.setItemAsync('JWT_token', token);
        console.log("Token salvo com sucesso.");
    } catch (error) {
        console.error("Erro ao salvar o token:", error);
    }
}

export async function getToken() {
    try {
        const token = await SecureStore.getItemAsync('JWT_token');
        return token;
    } catch (error) {
        console.error("Erro ao obter o token:", error);
        return null;
    }
}

export async function deleteToken() {
    try {
        await SecureStore.deleteItemAsync('JWT_token');
        console.log("Token deletado com sucesso.");
    } catch (error) {
        console.error("Erro ao deletar o token:", error);
    }
}