import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title='Vai para Teste'
        onPress={() => navigation.navigate('Teste')}
      />
      <Button
        title='Vai para calculo IMC'
        onPress={() => navigation.navigate('FormIMC')}
      />
      <Button
        title='Vai para calculo Média das notas'
        onPress={() => navigation.navigate('Notas')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
});

export default HomeScreen;
