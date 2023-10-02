import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function FormIMC() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("preencha os dados");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");


    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validationImc() {

        if (weight != null && height != null) {
            imcCalculator();
            setMessageImc("seu IMC eh igual: ");
            setTextButton("Calcular Novamente");

        }
        else {
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("preencha os dados");
        }
    }

    function teste() {
        setImc(10);
    }


    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                ></TextInput>
                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder=
                    "Ex. 70.10"
                    keyboardType=
                    "numeric"
                />
                <Button
                    title={textButton}
                    onPress={() => validationImc()}
                />
                <Text>altura: {height}</Text>
                <Text>peso: {weight}</Text>
                <Text>{messageImc}</Text>
                <Text>{imc}</Text>
            </View>
        </View>
    );
}

export default FormIMC;