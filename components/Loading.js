import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();
  const [activeDots, setActiveDots] = useState(0);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setActiveDots(prev => {
        if (prev >= 3) {
          clearInterval(dotInterval);
          return 3;
        }
        return prev + 1;
      });
    }, 1000);

    const timer = setTimeout(() => {
      navigation.replace('Inicial');
    }, 4000);

    return () => {
      clearInterval(dotInterval);
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.img}
      />
      <View style={styles.dotsContainer}>
        <Text style={[styles.dot, activeDots >= 1 && styles.activeDot]}>•</Text>
        <Text style={[styles.dot, activeDots >= 2 && styles.activeDot]}>•</Text>
        <Text style={[styles.dot, activeDots >= 3 && styles.activeDot]}>•</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: Platform.OS === 'android' ? 16 : 0 
  },
  img: {
    height: 350,
    width: 350,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop:-30,
  },
  dot: {
    fontSize: 30,
    color: '#CCCCCC',
    marginHorizontal: 5,
    fontWeight:'bold',
  },
  activeDot: {
    color: '#0077BE',
    fontWeight:'bold',
  },
});