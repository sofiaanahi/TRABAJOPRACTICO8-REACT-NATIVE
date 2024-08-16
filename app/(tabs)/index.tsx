import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function HomeScreen() {
  
  const [Iniciar, setInciar] = useState(0);
  const onPress = () => setInciar(prevIniciar => prevIniciar + 1);
 
  

  return (
    <>
    
    <ThemedView style={styles.Container}>
    <text> BIENVIENIDO </text> 
    </ThemedView>
    <ThemedView style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <text>Iniciar</text>
      </TouchableOpacity>
    </ThemedView>
    
    
    

    </>
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
  iniciarContainer: {
    alignItems: 'center',
    padding: 10,
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
