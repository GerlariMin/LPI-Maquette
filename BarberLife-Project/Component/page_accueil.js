import React from 'react'
import {TextInput,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, Header } from 'react-native-elements';

//https://docs.expo.io/versions/v37.0.0/sdk/location/
import * as Location from 'expo-location';

//import AvatarCustom from './avatar'
//import HeaderCustom from './header';
import FooterCustom from './footer';
import SearchBarCustom from './searchbar';

const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

// Vue afficher pour la page de connexion
class Home extends React.Component
{

    constructor(props)
    {
        super(props)
        this.inputId = ""
        this.inputMdp = ""
        this.state = 
        {
            data:[],
            IdUser:"",
            lieu: "en cours de localisation..."
        }
        global.MyVar = this.navigation;
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

    setLocation(param)
    {
      console.log("SET- START");
      console.log("setloc: "+param);
      this.lieu=param;
    }
    //https://docs.expo.io/versions/v37.0.0/sdk/location/
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
    
    showSTATE()
    {
      console.log("state: " +JSON.stringify(this.state));
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
                        size= '26'
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
                            onPress={() => this.goToConnexion()}
                            props={this.props}
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
                    title="ACCUEIL"
                    image={require('../Images/BarberLife-logo-Brown.png')}
                    containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
                >

                    <Button 
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

                    <Text>
                      lieu: {this.state.lieu}
                    </Text>

                    <Button
                        onPress={() => this.showSTATE()}
                        title={` State`}
                        icon=
                        {
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                        }
                    />

                    <Button
                        onPress={() => this.goToConnexion()}
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

export default Home
