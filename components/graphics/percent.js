import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

const WaterProgress = ({ value, max, label }) => {
  const raio = 50;
    const circunferencia = 2 * Math.PI * raio;
  const porcentagem = Math.max(0, Math.min(1, value / max)); // garante entre 0 e 1

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
        <Svg height="120" width="120" viewBox="0 0 120 120">
          <G rotation="-90" origin="60,60">
          <Circle
            cx="60"
            cy="60"
            r={raio}
            stroke="#eee"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circunferencia}
            strokeDashoffset="0"
          />
          <Circle
            cx="60"
            cy="60"
            r={raio}
            stroke="#006eff"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circunferencia}
            strokeDashoffset={circunferencia * (1 - porcentagem)}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <Text style={styles.value}>{value} L</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", margin: 16 },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  value: { fontSize: 18, fontWeight: "bold", marginTop: -48, color: "#006eff" },
});

export default WaterProgress;