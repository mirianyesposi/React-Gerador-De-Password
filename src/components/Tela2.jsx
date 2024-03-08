import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";

export default function Tela2({route, navigation}){
    const{nomeUsuario, idade} = route.params;
    return(
        <View>
            <Text>Nome do usuário: {nomeUsuario}</Text>
            <Text>Idade do usuário: {idade}</Text>
        </View>
    )
}

