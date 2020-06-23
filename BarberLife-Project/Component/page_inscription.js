import React from 'react'
//import {TextInput,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation

import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, ButtonGroup, Card, CheckBox, Divider, Header, Input } from 'react-native-elements';


import HeaderCustom from './header';
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';

/*
    ButtonGroup:
    https://react-native-elements.github.io/react-native-elements/docs/button_group.html
  */
 const component1 = () => 
    <CheckBox
        center
        title='Client'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={true}//{this.state.checked}
    />
const component2 = () => <CheckBox
 center
 title='Coiffeur'
 checkedIcon='dot-circle-o'
 uncheckedIcon='circle-o'
 //checked={this.state.checked}
/>

const checkbox = [{ element: component1 }, { element: component2 }]

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

// Vue afficher pour la page de connexion
class Inscription extends React.Component{
  
    //Constructeur
    constructor(props){
        super(props)
        this.inputId = ""
        this.inputMdp = ""
        this.state = {
            title: "OFF",
            avatarColor: "red",
            data:[],
            IdUser:""
        }
    }

    //foncitons Navigator
    goToConnexion()
    {
        this.props.navigation.navigate("Connexion");
    }

    goToHome()
    {
        this.props.navigation.navigate("Home");
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
    
    fetchConnexion =   async()=>{
        const response = await fetch('http://192.168.0.15:4545/connexion',{
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
        switch(users.sucess){
            case 1:
                this.setState({
                    IdUser:users.data // Donne au state l'id de l'utilisateur récupérer avec la connexion pour le réutilisser dans home
                })
                this.fetchHome();   
            break;
            case 2:
                alert("Mauvais identifiant ou mots de passe");
            break;
            case 3:
                alert("Veuillez remplir tous les champs");
            break;
 
        }
    } 

    fetchHome = async()=>{
        const response = await fetch('http://192.168.0.15:4545/home',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                firstParam: this.state.IdUser
            }),
        })
        const users = await response.json();
        
    }

    getConnexion()
    {
        this.fetchConnexion(); 
    }

    //Affichage
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
                        size= '26'
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
                            onPress={() => this.goToConnexion()}
                        />
                    }
                    containerStyle={{
                    backgroundColor: 'black',
                    justifyContent: 'space-around',
                    }}
            />
            <Divider style={{ backgroundColor: 'white' }} />
            <SearchBarCustom />

            <SafeAreaView style={styles.container}>
                
                <ScrollView >

                    <Card
                        title='INSCRIPTION'
                        image={require('../Images/BarberLife-logo-Grey.png')}
                        containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
                    >
                        <View style={styles.space}>

                            <Text
                            style={styles.center}
                            > 
                                Vous possédez déjà un compte ? 
                            </Text>
                            <Text
                                accessibilityRole='link'
                                style={[styles.center, styles.link]}
                                onPress={() => this.goToConnexion()}
                            > 
                                Connectez-vous 
                            </Text>

                        </View>

                        <View>

                        <ButtonGroup
                            //onPress={this.updateIndex}
                            //selectedIndex={selectedIndex}
                            buttons={checkbox}
                            containerStyle={{height: 100}} 
                        />

                        <Input
                            label="Nom d'utilisateur"
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez votre nom d'utilisateur (login)"
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
                        />

                        <Input
                            label='Mail'
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez votre adresse e-mail"
                            leftIcon=
                            {
                                <Icon
                                    name='at'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID MAIL ADDRESS'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Input
                            label='Nom'
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez votre nom"
                            leftIcon=
                            {
                                <Icon
                                    name='address-card'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID MAIL ADDRESS'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Input
                            label='Prénom'
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez votre prénom"
                            leftIcon=
                            {
                                <Icon
                                    name='address-card'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID MAIL ADDRESS'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Input
                            label='Date de naissance'
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez votre date de naissance"
                            leftIcon=
                            {
                                <Icon
                                    name='birthday-cake'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID DATE OF BIRTH'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Divider/>

                        <Input
                            label="Numéro de rue"
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez votre numéro de rue"
                            leftIcon=
                            {
                                <Icon
                                    name='road'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID STREET NUMBER'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Input
                            label="Nom de la rue"
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez le nom de la rue"
                            leftIcon=
                            {
                                <Icon
                                    name='road'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID STREET NAME'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Input
                            label="Code postal"
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez le code postal de la vile"
                            leftIcon=
                            {
                                <Icon
                                    name='building'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID ZIPCODE'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Input
                            label="Ville"
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Saisissez le nom de la vile"
                            leftIcon=
                            {
                                <Icon
                                    name='building'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER A VALID CITY'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

                        <Divider/>

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
                        />

                        <Input
                            label='Répéter le mot de passe'
                            labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                            placeholder="Confirmez votre mot de passe"
                            secureTextEntry={true}
                            leftIcon=
                            {
                                <Icon
                                    name='unlock-alt'
                                    size={24}
                                    color='black'
                                />
                            }
                            errorMessage='ENTER THE SAME PASSWORD'
                            errorStyle={{ color: 'red', fontWeight: 'bold' }}
                        />

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
                            //loading={this.state.loading}
                            onPress={() => this.goToHome()}
                            title=" Inscription"
                            type='solid'
                        />
                        </View>

                    </Card>

                </ScrollView>

            </SafeAreaView>

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

export default Inscription