import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import { Avatar, ListItem}  from 'react-native-elements';
export default class CoiffeurItem extends React.Component{
     //Constructeur
     constructor(props)
     {
        super(props)
        
     }
    gotToCoiffeur(user)
    {
        this.props.navigation.navigate("Coiffeur", {user});
    }
    render(){

      
        // props donner par le component search qui contient les films pour alimenter le template filmItem
        const user = this.props.user
       
       
        return(

                <View >
                
                    <ListItem
                        key={user.id_user}
                        leftAvatar={{ source: { uri: 'https://img.icons8.com/color/1600/avatar.png' } }}
                        title={user.nom_user +" "+ this.props.user.prenom_user}
                        bottomDivider
                        onPress={() => this.gotToCoiffeur(user)}
                    />
                   
                </View>
            
        )
    }

}