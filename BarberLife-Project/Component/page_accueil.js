import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header } from 'react-native-elements';

/**
 * Import pour la localisation 
 * source: https://docs.expo.io/versions/v37.0.0/sdk/location/
 */
import * as Location from 'expo-location';

//Imports des classes personnalisées
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';

//constantes utiles
const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

// Vue afficher pour la page de connexion
export default class Home extends React.Component
{

    constructor(props)
    {
        super(props)
        console.log("PROPS HOME: "+ JSON.stringify(this.props))
        this.inputId = ""
        this.inputMdp = ""
        this.state = 
        {
            lieu: "en cours de localisation...",
            title: "OFF",
            avatarColor: "red",
            IdUser: "",
            data: []
        }     
    }

    /**
     * FONCTIONS NAVIGATION
     */

    goToConnexion()
    {
        this.props.navigation.navigate("Connexion");
    }

    goToProfil()
    {
      if(this.state.IdUser!="")
      {
        this.props.navigation.navigate("Profil", 
        {
          IdUser: this.state.IdUser,
          data: this.state.data
        });
      }
      else
      {
        alert("Vous devez être connecté pour accéder à cette page")
      }
    }

    openNavigator()
    {
        this.props.navigation.openDrawer();
    }

    displayHome()
    {
      if(typeof this.props.route.params === 'undefined')
      {
        return(
          <View>
            <Text>
              Bienvenue sur BarberLife !
            </Text>

            <Button
              onPress={() => this.goToConnexion()}
              title={` Connectez-vous`}
              icon=
              {
                <Icon
                    name="arrow-right"
                    size={15}
                    color="white"
                />
              }
            />
          </View>
        )
      } 
      else
      {
        return(
          <Text>
            Vous êtes maintenant connecté !
            Prenez rendez-vous avec le coiffeur de votre choix en 1 clic!
          </Text>
        )
      }
    }

    /**
     * FONCTION LOCALISATION
     * source: https://docs.expo.io/versions/v37.0.0/sdk/location/
     */

    useEffect()
    {
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
        this.setLocation(location);
        this.lieu=location;
        this.setState({lieu: JSON.stringify(this.lieu)})
        console.log("this.lieu: "+JSON.stringify(this.lieu)+ " => "+this.state.lieu);
        console.log("ASYNC- END");
      })();
      console.log("END");
    }

    render()
    {
      if(typeof this.props.route.params !== 'undefined' && this.state.IdUser=="")
        {
          this.setState({
            IdUser: this.props.route.params.IdUser,
            data: this.props.route.params.data,
            title: "ON",
            avatarColor: "green"
          })
        }
      console.log("PROPS HOME: "+ JSON.stringify(this.props))
      return(
        <ImageBackground source={image} style={styles.image}>
          <Header
              
              leftComponent=
              {
                <Icon
                    name='bars'
                    type='font-awesome'
                    color='#f50'
                    size= {26}
                    onPress= {() => this.openNavigator()}
                />
              }

              centerComponent=
              {
                { 
                  text: 'BARBERLIFE', 
                  style: { color: '#fff', fontWeight: 'bold' } 
                }
              }
              
              rightComponent=
              {
                  <Avatar
                      rounded
                      title={this.state.title}
                      overlayContainerStyle={{backgroundColor: this.state.avatarColor}}
                      showAccessory
                      onPress={() => this.goToProfil()}
                  />
              }
              
              containerStyle=
              {
                {
                  backgroundColor: 'black',
                  justifyContent: 'space-around',
                }
              }
          />

          <Divider style={{ backgroundColor: 'white' }} />

          <SearchBarCustom />

          <View style={styles.container}>

            <Card
                title="ACCUEIL"
                image=
                {
                  require('../Images/BarberLife-logo-Brown.png')
                }
                containerStyle=
                {
                  { 
                    borderRadius: '25px', 
                    opacity: 0.98, 
                    height: '95%' 
                  }
                }
            >

              {this.displayHome()}

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