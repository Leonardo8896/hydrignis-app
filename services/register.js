import * as TokenService from "./token"

const api_adress = "https://exemptible-odilia-sorely.ngrok-free.dev"

export async function register(name, email, password, navigation) {
    try {
        const response = await fetch(`${api_adress}/account/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        })
        // console.log(response);
        const json = await response.json();
        if (response.status === 401) {
            alert(json["error"]);
            return null;
        } else if (response.status === 200) {
            // alert("Login realizado com sucesso!");
            await TokenService.saveToken(json["Session-token"]);
            navigation.navigate('MainTabs', {
                screen: 'HomeStack',
                params: { screen: 'Home' }
            });
        } else if (response.status === 400) {
            alert(json["error"]);
            return null;
        }
        // console.log(response.status)
        // console.log(json);
    } catch (error) {
        console.error("Erro ao enviar:", error);
    }
}