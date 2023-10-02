import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

const ColorList = () => {

  // ['rgb(255,255,255)', 'rgb(122,122,122), ...']
  const [colors, setColors] = useState([]);

  function addColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setColors(prevColors => [...prevColors, `rgb(${r},${g},${b})`]);
  }

  return (
    <View>
      <Button
        title="Adiciona Cor"
        onPress={() => addColor()}
        
      />
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <View style={{ backgroundColor: item, width: 100, height: 100, borderRadius: 100 }}>
          </View>
        }
      />

    </View>
  )
}

const styles = StyleSheet.create({

});

export default ColorList;
