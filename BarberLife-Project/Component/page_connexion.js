import React from 'react'
import {View,StyleSheet,Text,TextInput,Button,TouchableOpacity,SafeAreaView} from 'react-native'
// Sert pour mettre la ligne de délimitation
import Divider from 'react-native-divider'




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
        //console.log(users);
    }
    getConnexion(){
       
        this.fetchConnexion(); 
    }

    render(){
        return(
            //Permet de garder le haut de l'écran avec la batterie et le réseaux
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        <Text style={styles.title_blue}>Bar</Text>
                        <Text>Ber</Text>
                        <Text style={styles.title_red}>LiFe</Text>
                    </Text>
                    <TextInput style={styles.idInput} placeholder="Numéro de téléphone,nom d'utilisateur ou a.." onChangeText={(text) => this.getInputId(text)}/>
                    <TextInput style={styles.mdpInput} placeholder="Mot de passe" textContentType={'password'} secureTextEntry={true}  onChangeText={(text) => this.getInputMdp(text)}/>
                    <TouchableOpacity style={styles.valideInput} >
                        <Button title="Connexion" onPress={() => this.getConnexion()}/>
                    </TouchableOpacity>
                    <Divider orientation="center">OU</Divider>
                    <TouchableOpacity style={styles.headerInscrip}>
                        <Text style={styles.inscripText}>
                            <Text>Vous n'avez pas de compte ? </Text>    
                            <Text style={styles.inscripButton}>
                                Inscrivez-vous 
                            </Text>
                        </Text>   
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgetMdp}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>
                    
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor:'red',
        alignItems:"center",
        justifyContent:"center",
        flex:1   
    },
    content:{
       //backgroundColor:'blue',
        width:350,
        height:350
    },
    title:{
        fontSize:40,
        textAlign:"center",
    
    },
    idInput:{
        height:40,
        width:250,
        borderRadius:5,
        borderColor:"black",
        borderWidth:2,
        marginTop:20,
        marginLeft:50,
        marginRight:50
    },
    mdpInput:{
        height:40,
        width:250,
        borderRadius:5,
        borderColor:"black",
        borderWidth:2,
        marginTop:20,
        marginRight:50,
        marginLeft:50
    }
    ,
    title_blue:{
        color:"blue"
    },
    title_red:{
        color:"red"
    },
    valideInput:{
        marginTop:10, 
    },
    headerInscrip:{
        flexDirection:"row",
        marginTop:15,
        alignItems:"center",
        justifyContent:"center"
    },
    inscripText:{
        
        flexWrap:'wrap',
        paddingRight:10
    },
    inscripButton:{
        fontSize:18,
        color:"blue",  
    },
    forgetMdp:{
        textAlign:"center",
        marginTop:10,
        fontSize:15,
        color:'grey'
    }  
})

export default Connexion