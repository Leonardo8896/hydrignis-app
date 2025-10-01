import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import eventBus from "../events";
import CameraView from "./CameraView";

/**
 * Calcula o nível de segurança (%) de um ambiente
 * baseado na concentração em ppm.
 *
 * @param {number} ppm - valor de concentração (ex.: leitura MQ-2)
 * @param {number} dangerThreshold - ppm a partir do qual é 0% seguro (default: 2000)
 * @returns {number} - percentual de segurança (0 a 100)
 */
function calcSafetyPercent(ppm, dangerThreshold = 2000) {
  if (ppm <= 0) return 100; // totalmente seguro
  if (ppm >= dangerThreshold) return 0; // perigo total

  // regra de 3 inversa
  const safety = 100 * (1 - ppm / dangerThreshold);

  return Math.round(safety); // arredonda para inteiro
}

const BarGraph = () => {
  const [showGases, setShowGases] = useState(true);
  const [showCam, setShowCam] = useState(true);

  // DADOS DA RECEBIDOS POR WEBSOCKET
  const [gasData, setGasData] = useState(0);
  const [cameraViewData, setCameraViewData] = useState([]);

  const bars = [8, 24, gasData, 40, 32];
  const maxWidth = 103;

  useEffect(() => {
    function handleUpdate(data) {
      const body = JSON.parse(data);
      setGasData(calcSafetyPercent(parseInt(body.Gas), 10000));
      setCameraViewData(body.Camera)
      
    }
    eventBus.on("ignis", handleUpdate);
    return () => {
      eventBus.off("update", handleUpdate);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowview}>
        <Text
          style={{ fontFamily: "Inter-regular", fontSize: 18, fontWeight: 600 }}
        >
          Ligado
        </Text>
        <View style={styles.powerButton}>
          <MaterialCommunityIcons name="power" size={18} color="#006ED3" />
        </View>
      </View>

      <View style={styles.whitecard}>
        <View style={styles.topwhitecard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="analytics" size={24} color="black" />
            <Text style={styles.titulocategoria}>Quant. gases inflamáveis</Text>
          </View>
          <TouchableOpacity onPress={() => setShowGases(!showGases)}>
            <Entypo
              name={showGases ? "chevron-up" : "chevron-down"}
              size={24}
              color="#484C52"
            />
          </TouchableOpacity>
        </View>

        {showGases && (
          <View style={styles.bodywhitecard}>
            <View>
              <Text
                style={{
                  fontFamily: "Inter-regular",
                  fontWeight: 600,
                  fontSize: 28,
                  textAlign: "center",
                  letterSpacing: 0.5,
                }}
              >
                {gasData}%
              </Text>
              <Text
                style={{
                  fontFamily: "Inter-regular",
                  fontSize: 15,
                  color: "#404040",
                  textAlign: "center",
                }}
              >
                Seguro
              </Text>
            </View>

            <View style={styles.container2}>
              {bars.map((height, index) => (
                <View
                  key={index}
                  style={[
                    styles.bar,
                    {
                      height: height,
                      backgroundColor: index === 2 ? "green" : "lightgray",
                    },
                  ]}
                />
              ))}
            </View>
          </View>
        )}
      </View>

      <View style={styles.whitecard}>
        <View style={styles.topwhitecard}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="camera" size={20} color="333333" />
            <Text style={styles.titulocategoria}>Visão da câmera térmica</Text>
          </View>
          <TouchableOpacity onPress={() => setShowCam(!showCam)}>
            <Entypo
              name={showCam ? "chevron-up" : "chevron-down"}
              size={24}
              color="#484C52"
            />
          </TouchableOpacity>
        </View>

        {showCam && (
          <View style={styles.bodywhitecard2}>
            <View style={{ flexDirection: "column", alignItems: "center", height: 200, width: 300, margin: 30 }}>
              <CameraView temps={cameraViewData}/>
              <Image
                source={require("../assets/barrargb.png")}
                style={styles.img2}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === "android" ? 16 : 0,
  },
  rowview: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
  },
  powerButton: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#bbbbbb",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  whitecard: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    paddingTop: 4,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    borderRadius: 10,
    marginTop: 12,
    //maxHeight: 300
  },
  titulocategoria: {
    fontFamily: "Inter-regular",
    fontSize: 14,
    marginLeft: 8,
  },
  topwhitecard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  bar: {
    width: 15,
    borderRadius: 5,
  },
  container2: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: 103,
    height: 56,
    justifyContent: "space-around",
  },
  bodywhitecard: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    paddingHorizontal: 20,
  },
  img: {
    height: 122,
    width: 170,
    borderRadius: 15,
  },
  bodywhitecard2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    paddingHorizontal: 10,
  },
  img2: {
    width: 150,
    height: 5,
    borderRadius: 30,
    marginTop: 8,
  },
  coluna1: {
    backgroundColor: "#2B3695",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: "space-around",
  },
  coluna2: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    marginTop: 10,
    justifyContent: "space-around",
  },
  coluna3: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    marginTop: 10,
    justifyContent: "space-around",
  },
  ladodois: {
    width: "45%",
  },
  prototipo: {
    height: 140,
    marginLeft: "auto",
    marginRight: "auto",
    width: 140,
  },
});

export default BarGraph;
