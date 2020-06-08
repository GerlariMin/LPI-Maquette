import React from 'react'
import {View,StyleSheet,Text,TextInput,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Input,Button } from 'react-native-elements';




// Vue afficher pour la page de connexion
class Connexion extends React.Component{
    constructor(props){
        super(props)
        this.inputId = ""
        this.inputMdp = ""
        this.state = {
            data:[],
            IdUser:""
        }
    }
    getInputId(text){
        this.inputId = text      
    }
    getInputMdp(text){
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
    getConnexion(){
        this.fetchConnexion(); 
    }

    render(){
        return(
            <Card
            title='Connexion'
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
      }
    });

export default Connexion