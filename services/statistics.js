import { ENV } from '../env';
import TokenService from '../services/token';

const api_adress = ENV.API_ADDRESS;

export async function getStatistics() {
    try {
        const token = await TokenService.getToken();
        const response = await fetch(`${api_adress}/devices/statistics`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        // console.log("Resposta da API de estatísticas:", response);
        const json = await response.json();
        // console.log("Estatísticas recebidas:", json);
        if (response.status === 200) {
            return json;
        } else if (response.status === 401) {
            alert("Sessão expirada. Faça login novamente.");
            await TokenService.removeToken();
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
    }
}