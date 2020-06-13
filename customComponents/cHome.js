//Components/cHome.js
import React from 'react';

import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderCustom from './cHeader';
import FooterCustom from './cFooter';
import SearchBarCustom from './cSearchBar';

export default function cHome ({navigation})
{
  const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

  const goTo = () => navigation.navigate("Connexion");

    return(
      <ImageBackground source={image} style={styles.image}>
        <HeaderCustom/>
        <Divider style={{ backgroundColor: 'white' }} />
        <SearchBarCustom/>

        <View style={styles.container}>

          <Card 
            title="ACCUEIL"
            containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
          >
              
              <Button 
                onPress={goTo} 
                title={` Se connecter`} 
                icon=
                {
                  <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                  />
                }
              />

          </Card>
          
        </View>

        <FooterCustom/>
      </ImageBackground>
    );
  
}

const styles = StyleSheet.create(
{
  container:
    {
      flex: 1,
      height: '100%',
      //backgroundColor: 'gray'
    },
  text:
  {
    //backgroundColor: 'black',
    opacity: 1,
    color: "white",
    fontWeight: 'bold'
  },
  image:
  {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

//export default cHome
