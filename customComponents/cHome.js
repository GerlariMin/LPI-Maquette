//Components/cHome.js
//import React from 'react';
import React, { useState, useEffect } from 'react';

import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//https://aboutreact.com/react-native-geolocation/
//import Geolocation from '@react-native-community/geolocation';

import * as Localization from 'expo-localization';
//https://docs.expo.io/versions/v37.0.0/sdk/location/
import * as Location from 'expo-location';

//https://docs.expo.io/versions/v37.0.0/sdk/payments/
//import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

import HeaderCustom from './cHeader';
import FooterCustom from './cFooter';
import SearchBarCustom from './cSearchBar';

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

/*const params = {
  // mandatory
  number: '4242424242424242',
  expMonth: 11,
  expYear: 17,
  cvc: '223',
  // optional
  name: 'Test User',
  currency: 'usd',
  addressLine1: '123 Test Street',
  addressLine2: 'Apt. 5',
  addressCity: 'Test City',
  addressState: 'Test State',
  addressCountry: 'Test Country',
  addressZip: '55555',
};

const token = async () => {await Stripe.createTokenWithCardAsync(params)};*/

export default class cHome extends React.Component
{
  
  constructor(props){
    super(props);
    this.lieu=null;
    this.state={
      lieu: "en cours de localisation..."
    }
  }

  setLocation(param){
    console.log("SET- START");
    console.log("setloc: "+param);
    this.lieu=param;
  }
  //https://docs.expo.io/versions/v37.0.0/sdk/location/
  useEffect() {
    console.log("START");
    (async () => {
      console.log("ASYNC- START");
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      console.log("ASYNC- STATUS = "+status);
      let location = await Location.getCurrentPositionAsync({});
      console.log("Lieu: "+location);
      console.log("ADRESSE: "+location);
      let adresse = Location.reverseGeocodeAsync({"latitude":27.234495162963867,"longitude":48.80560495042707});
      console.log("ADRESSE: "+JSON.stringify(adresse));
      this.setLocation(location);
      this.lieu=location;
      this.setState({lieu: JSON.stringify(this.lieu)})
      console.log("this.lieu: "+JSON.stringify(this.lieu)+ " => "+this.state.lieu);
      console.log("ASYNC- END");
    })();
    console.log("END");
  }

  goTo()
  {
    this.props.navigation.navigate("Connexion");
  }

  goToMap()
  {
    this.props.navigation.navigate("Carte");
  }

  goToProfil()
  {
    this.props.navigation.navigate("Profil");
  }

  openNavigator()
  {
      this.props.navigation.openDrawer();
  }

  localisation()
  {
    //navigator.geolocation.requestAuthorization;
    //console.log("Lieu: "+navigator.geolocation.getCurrentPosition('unknown'));
    console.log("Lieu: " + Localization.getLocalizationAsync() + " " + Localization.getLocalizationAsync().region);
  }

  render(){
    return(
      <ImageBackground source={image} style={styles.image}>
        <Header
          //utilisation du header a la place de headercustom de component/header.js car on ne peut pas ouvrir le menu sinon (a patcher)
          leftComponent={
          <Icon
              name='bars'
              type='font-awesome'
              color='#f50'
              size= {26}
              onPress= {() => this.openNavigator()}
          />
          }
          centerComponent={{ text: 'BARBERLIFE', style: { color: '#fff', fontWeight: 'bold' } }}
          //utilisation du avatar a la place de avatarcustom de component/avatar.js car on ne configurer le onpress sinon (a patcher)
          rightComponent={
              <Avatar
                  rounded
                  title="OFF"
                  overlayContainerStyle={{backgroundColor: 'grey'}}
                  //showAccessory
                  onPress={() => this.goToProfil()}
              />
          }
          containerStyle={{
          backgroundColor: 'black',
          justifyContent: 'space-around',
          }}
        />
        <Divider style={{ backgroundColor: 'white' }} />
        <SearchBarCustom/>

        <View style={styles.container}>

          <Card 
            title="ACCUEIL"
            containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
          >
              
              <Button 
                style={styles.space}
                onPress={() => this.useEffect()} 
                title={` Me localiser`} 
                icon=
                {
                  <Icon
                    name="road"
                    size={15}
                    color="white"
                  />
                }
              />

              <Text style={styles.space}>
                lieu: {this.state.lieu}
              </Text>

              <Button 
                style={styles.space}
                onPress={() => this.goToMap()} 
                title={` Me localiser sur une carte`} 
                icon=
                {
                  <Icon
                    name="map-signs"
                    size={15}
                    color="white"
                  />
                }
              />

              <Button 
                style={styles.space}
                onPress={() => this.goTo()} 
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
  },
  space:
  {
    marginTop: 10,
    marginBottom: 10
  }
});

//export default cHome
