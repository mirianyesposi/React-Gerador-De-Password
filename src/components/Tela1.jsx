import React from "react";
import { View, Text , Button} from "react-native";

export default function Tela1({navigation}){
    return(
        <View>
            <Text>Home</Text>
            <Button
                title="Me Clica"
                onPress={
                    ()=> {
                        navigation.navigate('NovaTela',{
                            nomeUsuario: "Ronan",
                            idade: 30,
                            titulo:"Biscoito"
                        })
                    }
            }/>
        </View>
    )
}