import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Teste from './src/components/Teste/Teste.js';
import HomeScreen from './src/components/HomeScreen';
import FormIMC from './src/components/Form/FormIMC.js';
import Notas from './src/components/notas/Notas.js';
import ColorList from './src/components/ColorList.js';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Teste" component={Teste} />
                <Stack.Screen name="FormIMC" component={FormIMC} />
                <Stack.Screen name="Notas" component={Notas} />
                <Stack.Screen name="ColorList" component={ColorList} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;