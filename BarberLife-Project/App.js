import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connexion from './Component/page_connexion'
export default function App() {
  return (
    <Connexion/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
