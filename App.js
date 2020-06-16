//App.js
import React from 'react';
import ReactDOM from "react-dom";

import { ImageBackground, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import des vues custom issues de /customComponents

import HeaderCustom from './customComponents/cHeader';
import FooterCustom from './customComponents/cFooter';
import SearchBarCustom from './customComponents/cSearchBar';
import Connexion from "./customComponents/cAuthentification";
import Home from './customComponents/cHome';

import Navigation from "./navigation/Navigation";

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

const Stack = createStackNavigator();

export default function App()
{
  
  return (
    
      <Navigation />
  );

  /*
    Pour Stack.Navigator
    return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
  */
};