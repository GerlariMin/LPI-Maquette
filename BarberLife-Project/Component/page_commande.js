import React from 'react'
import ReactDOM from 'react-dom'
import {TextInput,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,} from 'react-native-elements';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header, ListItem } from 'react-native-elements';

import HeaderCustom from './header';
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';
import Coiffeur from './page_coiffeur';
import CoiffeurItems from './coiffeurItems'
//https://docs.expo.io/versions/v37.0.0/sdk/imagepicker/
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

const list = [{"id_user":2,"id_tk":1,"typeProfil_user":0,"nom_user":"Coiffeur","prenom_user":"tailleur","dataNaiss_user":"20/10/1999","mail_user":"coiffeur.tailleur@pro.com","sexe_user":"homme","numero_user":"0605050505","adress_user":"adresse2","password_user":"coiffeur"},{"id_user":3,"id_tk":1,"typeProfil_user":0,"nom_user":"Professionnel","prenom_user":"raseur","dataNaiss_user":"18/02/1980","mail_user":"proraseur@gmail.com","sexe_user":"homme","numero_user":"0143752077","adress_user":"adresse inconnue","password_user":"coiffeur"}]; 


// Vue afficher pour la page de commande
export default class Commande extends React.Component
{
  
    //Constructeur
    constructor(props)
    {
        super(props)
        console.log("COMMANDE PROPS: "+ JSON.stringify(this.props));
        this.inputId = ""
        this.inputMdp = ""
        this.state = 
        {
            coiffeurs: "",
            //OFF et red si pas connecté, ON et green sinon
            title:"OFF",
            avatarColor: "red",
            imagePicker: 'https://img.icons8.com/color/1600/avatar.png',
            data:[],
            IdUser: "t"
        }
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

    gotToCoiffeur(id_user)
    {
        this.props.navigation.navigate("Coiffeur", {id_user});
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

    getConnexion()
    {
        this.fetchConnexion(); 
        this.goToHome();
    }

    componentWillMount()
    {
        this.fetchConnexion(); 
    }

    //pendant que la page charge on récupère les données et on modifie le state pour les inputs
    componentWillMount()
    {
        //this.fetchAllBarber();
    }

    fetchAllBarber = async()=>
    {
        const response = await fetch('http://192.168.0.15:4545/searchBarber',
        {
            method:'POST',
            headers:
            {
                'Content-Type':'application/json',
            }
        })
        const barbers = await response.json();
        console.log("BARBERS: "+JSON.stringify(barbers));
        this.setState({coiffeurs: barbers})
    }

    displayCoiffeur(){
        if(this.state.coiffeurs != null){
            return(
                <FlatList

                data={this.state.coiffeurs}
                keyExtractor= {(item) => item.id_user.toString()}
                renderItem= {({item}) => (
                    <CoiffeurItems
                        user = {item}
                        navigation = {this.props.navigation}
                    />
                )}
            />
            )
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
                    title='COMMANDE'
                    image={require('../Images/BarberLife-logo-Orange.png')}
                    containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
                >

                <View>
                {
                    //probleme: doit afficher la liste après clic sur le bouton mais bug si on utilise le state 
                   /* list.map((l, i) => (
                    <ListItem
                        key={l.id_user}
                        leftAvatar={{ source: { uri: this.state.imagePicker } }}
                        title={l.nom_user + l.prenom_user}
                        //subtitle={l.subtitle}
                        bottomDivider
                        onPress={() => this.gotToCoiffeur(l.id_user)}
                    />
                    ))*/

                }
                {this.displayCoiffeur()}
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
                        onPress={() => this.fetchAllBarber()}
                        title=" Actualiser la liste des coiffeurs à proximité"
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
        
    },
    horizontalCenter:
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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