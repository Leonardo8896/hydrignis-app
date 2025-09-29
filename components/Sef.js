import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import { ProgressBar } from "react-native-paper";
import { BarChart } from "react-native-chart-kit";
import { PieChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Circle, G, Text as SvgText } from "react-native-svg";
import { LineChart, Grid, XAxis, AreaChart } from "react-native-svg-charts";
import eventBus from "../events";
import WaterProgress from "./graphics/percent";

function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function waterBox(text, iconName) {
  return (
    <View style={{ marginLeft: 6 }}>
      <Feather name="check-circle" size={16} color="#68d391" />
    </View>
  );
}

export default function HomeScreen() {
  const [showBattery, setShowBattery] = useState(true);
  const [showWater, setShowWater] = useState(true);
  const [showEnergy, setShowEnergy] = useState(true);

  // dados atualizados em tempo real

  const [waterInputData, setWaterInputData] = useState(0);
  const [batteryInputData, setBatteryInputData] = useState(0);
  const [hasCloro, setHasCloro] = useState(false);
  const [hasWater, setHasWater] = useState(false);
  const [currentEnergy, setCurrentEnergy] = useState(0);
  const [waterIn, setWaterIn] = useState(9);
  const [waterOut, setWaterOut] = useState(0);

  const max = 10;

  useEffect(() => {
    function handleUpdate(data) {
      const body = JSON.parse(data);
      if (body.battery == 0) {
        setBatteryInputData(getRandomNumber(20, 100));
      } else {
        setBatteryInputData(body.battery);
      }
      setHasCloro(body.hasCloro || 1);

      setWaterIn(body.waterIn || 2);
      setWaterOut(body.waterOut || 2);
      setHasWater(body.hasWater ? true : false);
    }
    eventBus.on("hydralize", handleUpdate);
    return () => {
      eventBus.off("update", handleUpdate);
    };
  }, []);

  const screenWidth = Dimensions.get("window").width;

  const data = [
    {
      population: batteryInputData,
      color: "#006D1F",
    },
    {
      population: 100 - batteryInputData,
      color: "#E6E6EC",
    },
  ];

  const barData = [30, 20, 40, 35, 20, 10, 45];
  const labels = ["D", "S", "T", "Q", "Q", "S", "S"];
  const maxBarHeight = Math.max(...barData);

  const totalPopulation = data.reduce((sum, item) => sum + item.population, 0);
  const batteryPercentage = (data[0].population / totalPopulation) * 100;

  const dados = [
    { dia: "Seg", litros: 390 },
    { dia: "Ter", litros: 520 },
    { dia: "Qua", litros: 455 },
    { dia: "Qui", litros: 760 },
    { dia: "Sex", litros: 650 },
    { dia: "Sab", litros: 585 },
    { dia: "Dom", litros: 520 },
  ];

  const valorMaximo = 780;

  const energiaAtual = 14;
  const energiaMaxima = 35;
  const porcentagem = energiaAtual / energiaMaxima;

  const raio = 50;
  const circunferencia = Math.PI * raio;

  const dados2 = [25, 15, 20, 28, 22, 34, 14];
  const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

  const Pontos = ({ x, y, data }) => (
    <G>
      {data.map((value, index) => (
        <Circle
          key={index}
          cx={x(index)}
          cy={y(value)}
          r={4}
          fill="#FFCF00"
          stroke="#fff"
          strokeWidth={1.5}
        />
      ))}
    </G>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flextop}>
          <Text style={styles.titulo}>Ligado</Text>
          <View style={styles.powerButton}>
            <MaterialCommunityIcons name="power" size={22} color="#006ED3" />
          </View>
        </View>

        <View style={styles.whitecard}>
          <View style={styles.flextop2}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto name="battery-quarter" size={24} color="#006d1f" />
              <Text style={styles.titulocategoria}>Bateria</Text>
            </View>
            <TouchableOpacity onPress={() => setShowBattery(!showBattery)}>
              <Entypo
                name={showBattery ? "chevron-up" : "chevron-down"}
                size={24}
                color="#484C52"
              />
            </TouchableOpacity>
          </View>
          {showBattery && (
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 20,
                marginTop: 5,
                //borderWidth: 1,
                //alignItems: "center"
              }}
            >
              <View style={[styles.chartWrapper]}>
                <Text style={styles.chartTitle}>Nível da Bateria</Text>
                <View style={styles.chartContainer}>
                  <PieChart
                    data={data}
                    width={170}
                    height={85}
                    chartConfig={{
                      color: () => "transparent",
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="0"
                    hasLegend={false}
                    absolute
                  />
                  <View style={styles.whitecircle}>
                    <Text style={styles.batteryPercentage}>
                      {`${Math.round(batteryPercentage)}%`}
                    </Text>
                  </View>
                  <Text style={styles.grayPercentage}>Carregando...</Text>
                  {/*                   <Text style={styles.lightgrayPercentage}>
                    (40min até o término)
                  </Text> */}
                </View>
              </View>

              {/*               <View style={styles.barContainer}>
                <Text style={styles.chartTitle2}>Uso de energia</Text>
                <View style={styles.barChart}>
                  {barData.map((value, index) => (
                    <View key={index} style={styles.barColumn}>
                      <View
                        style={[
                          styles.bar,
                          {
                            height: (value / maxBarHeight) * 80,
                            backgroundColor: value > 35 ? "#006D1F" : "#A8D8B9",
                          },
                        ]}
                      />
                      <Text style={styles.barLabel}>{labels[index]}</Text>
                    </View>
                  ))}
                </View>
              </View> */}
            </View>
          )}
        </View>

        <View style={styles.whitecard}>
          <View style={styles.flextop2}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="droplet" size={20} color="#0077BE" />
              <Text style={styles.titulocategoria2}>Geração de Água</Text>
            </View>
            <TouchableOpacity onPress={() => setShowWater(!showWater)}>
              <Entypo
                name={showWater ? "chevron-up" : "chevron-down"}
                size={24}
                color="#484C52"
              />
            </TouchableOpacity>
          </View>

          {showWater && (
            <View style={styles.conteudo}>
              {/*               <View style={styles.subcabecalho}>
                <Text style={styles.subtitulo}>Geração de Água Semanal</Text>
                <Text style={styles.semana}>Essa semana</Text>
              </View>

              {dados.map((item, indice) => (
                <View key={indice} style={styles.linhaBarra}>
                  <Text style={styles.dia}>{item.dia}</Text>

                  <View style={styles.fundoBarra}>
                    <LinearGradient
                      colors={["#6976EB", "#6976EB"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={[
                        styles.barra,
                        { width: `${(item.litros / valorMaximo) * 100}%` },
                      ]}
                    >
                      {item.litros === 760 && (
                        <View style={styles.tooltip}>
                          <Text style={styles.textoTooltip}>
                            {item.litros} L
                          </Text>
                        </View>
                      )}
                    </LinearGradient>
                  </View>
                </View>
              ))} */}
              <WaterProgress value={waterIn} max={max} label={"Não filtrada"} />
              <WaterProgress value={waterOut} max={max} label={"Filtrada"} />
            </View>
          )}
        </View>

        <View style={styles.whitecard}>
          <View style={styles.flextop2}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Fontisto name="flash" size={20} color="#FFB800" />
              <Text style={styles.titulocategoria}>Dados Energéticos</Text>
            </View>
            <TouchableOpacity onPress={() => setShowEnergy(!showEnergy)}>
              <Entypo
                name={showEnergy ? "chevron-up" : "chevron-down"}
                size={24}
                color="#484C52"
              />
            </TouchableOpacity>
          </View>
          {showEnergy && (
            <View style={styles.corpo3}>
              <View style={styles.gaugeContainer3}>
                <Text style={styles.totalTitulo4}>Tensão da placa solar</Text>
                <Svg height="100" width="120" viewBox="0 0 120 60">
                  <G rotation="-120" origin="60,60">
                    <Circle
                      cx="60"
                      cy="60"
                      r={raio}
                      stroke="#eee"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${circunferencia}`}
                      strokeDashoffset="0"
                    />
                    <Circle
                      cx="60"
                      cy="60"
                      r={raio}
                      stroke="#FFD700"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${circunferencia}`}
                      strokeDashoffset={`${circunferencia * (1 - porcentagem)}`}
                      strokeLinecap="round"
                    />
                  </G>
                </Svg>
                <Text style={styles.textoenergia}>{energiaAtual}V</Text>
                <Text style={styles.subGauge3}>...</Text>
              </View>
            </View>
          )}
        </View>

        <View style={styles.whitecard2}>
          <View style={styles.flextop2}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="bar-graph" size={20} color="#333333" />
              <Text style={styles.titulocategoria}>Reservatórios</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginTop: 15,
              alignItems: "center",
            }}
          >
            <View>
              <View style={styles.caixacinza}>
                <View>
                  <Text
                    style={{
                      fontFamily: "Inter-regular",
                      fontWeight: 600,
                      color: "#333",
                      fontSize: 12,
                    }}
                  >
                    Reservatório de Água
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Inter-regular",
                      color: "#939393",
                      fontSize: 9,
                    }}
                  >
                    {hasWater ? "Completo" : "Incompleto"}
                  </Text>
                </View>
                {(hasWater == 1 && (
                  <View style={{ marginLeft: 6 }}>
                    <Feather name="check-circle" size={16} color="#68d391" />
                  </View>
                )) || (
                  <View style={{ marginLeft: 6 }}>
                    <Feather name="x" size={16} color="#e82121ff" />
                  </View>
                )}
              </View>

              <View style={styles.caixacinza2}>
                <View>
                  <Text
                    style={{
                      fontFamily: "Inter-regular",
                      fontWeight: 600,
                      color: "#333",
                      fontSize: 12,
                    }}
                  >
                    Reservatório de Cloro
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Inter-regular",
                      color: "#939393",
                      fontSize: 9,
                    }}
                  >
                    {hasCloro == 1 ? "Completo" : "Incompleto"}
                  </Text>
                </View>
                {(hasCloro == 1 && (
                  <View style={{ marginLeft: 6 }}>
                    <Feather name="check-circle" size={16} color="#68d391" />
                  </View>
                )) || (
                  <View style={{ marginLeft: 6 }}>
                    <Feather name="x" size={16} color="#e82121ff" />
                  </View>
                )}
              </View>
            </View>
            <Image
              source={require("../assets/reservatorios.png")}
              style={styles.reservatorioimage}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === "android" ? 16 : 0,
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
  flextop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: -2,
  },
  flextop2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 6,
  },
  titulo: {
    fontFamily: "Inter-regular",
    fontWeight: 600,
    fontSize: 18,
  },
  whitecard: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    paddingTop: 4,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 12,
    paddingBottom: 12,
  },
  titulocategoria: {
    fontFamily: "Inter-regular",
    fontSize: 14,
    marginLeft: 8,
  },
  titulocategoria2: {
    fontFamily: "Inter-regular",
    fontSize: 14,
    marginLeft: 6,
  },
  batteryPercentage: {
    fontFamily: "Inter-regular",
    fontSize: 12,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  chartWrapper: {
    marginTop: 12,
    width: 90,
  },
  chartTitle: {
    fontFamily: "inter-regular",
    fontSize: 12,
    color: "#333333",
    marginBottom: 4,
  },
  chartTitle2: {
    fontFamily: "inter-regular",
    fontSize: 12,
    color: "#333333",
    marginBottom: 10,
  },
  barColumn: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: 16,
  },
  bar: {
    width: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 4,
  },
  barLabel: {
    fontSize: 10,
    color: "#000",
    fontFamily: "Inter-regular",
  },
  barContainer: {
    alignItems: "center",
    width: "45%",
    marginTop: 13,
  },
  barChart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 80,
    width: "100%",
    marginTop: 12,
  },
  whitecircle: {
    marginLeft: 13,
    marginTop: -72,
    backgroundColor: "white",
    borderRadius: 200,
    width: 59,
    height: 59,
    alignItems: "center",
    justifyContent: "center",
  },
  grayPercentage: {
    fontSize: 10,
    color: "#777",
    marginLeft: 17,
    marginTop: 7,
  },
  lightgrayPercentage: {
    fontSize: 10,
    color: "#999",
  },
  conteudo: {
    marginTop: 12,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subcabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  subtitulo: {
    color: "#333",
    fontFamily: "Inter-regular",
    fontSize: 11,
  },
  semana: {
    color: "#2E3A59",
    fontSize: 11,
  },
  linhaBarra: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dia: {
    width: 40,
    fontWeight: "500",
    color: "#888",
    fontFamily: "Inter-regular",
    fontSize: 11,
  },
  fundoBarra: {
    backgroundColor: "#E5E5E5",
    height: 14,
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  barra: {
    height: 14,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  tooltip: {
    backgroundColor: "#5b48cc",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    position: "absolute",
    right: -35,
    top: -24,
    zIndex: 2,
  },
  textoTooltip: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  corpo3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
  },
  gaugeContainer3: {
    alignItems: "center",
    width: 140,
  },
  subGauge3: {
    fontSize: 10,
    color: "#777",
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Inter-regular",
  },
  totalContainer3: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "flex-start",
  },
  totalTitulo3: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
    fontFamily: "Inter-regular",
    marginLeft: "auto",
    marginRight: "auto",
  },
  totalTitulo4: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
    fontFamily: "Inter-regular",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: -10,
  },
  valorHoje3: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Inter-regular",
    marginLeft: "auto",
    marginRight: "auto",
  },
  previsaoTexto3: {
    fontSize: 10,
    color: "#888",
    marginTop: 12,
  },
  grafico3: {
    marginTop: 4,
    height: 50,
    borderRadius: 4,
    justifyContent: "flex-end",
    position: "relative",
  },
  pontoFinal3: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFD700",
    position: "absolute",
    right: 8,
    bottom: 20,
  },
  textoenergia: {
    fontFamily: "Inter-regular",
    fontSize: 16,
    fontWeight: 600,
    marginTop: -37,
  },
  conteudo4: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  caixacinza: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 4,
    backgroundColor: "#100FCFC",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 15,
  },
  caixacinza2: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 4,
    backgroundColor: "#100FCFC",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 15,
  },
  reservatorioimage: {
    height: 81,
    width: 119,
  },
  whitecard2: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "white",
    paddingTop: 4,
    borderWidth: 1,
    borderColor: "#B8B8B8",
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
  },
});
