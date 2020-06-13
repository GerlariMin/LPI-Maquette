import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { AppRegistry } from 'react-native';
//import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import Connexion from "../customComponents/cAuthentification";
import Home from '../customComponents/cHome';
import Inscription from '../customComponents/cInscription';

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/* lien utile pour l'interface 
  https://reactnavigation.org/docs/handling-safe-area
*/
export default function Navigation() {
  return (
    
      
      <NavigationContainer theme={DarkTheme}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Connexion" component={Connexion} />
          <Drawer.Screen name="Inscription" component={Inscription} />
        </Drawer.Navigator>
      </NavigationContainer>
    
  );

  
}

/*
Pour Stack.navigator

  const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <ImageBackground source={image} style={styles.image}>
      <HeaderCustom/>
      <Divider style={{ backgroundColor: 'white' }} />
      <SearchBarCustom/>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Connexion" component={Connexion} />
        </Stack.Navigator>  
      </View>
      <FooterCustom/>
    </ImageBackground>
  );

  
}
*/