//Components/cAuthentification.js
import React from 'react';
/*
  react-native-elements:
  https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
*/
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Card, Divider, Input } from 'react-native-elements';

import HeaderCustom from './cHeader';
import FooterCustom from './cFooter';
import SearchBarCustom from './cSearchBar';

/*
  INPUT:
  https://react-native-elements.github.io/react-native-elements/docs/input.html
*/
export default function cAuthentification({navigation})
{

  const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

  const goTo = () => navigation.navigate("Home");

  const goToInscription = () => navigation.navigate("Inscription");

  const goBack = () => navigation.goBack();
  
    return(

      <ImageBackground source={image} style={styles.image}>
        <HeaderCustom/>
        <Divider style={{ backgroundColor: 'white' }} />
        <SearchBarCustom/>

        <View style={styles.container}>

          <Card
            title='CONNEXION'
            image={require('../images/BarberLife-logo-Orange.png')}
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
            />
            </View>

            <View style={styles.space}>
            <Text
              style={styles.center}
              > Vous ne possédez pas encore de compte ? </Text>
            <Text
              accessibilityRole='link'
              style={[styles.center, styles.link]}
              onPress={goToInscription}
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
              //loading={this.state.loading}
              //onPress={handleChange}
              onPress={goBack}
              title=" Connexion"
              type='solid'
            />
            </View>

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
  center:
  {
    textAlign: 'center'
  },
  image:
  {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
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
  }
});

//export default cAuthentification
