import React, {useState} from 'react';

import Navigation from './Navigation/Navigation'

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

//https://www.youtube.com/watch?v=AhnPjl5rovQ
import userContext from './context/UserContext';

import Connexion from "./Component/page_connexion";
import Home from "./Component/page_accueil";
import Inscription from "./Component/page_inscription";
import Profil from "./Component/page_profil";
import Commande from "./Component/page_commande";
import Coiffeur from "./Component/page_coiffeur"

export default function App() 
{
  //Permet de donner les props à tous les components
  //https://fr.reactjs.org/docs/hooks-state.html
  const [idUser, setIDUser] = useState("");
  const [data, setData] = useState([]);

  const contextValue = 
  {
    idUser,
    updateIdUser: setIDUser
  }

  //const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  function HomeScreen({navigation}) 
  {
    return (
      <userContext.Provider value={contextValue}>
        <Home navigation={navigation} idUser={idUser} updateIdUser={setIDUser} data={data} updateData={setData}/>
      </userContext.Provider>
    );
  }

  function ConnexionScreen({navigation}) 
  {
    return (
      <Connexion navigation={navigation} idUser={idUser} data={data}/>
    );
  }

  const Tab = createBottomTabNavigator();

  function CommandTabs({navigation}) {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Commande" component={Commande} />
        <Tab.Screen name="Coiffeur" component={Coiffeur} />
      </Tab.Navigator>
    );
}

  return (
    <NavigationContainer theme={DarkTheme}>
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={HomeScreen} />
        <Drawer.Screen name="Commande" component={CommandTabs} />
        <Drawer.Screen name="Connexion" component={ConnexionScreen} />
        <Drawer.Screen name="Inscription" component={Inscription} />
        <Drawer.Screen name="Profil" component={Profil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};