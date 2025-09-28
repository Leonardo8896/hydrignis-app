import { ENV } from '../env';

const api_adress = ENV.WS_SERVER;

export async function getDevices(token) {
    try {
        const response = await fetch(`${api_adress}/devices`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(`Response status: ${response.status}`);
        //console.log(`Response: ${response.text()}`);
        const json = await response.json();
        if (response.status === 401) {
            alert(json["error"]);
            return null;
        } else if (response.status === 200) {
            // alert("Login realizado com sucesso!");
            return json;
        } else if (response.status === 400) {
            alert(json["error"]);
            return null;
        }
    } catch (error) {
        console.error("Erro ao enviar:", error);
    }
}

export function loadCards(devices) {
    const cards = []

    devices.forEach(device => {
        if (device["type"] === "igniszero") {
            cards.push(
                <View style={[styles.whitecard, !ignisPowerOn && styles.disabledCard]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ignis', {serial_number: device["serial_number"]})}>
                    <View style={styles.topcard}>
                        <View style={styles.rowtopcard}>
                        <MaterialCommunityIcons name="fire" size={24} color={ignisPowerOn ? "#AD2831" : "#cccccc"} />
                        <Text style={[styles.nomedispositivo, !ignisPowerOn && styles.disabledText]}>Ignis 1 de Murilo</Text>
                        </View>
                        <TouchableOpacity onPress={toggleIgnisPower}>
                        <View style={[styles.powerButton, !ignisPowerOn && styles.powerButtonOff]}>
                            <MaterialCommunityIcons name="power" size={18} color={ignisPowerOn ? "#006ED3" : "#cccccc"} />
                        </View>
                        </TouchableOpacity>
                    </View>
            
                    <View style={styles.bottomCard}>
                        <Image source={require('../assets/Ignis.png')} style={styles.hydralize}/>
                        <View style={[styles.verticalLine, !ignisPowerOn && {backgroundColor: '#e8e8e8'}]}/>
            
                        <View style={styles.infoContainer}>
                        <View style={styles.infoRow}>
                            <MaterialCommunityIcons name="signal-variant" size={20} color={ignisPowerOn ? "black" : "#cccccc"} />
                            <Text style={[styles.textoconexao, !ignisPowerOn && styles.disabledText]}>Conectado</Text>
                        </View>
            
                        <View style={styles.infoRow}>
                            <MaterialIcons name="place" size={20} color={ignisPowerOn ? "black" : "#cccccc"} />
                            <Text style={[styles.textoconexao, !ignisPowerOn && styles.disabledText]}>Piso 3</Text>
                        </View>
                        </View>
                        <View>
                        <Text style={[styles.textStatsAparelho, !ignisPowerOn && styles.disabledText]}>Status do ambiente:</Text>
                        <Text style={[styles.textStats, !ignisPowerOn && styles.disabledText]}>{ignisPowerOn
                            ? 'Seguro' : 'Desligado'}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    </View>
            )
        }
    })
}