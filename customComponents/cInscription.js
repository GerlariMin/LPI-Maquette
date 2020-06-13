//Components/cInscription.js
import React from 'react';
/*
  react-native-elements:
  https://react-native-elements.github.io/react-native-elements/docs/getting_started.html
*/
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, ButtonGroup, Card, CheckBox, Divider, Input } from 'react-native-elements';

import HeaderCustom from './cHeader';
import FooterCustom from './cFooter';
import SearchBarCustom from './cSearchBar';

/*
  INPUT:
  https://react-native-elements.github.io/react-native-elements/docs/input.html
*/
export default function cInscription({navigation})
{

  const image = { uri: "https://images.hdqwalls.com/download/apple-pro-display-xdr-5k-jh-1920x1080.jpg" };

  /*
    Functions navigation
  */
  const goTo = () => navigation.navigate("Home");

  const goToConnexion = () => navigation.navigate("Connexion");

  const goBack = () => navigation.goBack();


  /*
    ButtonGroup:
    https://react-native-elements.github.io/react-native-elements/docs/button_group.html
  */
  const component1 = () => <CheckBox
                              center
                              title='Client'
                              checkedIcon='dot-circle-o'
                              uncheckedIcon='circle-o'
                              checked='true'//{this.state.checked}
                            />
  const component2 = () => <CheckBox
                              center
                              title='Coiffeur'
                              checkedIcon='dot-circle-o'
                              uncheckedIcon='circle-o'
                              //checked={this.state.checked}
                            />

  const buttons = [{ element: component1 }, { element: component2 }]
  
    return(

      <ImageBackground source={image} style={styles.image}>
        <HeaderCustom/>
        <Divider style={{ backgroundColor: 'white' }} />
        <SearchBarCustom/>

        <SafeAreaView style={styles.container}>
            <ScrollView >

          <Card
            title='Inscription'
            image={require('../images/BarberLife-logo-Grey.png')}
            containerStyle={{ borderRadius: '25px', opacity: 0.98, height: '95%' }}
          >
            <View style={styles.space}>
            <Text
              style={styles.center}
              > Vous possédez déjà un compte ? </Text>
            <Text
              accessibilityRole='link'
              style={[styles.center, styles.link]}
              onPress={goToConnexion}
              > Connectez-vous </Text>
            </View>

            <View>

            <ButtonGroup
              //onPress={this.updateIndex}
              //selectedIndex={selectedIndex}
              buttons={buttons}
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
              //onPress={handleChange}
              onPress={goBack}
              title=" Connexion"
              type='solid'
            />
            </View>

          </Card>

          </ScrollView>
    </SafeAreaView>

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
