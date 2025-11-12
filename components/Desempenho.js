import React, { use, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Platform, StatusBar, Dimensions, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Svg, { Circle, G, Text as SvgText } from "react-native-svg";
import { LineChart, Grid, XAxis, AreaChart } from "react-native-svg-charts";
import Feather from '@expo/vector-icons/Feather';
import {getStatistics} from '../services/statistics';
import { set } from 'zod';

export default function PerformanceScreen() {
  const [gasAlerts, setGasAlerts] = useState(0);
  const [fireAlerts, setFireAlerts] = useState(0); 
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [bars, setBars] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  useEffect(() => {
    const fetchStatistics = async () => {
      const statistics = await getStatistics();
      if (statistics) {
        let tmp_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let tmp_bars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        statistics.hydralize_statistics.forEach(stat => {
          const monthIndex = new Date(stat.date).getMonth();
          tmp_array[monthIndex] = stat.energy_production;
          tmp_bars[monthIndex] = stat.water_production;
        });

        setData(tmp_array);
        setBars(tmp_bars);
      }
    };

    fetchStatistics();
  }, []);


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

  const maxWidth = 103;

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView>
      <Text style={{fontFamily:'Inter-regular', color:'#1D1F24', fontSize:20, fontWeight:600, marginTop:30, marginLeft:15}}>Relatórios</Text>
      <Text style={{fontFamily:'Inter-regular', color:'#7B7B7B', fontSize:13, marginLeft:15, marginTop:20}}>Cuidados</Text>

      <View style={styles.whitecard}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
          <Feather name="check-circle" size={20} color="#68d391" />
          <Text style={{fontFamily:'Inter-regular', fontSize:13, color:'#000000'}}>Checagem de alertas:                                                     </Text>
        </View>
      
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={styles.caixacinza}>
            <Text style={{fontFamily:'Inter-regular', fontSize:13}}>Gás</Text>
            <Text style={{fontFamily:'Inter-regular', fontSize:13, color:'#A2A2A2'}}>0</Text>
          </View>

          <View style={styles.caixacinza}>
            <Text style={{fontFamily:'Inter-regular', fontSize:13}}>Fogo</Text>
            <Text style={{fontFamily:'Inter-regular', fontSize:13, color:'#A2A2A2'}}>0</Text>
          </View>
        </View>
      </View>

      <Text style={{fontFamily:'Inter-regular', color:'#7B7B7B', fontSize:13, marginLeft:15, marginTop:20}}>Geração de Energia</Text>

      <View style={styles.whitecard}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10, marginRight:10, alignItems:'center', marginTop:6}}>
        <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:12, color:'#808080'}}>Produção de Energia</Text>
        <Text style={{fontSize:9, fontFamily:'Inter-regular', color:'#939393'}}>Esse Ano</Text>
      </View>

      <View style={styles.conteudo}>
         <AreaChart
        style={{ height: 160 }}
        data={data}
        svg={{ fill: "rgba(255, 215, 0, 0.3)" }}
        contentInset={{ top: 20, bottom: 30 }}
      >
        <Grid svg={{ stroke: "#eee" }} />
      </AreaChart>

      <LineChart
        style={StyleSheet.absoluteFill}
        data={data}
        svg={{ stroke: "#FFCF00", strokeWidth: 2 }}
        contentInset={{ top: 25, bottom: 50 }}
      >
        <Pontos />
      </LineChart>

      <XAxis
        style={{ marginHorizontal: -10, height: 25, marginTop:-6, fontFamily:'Inter-regular', fontSize:8 }}
        data={data}
        formatLabel={(value, index) => months[index]} 
        contentInset={{ left: 25, right: 25 }}
        svg={{ fontSize: 8, fill: "#909090" }}
      />
      </View>

      <Text style={{fontFamily:'Inter-regular', fontSize:11, color:'#A2A2A2', textAlign:'center', width:'80%',
       marginLeft:'auto', marginRight:'auto', marginTop:-2}}>Aqui você pode monitorar o consumo de energia dos dispositivos conectados.</Text>
      </View>

      <Text style={{fontFamily:'Inter-regular', color:'#7B7B7B', fontSize:13, marginLeft:15, marginTop:20}}>Geração de Água</Text>


      <View style={styles.whitecard}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10, marginRight:10, alignItems:'center', marginTop:6}}>
        <Text style={{fontFamily:'Inter-regular', fontWeight:600, fontSize:12, color:'#808080'}}>Produção de água</Text>
        <Text style={{fontSize:9, fontFamily:'Inter-regular', color:'#939393'}}>Esse Ano</Text>
      </View>
      <View style={styles.container2}>
      {bars.map((height, index) => (
        <View key={index} style={[styles.bar,
            {height: height, backgroundColor: index === 7 ? '#0077BE' : '#b0d4ec' },]}/>))}
        </View>
        <XAxis
        style={{ marginHorizontal: -4, height: 25, marginTop:6, fontFamily:'Inter-regular', fontSize:8 }}
        data={data}
        formatLabel={(value, index) => months[index]} 
        contentInset={{ left: 25, right: 25 }}
        svg={{ fontSize: 8, fill: "#909090" }}
      />
        <Text style={{fontFamily:'Inter-regular', fontSize:11, color:'#A2A2A2', textAlign:'center', width:'80%',
       marginLeft:'auto', marginRight:'auto', marginTop:-4}}>Aqui você pode monitorar o consumo de energia dos dispositivos conectados.</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  whitecard:{
    marginLeft:15,
    marginRight:15,
    backgroundColor:'white',
    paddingHorizontal:12,
    borderWidth:1,
    borderColor:'#B8B8B8',
    paddingVertical:12,
    borderRadius:10,
    marginTop:10
  },
  caixacinza:{
    backgroundColor:'#F9F9F9',
    flexDirection:'row',
    alignItems:'center',
    width:150,
    padding:10,
    borderRadius:8,
    justifyContent:'space-between',
    marginTop:15
  },
  conteudo:{
    marginLeft:10,
    marginRight:10,
  },
  bar: {
    width: 15, 
    borderRadius: 5, 
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'flex-end', 
    marginLeft:10,
    marginRight:10,
    height: 56, 
    justifyContent: 'space-around', 
    marginTop:40
  },
});
