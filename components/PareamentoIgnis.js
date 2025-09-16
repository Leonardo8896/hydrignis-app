import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Platform, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function PareamentoIgnis() {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 2000; 
    const interval = 40; 
    const steps = duration / interval;
    const increment = 1; 

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 1) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => navigation.replace('IgnisPareado'), 500);
          return 1;
        }
        return newProgress;
      });

      setPercentage(prev => {
      const newPercentage = prev + (100 / steps);
      return newPercentage >= 100 ? 100 : Math.floor(Math.round(newPercentage));
    });
    }, interval);

    return () => clearInterval(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/pareamentoignis.png')}
        style={styles.img}
      />
      <Text style={styles.pareando}>
        {isComplete ? "Dispositivo pareado" : "Pareando Ignis 1..."}
      </Text>
      <ProgressBar 
        progress={progress} 
        color="#ad2831" 
        style={styles.progressBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 250,
    width: 250,
    marginBottom:20
  },
  progressBar: {
    height: 20,
    width: 270,
    marginBottom: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#f0f0f0',
  },
  percentageText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter-regular',
  },
  pareando: {
    fontFamily: 'Inter-regular',
    fontSize: 12,
    color: '#333333',
    marginTop: 1,
    marginBottom: 14
  }
});