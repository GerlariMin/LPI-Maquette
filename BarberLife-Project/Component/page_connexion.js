import React, { useState } from 'react'
import {TextInput,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,} from 'react-native-elements';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header } from 'react-native-elements';

import HeaderCustom from './header';
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';
import Profil from "../Component/page_profil";

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

// Vue afficher pour la page de connexion
class Connexion extends React.Component
{
  
    //Constructeur
    constructor(props)
    {
        super(props)
        console.log("CONNEXION PROPS: "+JSON.stringify(this.props) +" => "+JSON.stringify(this.props.idUser));
        this.inputId = ""
        this.inputMdp = ""
        this.state = 
        {
          unUser: null,
          title:"OFF",
          avatarColor: "red",
          data:[],
          IdUser:""
        }
    }

    goToConnexion()
    {
        this.props.navigation.navigate("Connexion");
    }

    //fonctions du navigator (pour changer de page)
    goToInscription()
    {
      this.props.navigation.navigate("Inscription");
    }

    goToHome()
    {
      this.props.navigation.navigate("Accueil");
    }

    goToProfil()
    {
        this.props.navigation.navigate("Profil");
    }

    //Si on clique
    goTo()
    {
      if(this.state.IdUser=="")
      {
        this.goToConnexion();
      }
      else
      {
        this.goToProfil();
      }
    }

    openNavigator()
    {
        this.props.navigation.openDrawer();
    }

    //fonctions BDD
    getInputId(text)
    {
        this.inputId = text      
    }
    getInputMdp(text)
    {
        this.inputMdp = text  
    }
    
    fetchConnexion =   async()=>
    {
        //192.169.0.xx => xx correspond au numéro machine de l'IP sur laquelle se lance EXPO
        const response = await fetch('http://192.168.0.32:4545/connexion',
          {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                firstParam: this.inputId,
                secondParam: this.inputMdp,
            }),
          })

        const users = await response.json();

        switch(users.sucess)
        {
            case 1:
              this.setState(
                {
                  IdUser:users.data // Donne au state l'id de l'utilisateur récupérer avec la connexion pour le réutilisser dans home
                }
              )
              this.props.idUser = users.data;
              console.log("IDUSER: "+this.props.idUser);
              this.fetchHome();   
              this.setState({title: "ON", avatarColor: "green"});
              break;
            case 2:
              alert("Mauvais identifiant ou mots de passe");
              break;
            case 3:
              alert("Veuillez remplir tous les champs");
              break;
        }
    } 

    fetchHome = async()=>
    {
      console.log("FETCHHOME START");
        const response = await fetch('http://192.168.0.32:4545/home',
        {
            method:'POST',
            headers:
            {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                firstParam: this.state.IdUser
            }),
        })
        const users = await response.json();
        console.log("user: "+JSON.stringify(users));
        this.setState({user: users});
    }
    getConnexion()
    {
        this.fetchConnexion(); 
        this.goToHome();
    }

    showSTATE()
    {
      console.log("CONNEXION PROPS: "+JSON.stringify(this.props));
    }

    render()
    {
      this.showSTATE();
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
                      title={this.state.title}
                      overlayContainerStyle={{backgroundColor: this.state.avatarColor}}
                      //showAccessory
                      onPress={() => this.goTo()}
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
            title='CONNEXION'
            image={require('../Images/BarberLife-logo-Orange.png')}
            containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
          >
            <View>
            <Input
              label='Login/ Mail'
              labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
              placeholder='Saisissez votre login/ mail'
              leftIcon=
              {
                <Icon
                  name='user-circle-o'
                  size={24}
                  color='black'
                />
              }
              errorMessage='ENTER A VALID LOGIN'
              errorStyle={{ color: 'red', fontWeight: 'bold' }}
              onChangeText={(text) => this.getInputId(text)}
            />
    
            <Input
              label='Mot de passe'
              labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
              placeholder="Saisissez votre mot de passe"
              secureTextEntry={true}
              leftIcon=
              {
                <Icon
                  name='unlock-alt'
                  size={24}
                  color='black'
                />
              }
              errorMessage='ENTER A VALID PASSWORD'
              errorStyle={{ color: 'red', fontWeight: 'bold' }}
              onChangeText={(text) => this.getInputMdp(text)}
            />
            </View>
    
            <View style={styles.space}>
            <Text
              style={styles.center}
              > Vous ne possédez pas encore de compte ? </Text>
            <Text
              accessibilityRole='link'
              style={[styles.center, styles.link]}
              onPress={() => this.goToInscription()}
              > Inscrivez-vous </Text>
            </View>
    
            <View>
            <Button
              buttonStyle={{bottom: 0}}
              icon=
              {
                <Icon
                  name="beer"
                  size={15}
                  color="white"
                />
              }
              loading={this.state.loading}
              onPress={() => this.getConnexion()}
              title=" Connexion"
              type='solid'
            />
            </View>
    
          </Card>
          </View>
          <FooterCustom/>
      </ImageBackground>
        )
    }
}


const styles = StyleSheet.create(
    {
      center:
      {
        textAlign: 'center'
      },
      link:
      {
        color: 'blue',
        fontWeight: 'bold'
      },
      space:
      {
        marginTop: 10,
        marginBottom: 10
      },
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

export default Connexion