import React from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native'

class CoiffeurItem extends React.Component{
     //Constructeur
     constructor(props)
     {
        super(props)
        
     }
    gotToCoiffeur(id_user)
    {
        this.props.navigation.navigate("Coiffeur", {id_user});
    }
    render(){

      
        // props donner par le component search qui contient les films pour alimenter le template filmItem
        const user = this.props.user
       
       
        return(
          
            <TouchableOpacity  onPress={() => this.gotToCoiffeur(user.id_user)}>
                
                <View >
                   
                    <Text >{user.nom_user}</Text>
                    <Text >{user.prenom_user}</Text>
                   
                </View>
            </TouchableOpacity>
            
        )
    }

}

export default CoiffeurItem