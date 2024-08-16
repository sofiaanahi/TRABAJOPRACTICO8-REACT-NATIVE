import { Image, StyleSheet, Platform, TouchableOpacity, Text} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { useState, useEffect } from 'react';


export default function HomeScreen() {
  
  // estos son los valores compartidos para las animaciones
  const titleposition = useSharedValue(-50); // comienza fuera de la pantalla
  const backgroundColor = useSharedValue('#61DAFB');
  const opacity = useSharedValue(1);
  
  // se anima el titulo hacia abajo
  useEffect(()=>{
    titleposition.value = withTiming(0,{ duration: 1000});
  },[]);

  const onPress = () => {

    //cambia el color del fondo
    backgroundColor.value = withTiming('#FF6F61', {duration: 1000});

    //desaparece el titulo
    opacity.value=withTiming(0, {duration:2000});
  };

  // estilo animado para el tituto

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titleposition.value}],
      opacity: opacity.value,
    }
  });

  // estilo animado para el fondo

  const animatedBackgroundStyle = useAnimatedStyle(()=>{
    return{
      backgroundColor: backgroundColor.value,
    };
  });




  return (
    <Animated.View style={[styles.Container, animatedBackgroundStyle]}>
      <Animated.Text style={[styles.title, animatedTitleStyle]}> BIENVENIDO 🌸</Animated.Text>
      <TouchableOpacity style={styles.button}  onPress={onPress}>
      <text>Iniciar</text>
      </TouchableOpacity>
    </Animated.View>
  );
}



const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: 8,
    backgroundColor: '#61DAFB',
  },
  title: {
    alignItems: 'center',
    padding: 10,
    fontSize: 48, 
    fontWeight: 'bold',
    zIndex: 1,
  
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
