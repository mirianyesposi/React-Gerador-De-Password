import React from 'react';
import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text , StyleSheet, Image, TouchableOpacity} from "react-native";
import Slider from '@react-native-community/slider';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/cadeadoTransparente.svg")}
        style={styles.logo}
      />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height:50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#D9D9D9"
          minimumTrackTintColor="#274135"
          thumbTintColor="#358957"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#274135",
    justifyContent:'center',
    alignItems: 'center'
  },  
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop:14,
    marginBottom: 14,
    width:"80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button:{
    backgroundColor:"#358957",
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginBottom:18,
  },
  buttonText:{
    color:"#FFF",
    fontSize:20
  },
  title:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF",
  }
})