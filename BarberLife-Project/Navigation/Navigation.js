import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { AppRegistry } from 'react-native';
//import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import Connexion from "../Component/page_connexion";
import Home from "../Component/page_accueil";
import Inscription from "../Component/page_inscription";

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/* lien utile pour l'interface 
  https://reactnavigation.org/docs/handling-safe-area
*/
export default function Navigation() {
  return (
    
      
      <NavigationContainer theme={DarkTheme}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Connexion" component={Connexion} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Inscription" component={Inscription} />
        </Drawer.Navigator>
      </NavigationContainer>
    
  );

  
}