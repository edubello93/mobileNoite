import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

function Notas() {
    const [nota1, setNota1] = useState(null);
    const [nota2, setNota2] = useState(null);
    const [messageCalc, setMessageCalc] = useState("preencha as notas");
    const [calc, setCalc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");


    function calcCalculator() {
        return setCalc(((Number(nota1) + Number(nota2)) / 2));
    }

    function validationCalc() {

        if (nota1 != null && nota2 != null) {
            calcCalculator();
            setMessageCalc("seu media eh igual: ");
            setTextButton("Calcular Novamente");
            return
        }
        else {
            setCalc(null);
            setTextButton("Calcular");
            setMessageCalc("preencha os dados");
        }
    }

    return (
        <View>
            <View>
                <Text>Media do Aluno</Text>
                <Text>NOTA 1</Text>

                <TextInput
                    onChangeText={setNota1}
                    value={nota1}
                    placeholder="nota1"
                    keyboardType="numeric"
                ></TextInput>
                <Text>NOTA 2</Text>
                <TextInput
                    onChangeText={setNota2}
                    value={nota2}
                    placeholder=
                    "nota2"
                    keyboardType=
                    "numeric"
                />
                <Button
                    title={textButton}
                    onPress={() => validationCalc()}
                />
                <Text>nota1: {nota1}</Text>
                <Text>nota2: {nota2}</Text>
                <Text>{messageCalc}{calc}</Text>
                <Text>{calc}</Text>
            </View>
        </View>
    );
}

export default Notas;