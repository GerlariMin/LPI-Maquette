import React from 'react';
// Sert pour mettre la ligne de délimitation
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header, Rating, Text } from 'react-native-elements';

//https://docs.expo.io/versions/v37.0.0/sdk/location/
import * as Location from 'expo-location';

//import AvatarCustom from './avatar'
//import HeaderCustom from './header';
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };
const WATER_IMAGE = require('../Images/star.png');

// Vue afficher pour la page de connexion
export default class Coiffeur extends React.Component
{

    constructor(props)
    {
        super(props)
        console.log("HOME PROPS: "+JSON.stringify(this.props) +" => "+JSON.stringify(this.props.idUser));
        console.log("HOME PROPS: "+JSON.stringify(this.props) +" ==> "+JSON.stringify(this.props.updateIdUser));
        this.inputId = ""
        this.inputMdp = ""
        /*this.state = 
        {
            data:[],
            IdUser:"",
            lieu: "en cours de localisation..."
        }*/        
    }

    //foncitons Navigator
    goToConnexion()
    {
        this.props.navigation.navigate("Connexion");
    }

    goToHome()
    {
        this.props.navigation.navigate("Accueil");
    }

    openNavigator()
    {
        this.props.navigation.openDrawer();
    }
    fetchRdv = async()=>
    {
      console.log("FETCHHOME START");
        const response = await fetch('http://192.168.0.32:4545/rdv',
        {
            method:'POST',
            headers:
            {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                idUser: this.props.route.params.id_user
            }),
        })
        const users = await response.json();
        switch(users.sucess){
          case 1 :
            alert("Commande effectué");
          break;
          case 2:
            alert("Problème lors de la commande");
          break;
        }
       
        
    }

    render()
    {
      
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
                      title="ON"
                      overlayContainerStyle={{backgroundColor: "green"}}
                      showAccessory
                      //onPress={() => this.goToConnexion()}
                  />
              }
              containerStyle={{
              backgroundColor: 'black',
              justifyContent: 'space-around',
              }}
          />
                <Divider style={{ backgroundColor: 'white' }} />
                <SearchBarCustom />

                <View style={styles.container}>

                <Card
                    title={this.props.route.params.user.nom_user + " " + this.props.route.params.user.prenom_user}
                    image={require('../Images/BarberLife-logo-Brown.png')}
                    containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
                >

                  <Text>                    
                    Mail: {this.props.route.params.user.mail_user}
                  </Text>

                  <Text>
                    Téléphone: {this.props.route.params.user.nom_user}
                  </Text>

                  <Text>
                    Disponible
                  </Text>

                    <Rating
                        type='custom'
                        ratingImage={WATER_IMAGE}
                        ratingColor='#3498db'
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={5}
                        imageSize={30}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />

                  <Button
                      onPress={() => this.fetchRdv()}
                      title={` Prendre rendez-vous `}
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
        )
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
      }
    });