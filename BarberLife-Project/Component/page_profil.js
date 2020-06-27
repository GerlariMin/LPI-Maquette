import React from 'react'
import {TextInput,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,} from 'react-native-elements';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header } from 'react-native-elements';

import HeaderCustom from './header';
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';

//https://docs.expo.io/versions/v37.0.0/sdk/imagepicker/
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };


// Vue afficher pour la page de connexion
class Connexion extends React.Component
{
  
    //Constructeur
    constructor(props)
    {
        super(props)
        this.inputId = ""
        this.inputMdp = ""
        this.state = 
        {
            //OFF et red si pas connecté, ON et green sinon
            title:"OFF",
            avatarColor: "red",
            imagePicker: 'https://img.icons8.com/color/1600/avatar.png',
            data:[],
            IdUser: "t",
            count: 0
        }
        console.log("PROFIL PROPS: "+ JSON.stringify(this.props));
    }

    useEffect()
    {
        (async () => 
        {
            if (Constants.platform.ios) 
            {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') 
                {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    };

    pickImage = async () => 
    {
        let result = await ImagePicker.launchImageLibraryAsync(
        {
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        }
        );

        console.log("RESULT: "+JSON.stringify(result));

        if (!result.cancelled) 
        {
            this.setState({imagePicker: result.uri});
        }
    };

    //fonctions du navigator (pour changer de page)
    goToInscription()
    {
      this.props.navigation.navigate("Inscription");
    }

    goToHome()
    {
      this.props.navigation.navigate("Accueil");
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
                firstParam: "m.minbielle@gmail.com",
                secondParam: "momo",
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
        this.fetchConnexion();
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
                title='PROFIL'
                image={require('../Images/BarberLife-logo-Orange.png')}
                containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
            >

                <View style={styles.space, styles.horizontalCenter}>

                    <Avatar 
                        onPress={() => this.pickImage()}
                        overlayContainerStyle={{backgroundColor: 'blue'}}
                        rounded
                        source={{uri: this.state.imagePicker}}
                        size="xlarge"
                        showAccessory
                    />

                </View>

            <View>

            <Input
                label="Nom d'utilisateur"
                labelStyle={{ fontWeight: 'bold', fontStyle: 'italic' }}
                // placeholder={this.state.IdUser} fait planter l'appli 
                // le but est de pouvoir affichier la valeur stockée en base pour que l'utilisateur voit ce qu'il va modifier
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
                //onPress doit lancer une fonction pour modifier les champs qui ont été remplis
                onPress={() => this.goToHome()}
                title=" Modifier"
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

export default Connexion