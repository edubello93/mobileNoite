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
    </View>
  );
}

const styles = StyleSheet.create({
});

export default HomeScreen;
