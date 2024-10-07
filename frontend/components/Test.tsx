// Test.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, este es un componente de prueba!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default Test;
