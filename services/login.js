import * as TokenService from '../services/token';

const api_adress = "https://exemptible-odilia-sorely.ngrok-free.dev"

export async function login(email, password, navigation) {
    try {
        const response = await fetch(`${api_adress}/account/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        // console.log(response);
        const json = await response.json();
        if (response.status === 401) {
            alert("Email ou senha incorretos.");
            return null;
        } else if (response.status === 200) {
            // alert("Login realizado com sucesso!");
            await TokenService.saveToken(json["Session-token"]);
            navigation.navigate('MainTabs', {
                screen: 'HomeStack',
                params: { screen: 'Home' }
            });
        }
        // console.log(response.status)
        // console.log(json);
    } catch (error) {
        console.error("Erro ao enviar:", error);
    }
}