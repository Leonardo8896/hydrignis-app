import {react, useState} from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

export default function CameraView({ temps }) {
  const generateRandomTemps = (count) => {
    return Array.from({ length: count }, () => Math.floor((Math.random() *22+40) - 40));
  };
  //const [temps, setTemps] = useState(generateRandomTemps(768))

/*   setInterval(()=>{
    setTemps(generateRandomTemps(768))
  },50) */

  const temperatureToRGB = (temp) => {
    let r = 22
    let g = 22
    let b = 22
    const azul = [50, 100, 250]
    const verde = [150, 250, 150]
    const amarelo = [250, 250, 0]
    const laranja = [250, 150, 0]
    const vermelho = [250, 0, 0]
    if (temp <= 15)
    {
      let prop = (temp - -40) / (15 - -40)
      r = (azul[0] + prop * (verde[0] - azul[0]))
      g = (azul[1] + prop * (verde[1] - azul[1]))
      b = (azul[2] + prop * (verde[2] - azul[2]))
    }
    else if (temp <= 30)
    {
      r = verde[0]
      g = verde[1]
      b = verde[2]
    }
    else if (temp <= 35)
    else if (temp <= 35)
    {
      let prop = (temp - 15) / (35 - 15)
      r = (verde[0] + prop * (amarelo[0] - verde[0]))
      g = (verde[1] + prop * (amarelo[1] - verde[1]))
      b = (verde[2] + prop * (amarelo[2] - verde[2]))
    }
    else if (temp <= 50)
    else if (temp <= 50)
    {
      let prop = (temp - 35) / (50 - 35)
      r = (amarelo[0] + prop * (laranja[0] - amarelo[0]))
      g = (amarelo[1] + prop * (laranja[1] - amarelo[1]))
      b = (amarelo[2] + prop * (laranja[2] - amarelo[2]))
    }
    else if (temp <= 100)
    else if (temp <= 100)
    {
      let prop = (temp - 50) / (100 - 50)
      r = (laranja[0] + prop * (vermelho[0] - laranja[0]))
      g = (laranja[1] + prop * (vermelho[1] - laranja[1]))
      b = (laranja[2] + prop * (vermelho[2] - laranja[2]))
    }
    else
    {
      r = vermelho[0]
      g = vermelho[1]
      b = vermelho[2]
    }
    else
    {
      r = vermelho[0]
      g = vermelho[1]
      b = vermelho[2]
    }
    
    return {
      temp: temp,
      r: Math.round(Math.max(0,Math.min(r,255))),
      g: Math.round(Math.max(0,Math.min(g,255))),
      b: Math.round(Math.max(0,Math.min(b,255))),
    };
  };

  return (
      <Svg height="100%" width="100%" style={{borderWidth: 1}}>
        {temps.map(temp => ({ ...temperatureToRGB(temp) })).map((item, index) => (
          <Rect
            key={index}
            x={`${(index % 32) * (100 / 32)}%`}
            y={`${Math.floor(index / 32) * (100 / 24)}%`}
            width={`${100 / 32}%`}
            height={`${100 / 24}%`}
            fill={`rgb(${item.r}, ${item.g}, ${item.b})`}
          />
        ))}
      </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  }
})